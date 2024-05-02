import {
  createContext,
  type PropsWithChildren,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {
  autoUpdate,
  flip,
  FloatingPortal,
  Placement,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import clsx from 'clsx';

import { IconDown } from '../icons/IconDown';

type BaseSelectProps<TValue> = PropsWithChildren<{
  by: keyof TValue & string;
  className?: string;
  contentClassName?: string;
  placement?: Placement;
  placeholder?: string;
}>;

type SingleSelectProps<TValue> = BaseSelectProps<TValue> & {
  multiple?: false;
  value?: TValue | null;
  renderSelectedOption: (option: TValue) => ReactNode;
  onChange?: (value: TValue | null) => void;
};

type MultipleSelectProps<TValue> = BaseSelectProps<TValue> & {
  multiple: true;
  value?: TValue[];
  renderSelectedOption: (option: TValue[]) => ReactNode;
  onChange?: (value: TValue[]) => void;
};

export type SelectProps<TValue> =
  | SingleSelectProps<TValue>
  | MultipleSelectProps<TValue>;

interface SelectContextValue<TValue> {
  getIsSelected: (option: TValue) => boolean;
  getItemProps: ReturnType<typeof useInteractions>['getItemProps'];
  handleSelect: (option: TValue) => void;
}

const SelectContext = createContext<SelectContextValue<any>>(
  {} as SelectContextValue<any>,
);

export function Select<TValue>({
  by,
  className,
  contentClassName,
  placement = 'bottom-start',
  placeholder = 'Select',
  children,
  multiple,
  value,
  renderSelectedOption,
  onChange,
}: SelectProps<TValue>) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    placement,
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [flip()],
  });

  const click = useClick(context);

  const dismiss = useDismiss(context);

  const role = useRole(context, { role: 'listbox' });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [click, dismiss, role],
  );

  const handleSelect = useCallback(
    (option: TValue) => {
      if (multiple) {
        let _selectedValues: TValue[] = [];

        if (value && value.some((item) => item[by] === option[by])) {
          _selectedValues = value.filter((item) => item[by] !== option[by]);
        } else {
          _selectedValues = [option];
        }

        onChange && onChange(_selectedValues);
      } else {
        onChange && onChange(option);
      }

      setIsOpen(false);
    },
    [by, multiple, onChange, value],
  );

  const getIsSelected = useCallback(
    (option: TValue) => {
      if (!value) {
        return false;
      }

      if (multiple) {
        return value.some((item) => item[by] === option[by]);
      } else {
        return value[by] === option[by];
      }
    },
    [by, value, multiple],
  );

  const selectContext = useMemo(
    () => ({
      handleSelect,
      getIsSelected,
      getItemProps,
    }),
    [getIsSelected, getItemProps, handleSelect],
  );

  return (
    <SelectContext.Provider value={selectContext}>
      <button
        ref={refs.setReference}
        type="button"
        className={clsx(
          'flex w-full items-center justify-between rounded-2xl px-4 py-3.5',
          className,
        )}
        {...getReferenceProps()}
      >
        {value ? renderSelectedOption(value as any) : <p>{placeholder}</p>}
        <IconDown className="h-6 w-6" />
      </button>
      <FloatingPortal>
        {isOpen && (
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <div
              className={clsx(
                'rounded-4xl border border-div-bound bg-white px-3 py-4 shadow-drop-shadow',
                contentClassName,
              )}
            >
              {children}
            </div>
          </div>
        )}
      </FloatingPortal>
    </SelectContext.Provider>
  );
}

export type SelectOptionProps<TValue> = PropsWithChildren<{
  value: TValue;
  className?: (args: { isSelected: boolean }) => string;
}>;

export function SelectOption<TValue>({
  value,
  className,
  children,
}: SelectOptionProps<TValue>) {
  const { getIsSelected, getItemProps, handleSelect } =
    useContext(SelectContext);

  const isSelected = getIsSelected(value);

  return (
    <button
      role="option"
      aria-selected={isSelected}
      tabIndex={isSelected ? 0 : -1}
      className={clsx('block w-full', className?.({ isSelected }))}
      {...getItemProps({
        onClick: () => handleSelect(value),
      })}
    >
      {children}
    </button>
  );
}
