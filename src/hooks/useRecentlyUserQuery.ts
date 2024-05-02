import { IUser } from '@/types';

export function useRecentlyUserQuery(): { users: IUser[] } {
  return {
    users: [
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
    ],
  };
}
