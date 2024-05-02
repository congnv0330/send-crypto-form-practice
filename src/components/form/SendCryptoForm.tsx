import { useMemo } from 'react';
import {
  Control,
  Controller,
  useForm,
  useFormState,
  useWatch,
} from 'react-hook-form';

import { Button } from '@/components/common/Button';
import { ErrorMessage } from '@/components/common/ErrorMessage';
import { Input } from '@/components/common/Input';
import { Label } from '@/components/common/Label';
import { IconClose } from '@/components/icons/IconClose';
import { IconCopy } from '@/components/icons/IconCopy';
import { IconQR } from '@/components/icons/IconQR';
import { TokenSelect } from '@/components/token/TokenSelect';
import { RecentlyUserSuggest } from '@/components/user/RecentlyUserSuggest';
import { UserSelect } from '@/components/user/UserSelect';
import { copyToClipboard } from '@/helpers/copy';
import { ISendCryptoFormValue, IToken, IUser } from '@/types';

function SendCryptoFormAmountInput({
  control,
}: {
  control: Control<ISendCryptoFormValue>;
}) {
  const amount = useWatch({ control, name: 'amount' });
  const token = useWatch({ control, name: 'token' });

  const total = useMemo<string>(() => {
    const _amount = Number(amount);

    if (!_amount) {
      return '0.0';
    }

    return (_amount * (token?.price ?? 0)).toString();
  }, [amount, token?.price]);

  return (
    <Controller
      control={control}
      name="amount"
      render={({ field, fieldState: { error } }) => (
        <div className="flex-grow">
          <Input
            min={0}
            max={token?.user_balance ?? 0}
            suffix={`$${total}`}
            className="text-right"
            {...field}
          />
          {error?.message && (
            <ErrorMessage className="mt-2">{error.message}</ErrorMessage>
          )}
        </div>
      )}
    />
  );
}

function SendCryptoFormTokenBalance({
  control,
}: {
  control: Control<ISendCryptoFormValue>;
}) {
  const token = useWatch({ control, name: 'token' });

  if (!token) {
    return null;
  }

  return (
    <p className="mt-2 text-right text-xxs text-sub">
      Balance:{' '}
      <span className="text-blue font-semibold">
        {token.user_balance} {token.code}
      </span>
    </p>
  );
}

function SendCryptoFormSubmitButton({
  control,
}: {
  control: Control<ISendCryptoFormValue>;
}) {
  const { isSubmitting, isValid } = useFormState({ control });

  return (
    <Button type="submit" disabled={!isValid || isSubmitting}>
      Send
    </Button>
  );
}

interface SendCryptoFormSummaryProps {
  control: Control<ISendCryptoFormValue>;
  className: string;
}

function SendCryptoFormSummary({
  control,
  className,
}: SendCryptoFormSummaryProps) {
  const recipient = useWatch({ control, name: 'recipient' });
  const token = useWatch({ control, name: 'token' });
  const amount = useWatch({ control, name: 'amount' });

  const amountAsNumber = useMemo(() => Number(amount), [amount]);

  const total = useMemo<number>(() => {
    if (!amountAsNumber) {
      return 0.0;
    }

    return amountAsNumber * (token?.price ?? 0) + (token?.network_fee ?? 0);
  }, [amountAsNumber, token?.network_fee, token?.price]);

  const copyToUsername = async () => {
    if (!recipient?.username) {
      return;
    }

    await copyToClipboard(recipient.username);

    alert('Copied!');
  };

  return (
    <div className={className}>
      <h2 className="text-base font-semibold leading-4.5 text-purple-400">
        Summary
      </h2>
      <div className="flex items-start justify-between">
        <p className="font-light text-sub">From</p>
        <div className="text-right">
          <p className="text-sm font-light leading-4.5">John Smith</p>
          <p className="mt-2 text-xxs text-sub">@john.smith1</p>
        </div>
      </div>
      <div className="flex items-start justify-between">
        <p className="font-light text-sub">To</p>
        <div className="text-right">
          <p className="text-sm font-light leading-4.5">
            {recipient?.name ?? '-'}
          </p>
          <div className="mt-2 flex items-center justify-end gap-2">
            <p className="text-xxs text-sub">@{recipient?.username ?? '-'}</p>
            <button
              type="button"
              className="h-4 w-4 appearance-none"
              onClick={copyToUsername}
            >
              <IconCopy />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between">
        <p className="font-light text-sub">Network Fee</p>
        <p className="text-sm font-light leading-4.5">
          ${token?.network_fee ?? '0.0'}
        </p>
      </div>
      <div className="flex items-start justify-between">
        <p className="font-light text-sub">Amount</p>
        <p className="text-sm font-light leading-4.5">
          ${token ? `${amountAsNumber ? amount : '0.0'} ${token.code}` : '0.0'}
        </p>
      </div>
      <div className="h-px w-full bg-div-bound" />
      <div className="flex items-start justify-between">
        <p className="font-light text-sub">Total</p>
        <div className="text-right">
          <p className="text-sm font-light leading-4.5"></p>
          <div className="flex items-center justify-end gap-2">
            <img src="/images/ethereum.png" className="h-4 w-4" alt="" />
            <p className="text-sm font-semibold leading-4">
              {amountAsNumber ? amount : '0.0'}
            </p>
          </div>
          <p className="mt-2 text-right text-xxs text-sub">${total}USD</p>
        </div>
      </div>
    </div>
  );
}

