
import { describe, it, expect, beforeEach } from 'vitest';
import { Cl } from '@stacks/transactions';

const accounts = simnet.getAccounts();
const deployer = accounts.get('deployer')!;
const wallet1 = accounts.get('wallet_1')!;
const wallet2 = accounts.get('wallet_2')!;

describe('get-vault-balance', () => {
  it('returns 0 for a user with no vault', () => {
    const response = simnet.callReadOnlyFn(
      'open-vault',
      'get-vault-balance',
      [Cl.principal(wallet1)],
      wallet1
    );
    expect(response.result).toBeUint(0);
  });

  it('returns 0 for a different user with no vault', () => {
    const response = simnet.callReadOnlyFn(
      'open-vault',
      'get-vault-balance',
      [Cl.principal(wallet2)],
      wallet2
    );
    expect(response.result).toBeUint(0);
  });

  it('returns correct balance for a user with a vault (mocked)', () => {
    // Mock the map entry
    simnet.setMapData(
      'open-vault',
      'Vaults',
      Cl.principal(wallet1),
      Cl.tuple({ balance: Cl.uint(1000) })
    );

    const response = simnet.callReadOnlyFn(
      'open-vault',
      'get-vault-balance',
      [Cl.principal(wallet1)],
      wallet1
    );
    expect(response.result).toBeUint(1000);
  });

  it('returns correct balance for another user with a vault (mocked)', () => {
    // Mock the map entry for wallet2
    simnet.setMapData(
      'open-vault',
      'Vaults',
      Cl.principal(wallet2),
      Cl.tuple({ balance: Cl.uint(5000000) })
    );

    const response = simnet.callReadOnlyFn(
      'open-vault',
      'get-vault-balance',
      [Cl.principal(wallet2)],
      wallet2
    );
    expect(response.result).toBeUint(5000000);
  });
});

describe('deposit', () => {
  it('successfully deposits valid amount', () => {
    const amount = 1000;
    const response = simnet.callPublicFn(
      'open-vault',
      'deposit',
      [Cl.uint(amount)],
      wallet1
    );
    expect(response.result).toBeOk(Cl.bool(true));

    // Check balance updated
    const balance = simnet.callReadOnlyFn(
      'open-vault',
      'get-vault-balance',
      [Cl.principal(wallet1)],
      wallet1
    );
    expect(balance.result).toBeUint(amount);
  });

  it('fails to deposit zero amount', () => {
    const response = simnet.callPublicFn(
      'open-vault',
      'deposit',
      [Cl.uint(0)],
      wallet1
    );
    expect(response.result).toBeErr(Cl.uint(100)); // ERR_INVALID_AMOUNT
  });

  it('accumulates multiple deposits correctly', () => {
    const amount1 = 1000;
    const amount2 = 500;

    simnet.callPublicFn('open-vault', 'deposit', [Cl.uint(amount1)], wallet1);
    simnet.callPublicFn('open-vault', 'deposit', [Cl.uint(amount2)], wallet1);

    const balance = simnet.callReadOnlyFn(
      'open-vault',
      'get-vault-balance',
      [Cl.principal(wallet1)],
      wallet1
    );
    expect(balance.result).toBeUint(amount1 + amount2);
  });

  it('transfers STX from user to contract', () => {
    const amount = 2000;
    const initialStx = simnet.getAssetsMap().get('.native.stx')?.get(wallet1);

    simnet.callPublicFn('open-vault', 'deposit', [Cl.uint(amount)], wallet1);

    // In unit tests, we can check the assets map or just trust the contract logic if we test the logic itself.
    // For now, we assume success if the function returns OK and map is updated.
    // A more robust test would check the STX transfer event.
    const events = simnet.getEvents();
    const transferEvent = events.find(e => e.event === 'stx_transfer_event');
    expect(transferEvent).toBeDefined();
    expect(transferEvent?.data.amount).toBe(amount.toString());
    expect(transferEvent?.data.sender).toBe(wallet1);
  });
});

describe('withdraw', () => {
  it('successfully withdraws valid amount', () => {
    // Setup: Deposit first
    simnet.callPublicFn('open-vault', 'deposit', [Cl.uint(1000)], wallet1);

    const response = simnet.callPublicFn(
      'open-vault',
      'withdraw',
      [Cl.uint(500)],
      wallet1
    );
    expect(response.result).toBeOk(Cl.bool(true));

    // Check balance updated
    const balance = simnet.callReadOnlyFn(
      'open-vault',
      'get-vault-balance',
      [Cl.principal(wallet1)],
      wallet1
    );
    expect(balance.result).toBeUint(500);
  });

  it('fails to withdraw zero amount', () => {
    const response = simnet.callPublicFn(
      'open-vault',
      'withdraw',
      [Cl.uint(0)],
      wallet1
    );
    expect(response.result).toBeErr(Cl.uint(100)); // ERR_INVALID_AMOUNT
  });

  it('fails to withdraw more than balance', () => {
    simnet.callPublicFn('open-vault', 'deposit', [Cl.uint(100)], wallet1);

    const response = simnet.callPublicFn(
      'open-vault',
      'withdraw',
      [Cl.uint(200)],
      wallet1
    );
    expect(response.result).toBeErr(Cl.uint(101)); // ERR_INSUFFICIENT_BALANCE
  });

  it('fails to withdraw with no vault', () => {
    const response = simnet.callPublicFn(
      'open-vault',
      'withdraw',
      [Cl.uint(100)],
      wallet2 // No deposit made
    );
    expect(response.result).toBeErr(Cl.uint(101)); // ERR_INSUFFICIENT_BALANCE (treat as 0 balance)
  });
});

describe('get-total-tvl', () => {
  it('starts at 0', () => {
    const response = simnet.callReadOnlyFn('open-vault', 'get-total-tvl', [], deployer);
    expect(response.result).toBeUint(0);
  });

  it('increments on deposit and decrements on withdraw', () => {
    // Deposit 1000
    simnet.callPublicFn('open-vault', 'deposit', [Cl.uint(1000)], wallet1);
    let tvl = simnet.callReadOnlyFn('open-vault', 'get-total-tvl', [], deployer);
    expect(tvl.result).toBeUint(1000);

    // Deposit 500 from another user
    simnet.callPublicFn('open-vault', 'deposit', [Cl.uint(500)], wallet2);
    tvl = simnet.callReadOnlyFn('open-vault', 'get-total-tvl', [], deployer);
    expect(tvl.result).toBeUint(1500);

    // Withdraw 200
    simnet.callPublicFn('open-vault', 'withdraw', [Cl.uint(200)], wallet1);
    tvl = simnet.callReadOnlyFn('open-vault', 'get-total-tvl', [], deployer);
    expect(tvl.result).toBeUint(1300);
  });
});
