'use client';

import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import classnames from 'classnames';

import { BiDollar } from 'react-icons/bi';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

export default function Input({
  id,
  label,
  type = 'text',
  disabled,
  formatPrice,
  required,
  register,
  errors,
}: InputProps) {
  return (
    <div className="relative w-full">
      {formatPrice && <BiDollar size={24} className={classnames(``)} />}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={classnames(
          'peer w-full rounded-md border-2 bg-white p-4 pt-6 font-light outline-none transition disabled:cursor-not-allowed disabled:opacity-70',
          formatPrice ? 'pl-9' : 'pl-4',
          errors[id]
            ? 'border-rose-500 focus:border-rose-500'
            : 'border-neutral-300 focus:border-black'
        )}
      />
      <label
        className={classnames(
          'text-md absolute top-5 z-10 origin-[0] -translate-y-3 transform duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75',
          formatPrice ? 'left-9' : 'left-4',
          errors[id] ? 'text-rose-500' : 'text-zinc-400'
        )}
      >
        {label}
      </label>
    </div>
  );
}