export interface SendCryptoFormProps {
  users: IUser[];
  recentlyUsers: IUser[];
  tokens: IToken[];
  defaultValues: ISendCryptoFormValue;
  onSubmit?: (value: ISendCryptoFormValue) => void;
}

export function SendCryptoForm({
  users,
  recentlyUsers,
  tokens,
  defaultValues,
  onSubmit,
}: SendCryptoFormProps) {
  const { control, handleSubmit } = useForm<ISendCryptoFormValue>({
    defaultValues,
  });

  const _onSubmit = (values: ISendCryptoFormValue) => {
    onSubmit && onSubmit(values);
  };

  return (
    <div className="w-[48.75rem] max-w-full space-y-6 rounded-4xl bg-white p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold leading-5.5 text-purple-400">
          Send to
        </h1>
        <button
          type="button"
          className="flex h-6 w-6 items-center justify-center text-purple-400"
        >
          <IconClose />
        </button>
      </div>
      <form
        className="flex flex-col gap-8 lg:flex-row"
        onSubmit={handleSubmit(_onSubmit)}
      >
        <div className="w-full lg:w-[23.75rem]">
          <div className="space-y-2">
            <Label>To</Label>
            <div className="flex items-start gap-2">
              <Controller
                control={control}
                name="recipient"
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <div className="flex-grow">
                    <UserSelect
                      users={users}
                      value={value}
                      onChange={onChange}
                    />
                    {error?.message && (
                      <ErrorMessage className="mt-2">
                        {error.message}
                      </ErrorMessage>
                    )}
                  </div>
                )}
              />
              <button
                type="button"
                className="w-12.5 h-12.5 flex items-center justify-center rounded-2xl bg-div-bound text-purple-400"
              >
                <IconQR />
              </button>
            </div>
          </div>
          <div className="mt-2">
            <Controller
              control={control}
              name="recipient"
              render={({ field: { onChange } }) => (
                <div className="flex-grow">
                  <RecentlyUserSuggest
                    users={recentlyUsers}
                    onChange={onChange}
                  />
                </div>
              )}
            />
          </div>
          <div className="mt-6 space-y-2">
            <Label>Token & Amount</Label>
            <div className="flex items-start gap-2">
              <Controller
                control={control}
                name="token"
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <div>
                    <TokenSelect
                      tokens={tokens}
                      value={value}
                      onChange={onChange}
                    />
                    {error?.message && (
                      <ErrorMessage className="mt-2">
                        {error.message}
                      </ErrorMessage>
                    )}
                  </div>
                )}
              />
              <SendCryptoFormAmountInput control={control} />
            </div>
          </div>
          <SendCryptoFormTokenBalance control={control} />
          <div className="mt-6">
            <SendCryptoFormSubmitButton control={control} />
          </div>
        </div>
        <SendCryptoFormSummary
          control={control}
          className="space-y-4 rounded-3xl border border-div-bound p-6 lg:flex-grow"
        />
      </form>
    </div>
  );
}
