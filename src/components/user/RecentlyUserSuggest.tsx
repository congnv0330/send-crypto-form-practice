import { forwardRef, useImperativeHandle } from 'react';

import { IUser } from '@/types';

import { UserChip } from './UserChip';

export interface IRecentlyUserSuggestProps {
  users: IUser[];
  onChange?: (user: IUser) => void;
}

export const RecentlyUserSuggest = forwardRef<any, IRecentlyUserSuggestProps>(
  ({ users, onChange }, ref) => {
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
