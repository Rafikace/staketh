# OpenVault
## Offline, Permissionless, Censorship-Resistant Savings Protocol

OpenVault is a non-custodial, permissionless savings protocol that enables anyone with a basic mobile phone to store value and earn yield without banks, apps, identity documents, or continuous internet access.

It is designed for environments where financial access is restricted by infrastructure, institutions, or political conditions, and where users require credible neutrality, privacy, and censorship resistance.

---

## Problem

Most financial systems globally require:
- Internet connectivity
- Smartphones
- Government-issued identity
- Bank or mobile money accounts
- Permission from centralized intermediaries

Even most crypto systems assume:
- Always-online users
- Wallet management literacy
- App-based access

As a result, billions of people — including the unbanked, underbanked, refugees, citizens under capital controls, and offline populations — cannot securely store or grow value in a censorship-resistant way.

---

## Solution

OpenVault provides:
- Permissionless savings
- On-chain yield
- Offline-first access via USSD

Users interact with the protocol using simple GSM USSD codes.
Funds are held in non-custodial on-chain vaults, ensuring users retain full ownership at all times.
No centralized party can freeze, seize, or modify user funds.

---

## Core Properties (ETHGlobal-Aligned)

- Non-custodial by design
- Permissionless access (no KYC, no accounts)
- Censorship-resistant withdrawals
- Privacy-preserving architecture
- Offline-first interaction layer
- Global and jurisdiction-agnostic

---

## User Interaction (Abstracted UX)

*123*OPENVAULT#
Access protocol

*123*OPENVAULT*BAL#
Check savings balance and accrued yield

*123*OPENVAULT*EXIT#
Withdraw funds instantly

---

## Protocol Architecture (High-Level)

OpenVault separates interaction, execution, and value custody to eliminate centralized control.

User (Any Phone)
  |
  | USSD
  v
USSD Relay (Stateless)
  |
  | Signed Intent
  v
Relayer (Replaceable, Non-Custodial)
  |
  | Transaction
  v
OpenVault Smart Contracts
  - User Vaults (Ownership, Balance, Yield Accrual)
  - Yield Strategy Adapters

---

## Vault Model

- Each user controls an individual on-chain vault
- Vaults are represented as immutable ownership certificates (NFT abstraction)
- Vaults hold principal and accrued yield
- Vault ownership defines withdrawal rights
- Users do not interact with NFTs directly

---

## Trust & Decentralization Model

- Smart contracts are the sole authority over funds
- USSD relays only transmit messages and cannot modify balances
- Relayers are replaceable and non-authoritative
- No centralized admin keys for user funds
- No dependency on banks, mobile money systems, or governments

---

## Privacy Model

- No identity collection
- No KYC
- No accounts
- Phone numbers are hashed at the interaction layer
- On-chain vaults are pseudonymous
- Architecture is compatible with future zero-knowledge withdrawal proofs

---

## Why Blockchain Is Required

OpenVault cannot be implemented using traditional financial rails because:
- Banks and mobile money systems are permissioned
- Accounts can be frozen or censored
- Capital controls restrict withdrawals
- Operators can unilaterally block users

Blockchain enables:
- Immutable ownership
- Credible neutrality
- Global settlement
- Censorship-resistant access
- Verifiable yield and balances

---

## Security Model

- Funds are locked in smart contracts
- No single point of custody
- Minimal trusted off-chain components
- Failure of relayers or USSD gateways does not compromise funds
- Users can recover access through alternative relayers

---

## Scope & Intent

OpenVault is a protocol, not a fintech app.
It provides primitives for:
- Offline-first value storage
- Permissionless savings
- Censorship-resistant withdrawals
- Global access without identity requirements

---

## Why OPENVAULT

- Demonstrates real decentralization
- Solves a non-obvious, global problem
- Introduces offline-first crypto UX
- Justifies blockchain usage clearly
- Aligns with Ethereum values of neutrality and permissionlessness
- Extensible for ZK, account abstraction, and DAO governance

---

## Disclaimer

OpenVault is experimental protocol software.
Users assume all risks associated with smart contracts and yield strategies.

---

## License

MIT
