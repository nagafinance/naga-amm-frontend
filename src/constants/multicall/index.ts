import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'


const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1ee38d535d541c55c9dae27b12edf090c608e6fb', // TODO
  [ChainId.BSCTESTNET]: '0x41857071aA165cBC7cC6Aa96ec37e3cDD09C772c',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
