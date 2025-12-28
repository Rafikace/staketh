
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
