import { forwardRef, useImperativeHandle } from 'react';
import clsx from 'clsx';

import { IToken } from '@/types';

import { Select, SelectOption } from '../common/Select';

const tokens: IToken[] = [
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
];

export interface TokenSelectProps {
  value?: IToken | null;
  onChange?: (value: IToken | null) => void;
}

export interface TokenSelectRef {}

export const TokenSelect = forwardRef<TokenSelectRef, TokenSelectProps>(
  ({ value, onChange }, ref) => {
    const renderSelectedOption = (option: IToken) => (
      <span className="flex items-center gap-2">
        <div>
          <img src={option.logo_url} className="h-6 w-6" alt={option.name} />
        </div>
        <span>{option.name}</span>
      </span>
    );

    useImperativeHandle(ref, () => ({}));

    return (
      <Select<IToken>
        by="id"
        placeholder="-"
        value={value ?? tokens[0]}
        className="cursor-pointer bg-purple-400 text-sm leading-4 text-white"
        contentClassName="w-64 max-w-full space-y-2"
        renderSelectedOption={renderSelectedOption}
        onChange={onChange}
      >
        {tokens.map((token) => (
          <SelectOption
            key={token.id}
            value={token}
            className={({ isSelected }) =>
              clsx(
                'flex min-h-12.5 items-center rounded-lg px-3 py-2 transition-colors hover:bg-menu-item',
                {
                  'bg-menu-item': isSelected,
                },
              )
            }
          >
            <div>
              <img src={token.logo_url} className="h-6 w-6" alt={token.name} />
            </div>
            <p className="ml-4 text-sm font-light leading-4.5">{token.name}</p>
            <p className="ml-auto text-sm font-light leading-4.5 text-sub">
              {token.user_balance}
            </p>
          </SelectOption>
        ))}
      </Select>
    );
  },
);
