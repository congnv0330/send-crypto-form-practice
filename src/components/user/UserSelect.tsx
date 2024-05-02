import { forwardRef, useImperativeHandle } from 'react';
import clsx from 'clsx';

import { Select, SelectOption } from '@/components/common/Select';
import { IUser } from '@/types';

export interface UserSelectProps {
  users: IUser[];
  value?: IUser | null;
  onChange?: (value: IUser | null) => void;
}

export interface UserSelectRef {}

export const UserSelect = forwardRef<UserSelectRef, UserSelectProps>(
  ({ users, value, onChange }, ref) => {
    const renderSelectedOption = (option: IUser) => option.name;

    useImperativeHandle(ref, () => ({}));

    return (
      <Select<IUser>
        by="id"
        placeholder="Paste, scan or select recipient"
        value={value}
        className="cursor-pointer bg-div-bound text-sm font-light leading-4.5"
        contentClassName="w-80 max-w-full space-y-2"
        renderSelectedOption={renderSelectedOption}
        onChange={onChange}
      >
        {users.map((user) => (
          <SelectOption
            key={user.id}
            value={user}
            className={({ isSelected }) =>
              clsx(
                'flex min-h-12.5 items-center rounded-lg px-3 py-2 transition-colors hover:bg-menu-item',
                {
                  'bg-menu-item': isSelected,
                },
              )
            }
          >
            <div className="pr-4">
              <img
                src={user.avatar_url}
                className="h-8 w-8 rounded-full"
                alt={user.name}
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-light leading-4.5">{user.name}</p>
              <p className="mt-1 text-xs font-light leading-3 text-sub">
                @{user.username}
              </p>
            </div>
          </SelectOption>
        ))}
      </Select>
    );
  },
);
