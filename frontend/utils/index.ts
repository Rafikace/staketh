import type { AppKitNetwork } from '@reown/appkit/networks'
import type { InferredCaipNetwork } from '@reown/appkit-common'
import { UniversalConnector } from '@reown/appkit-universal-connector'

export const projectId = "YOUR_PROJECT_ID_HERE";

if (!projectId || projectId === "YOUR_PROJECT_ID_HERE") {
  throw new Error('Project ID is not defined. Please set your project ID from the WalletConnect Dashboard.')
}

const stacksMainnet: InferredCaipNetwork = {
  id: 'stacks-mainnet',
  chainNamespace: 'stacks' as const,
  caipNetworkId: 'stacks:1',
  name: 'Stacks Mainnet',
  nativeCurrency: { name: 'STX', symbol: 'STX', decimals: 6 },
  rpcUrls: { default: { http: ['https://stacks-node-api.mainnet.stacks.co'] } }
}

export const networks = [stacksMainnet] as [AppKitNetwork, ...AppKitNetwork[]]

export async function getUniversalConnector() {
  const universalConnector = await UniversalConnector.init({
    projectId,
    metadata: {
      name: 'Universal Connector',
      description: 'Universal Connector',
      url: 'https://www.walletconnect.com',
      icons: ['https://www.walletconnect.com/icon.png']
    },
    networks: [
      {
        methods: ['stx_signMessage', 'stx_signTransaction', 'stx_getAccounts', 'stx_getAddresses', 'stx_callContract', 'stx_deployContract', 'sendTransfer', 'getAddresses'],
        chains: [stacksMainnet as InferredCaipNetwork],
        events: ['stx_chainChanged', 'stx_accountsChanged'],
        namespace: 'stacks'
      }
    ]
  })

  return universalConnector
}