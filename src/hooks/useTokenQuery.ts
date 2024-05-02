import { IToken } from '@/types';

export function useTokenQuery(): { tokens: IToken[] } {
  return {
    tokens: [
      {
        id: 1,
        name: 'ETH',
        logo_url: '/images/ethereum.png',
        code: 'ETH',
        network_fee: 0.3,
        price: 2941.67,
        user_balance: 23341.0,
      },
      {
        id: 2,
        name: 'BNB',
        logo_url: '/images/bnb.png',
        code: 'BNB',
        network_fee: 0.3,
        price: 554.78,
        user_balance: 5.03,
      },
      {
        id: 3,
        name: 'BTC',
        logo_url: '/images/bitcoin.png',
        code: 'BTC',
        network_fee: 0.3,
        price: 57756.19,
        user_balance: 0.000023,
      },
      {
        id: 4,
        name: 'SOL',
        logo_url: '/images/solana.png',
        code: 'SOL',
        network_fee: 0.3,
        price: 133.52,
        user_balance: 0.5,
      },
    ],
  };
}
