import { IUser } from '@/types';

export function useUserQuery(): { users: IUser[] } {
  return {
    users: [
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
    ],
  };
}
