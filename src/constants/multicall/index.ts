import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

let rinkeby = 4;

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', // TODO
  [ChainId.BSCTESTNET]: '0x41857071aA165cBC7cC6Aa96ec37e3cDD09C772c',
  [rinkeby]: '0x4dCa8b0ae136e578Ec8B0F1dDBC457A074705b12'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
