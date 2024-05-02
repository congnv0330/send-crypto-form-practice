import { forwardRef, useImperativeHandle } from 'react';

import { IUser } from '@/types';

import { UserChip } from './UserChip';

const users: IUser[] = [
  {
    id: 3,
    name: 'Guy Hawkins',
    avatar_url: '/images/user-3.png',
    username: 'hawkins1001',
  },
  {
    id: 5,
    name: 'Ralph Edwards',
    avatar_url: '/images/user-5.png',
    username: 'blueladybug463',
  },
  {
    id: 1,
    name: 'Marvin McKinney',
    avatar_url: '/images/user-1.png',
    username: 'bigbear444',
  },
];

export interface RecentlyUserSuggestProps {
  onChange?: (user: IUser) => void;
}

export const RecentlyUserSuggest = forwardRef<any, RecentlyUserSuggestProps>(
  ({ onChange }, ref) => {
    useImperativeHandle(ref, () => ({}));

    return (
      <div className="flex flex-wrap items-center gap-2">
        {users.map((user) => (
          <UserChip key={user.id} user={user} onClick={onChange} />
        ))}
      </div>
    );
  },
);
