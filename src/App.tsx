import { useMemo } from 'react';

import { SendCryptoForm } from './components/form/SendCryptoForm';
import { useRecentlyUserQuery } from './hooks/useRecentlyUserQuery';
import { useTokenQuery } from './hooks/useTokenQuery';
import { useUserQuery } from './hooks/useUserQuery';
import { ISendCryptoFormValue } from './types';

export default function App() {
  const { users } = useUserQuery();
  const { users: recentlyUsers } = useRecentlyUserQuery();
  const { tokens } = useTokenQuery();

  const defaultValues = useMemo<ISendCryptoFormValue>(
    () => ({
      recipient: null,
      token: tokens[0],
      amount: '0.0',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onSubmit = (value: ISendCryptoFormValue) => {
    console.log(value);
    alert('Success!');
  };

  return (
    <div className="flex min-h-screen w-full justify-center bg-gray-200 md:items-center">
      <SendCryptoForm
        users={users}
        recentlyUsers={recentlyUsers}
        tokens={tokens}
        defaultValues={defaultValues}
        onSubmit={onSubmit}
      />
    </div>
  );
}
