import { MenuEntry } from 'naga-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://naga.finance',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {

        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://naga.finance/farms',
  },
  {
    label: 'Pool',
    icon: 'PoolIcon',
    href: 'https://naga.finance/pools',
  },

  // {
  //   label: 'sNFT',
  //   icon: 'NftIcon',
  //   href: '/nfts',
  // },
  // {
  //   label: 'cNFT',
  //   icon: 'NftIcon',
  //   href: '/cnfts',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'BNFT',
  //   icon: 'NftIcon',
  //   href: '/bnfts',
  // },
  // {
  //   label: 'Lucky Draw',
  //   icon: 'TicketIcon',
  //   href: '/NotFound',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://blockchain-the-new-gen.gitbook.io/ngen-1/about-us/contact'

      },
      {
        label: 'Voting',
        href: 'https://snapshot.org/#/nagafinance.eth'

      },
      {
        label: 'Github',
        href: 'https://github.com/NGen-Defi-Society',
      },
      {
        label: 'Docs',
        href: 'https://blockchain-the-new-gen.gitbook.io/',
      },
      {
        label: 'Blog',
        href: 'https://blockchainthenewgen.com/',
      },
    ],
  },
]

export default config
