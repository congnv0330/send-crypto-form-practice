import { forwardRef, useImperativeHandle } from 'react';
import clsx from 'clsx';

import { Select, SelectOption } from '@/components/common/Select';
import { IToken } from '@/types';

export interface TokenSelectProps {
  tokens: IToken[];
  value?: IToken | null;
  onChange?: (value: IToken | null) => void;
}

export interface TokenSelectRef {}

export const TokenSelect = forwardRef<TokenSelectRef, TokenSelectProps>(
  ({ tokens, value, onChange }, ref) => {
    const renderSelectedOption = (option: IToken) => (
      <span className="flex items-center gap-2">
        <div className="flex-shrink-0">
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
        value={value}
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
            <div className="flex-shrink-0">
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
