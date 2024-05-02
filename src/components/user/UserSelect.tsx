import { forwardRef, useState } from 'react';
import clsx from 'clsx';

import { IUser } from '@/types';

import { Select, SelectOption } from '../common/Select';

const users: IUser[] = [
  {
    id: 1,
    name: 'Marvin McKinney',
    avatar_url: '/images/user-1.png',
    username: 'bigbear444',
  },
  {
    id: 2,
    name: 'Leslie Alexander',
    avatar_url: '/images/user-2.png',
    username: 'tinypanda866',
  },
  {
    id: 3,
    name: 'Guy Hawkins',
    avatar_url: '/images/user-3.png',
    username: 'hawkins1001',
  },
  {
    id: 4,
    name: 'Darrell Steward',
    avatar_url: '/images/user-4.png',
    username: 'silverlion355',
  },
  {
    id: 5,
    name: 'Ralph Edwards',
    avatar_url: '/images/user-5.png',
    username: 'blueladybug463',
  },
  {
    id: 6,
    name: 'Devon Lane',
    avatar_url: '/images/user-6.png',
    username: 'lazymeercat616',
  },
];

export const UserSelect = forwardRef((props, ref) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <Select<IUser>
      by="id"
      value={user}
      className="cursor-pointer bg-div-bound text-sm font-light leading-4.5"
      contentClassName="w-80 max-w-full space-y-2"
      renderSelectedOption={(option) => option.name}
      onChange={setUser}
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
            <img src={user.avatar_url} className="h-8 w-8" alt={user.name} />
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
});
