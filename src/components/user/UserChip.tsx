import { IUser } from '@/types';

export interface IUserChipProps {
  user: IUser;
  onClick?: (user: IUser) => void;
}

export function UserChip({ user, onClick }: IUserChipProps) {
  const handleClick = () => {
    onClick && onClick(user);
  };

  return (
    <button
      type="button"
      className="inline-flex appearance-none items-center gap-2 rounded-4xl bg-purple-100 py-1 pl-1 pr-2"
      onClick={handleClick}
    >
      <img
        src={user.avatar_url}
        className="h-6 w-6 rounded-full"
        alt={user.name}
      />
      <span className="text-xxs">{user.name}</span>
    </button>
  );
}
