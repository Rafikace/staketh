;; OpenVault: Offline-first savings protocol
;; Contract to manage user vaults

;; Constants
(define-constant ERR_INVALID_AMOUNT (err u100))
(define-constant ERR_INSUFFICIENT_BALANCE (err u101))

;; Data Maps
(define-map Vaults principal { balance: uint })

;; Read-only functions
(define-read-only (get-vault-balance (user principal))
    (default-to u0 (get balance (map-get? Vaults user)))
)

;; Public functions
(define-public (deposit (amount uint))
    (begin
        ;; Check amount is greater than 0
        (asserts! (> amount u0) ERR_INVALID_AMOUNT)
        
        ;; Transfer STX from sender to contract
        (try! (stx-transfer? amount tx-sender (as-contract tx-sender)))
        
        ;; Update vault balance
        (let 
            (
                (current-balance (get-vault-balance tx-sender))
                (new-balance (+ current-balance amount))
            )
            (map-set Vaults tx-sender { balance: new-balance })
            (ok true)
        )
    )
)

(define-public (withdraw (amount uint))
    (begin
        (let
            (
                (current-balance (get-vault-balance tx-sender))
            )
            ;; Check amount is greater than 0
            (asserts! (> amount u0) (err u100)) ;; ERR_INVALID_AMOUNT
            
            ;; Check sufficient balance
            (asserts! (>= current-balance amount) (err u101)) ;; ERR_INSUFFICIENT_BALANCE
            
            ;; Transfer STX from contract to sender
            (try! (as-contract (stx-transfer? amount tx-sender tx-sender)))
            
            ;; Update vault balance
            (map-set Vaults tx-sender { balance: (- current-balance amount) })
            (ok true)
        )
    )
)
