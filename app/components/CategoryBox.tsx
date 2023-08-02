'use client';

import React, { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { IconType } from 'react-icons';
import classnames from 'classnames';
import qs from 'query-string';

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

export default function CategoryBox({
  icon: Icon,
  label,
  selected,
}: CategoryBoxProps) {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get('category') === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={classnames(
        'flex cursor-pointer flex-col items-center justify-center gap-2 border-b-2 p-3 transition hover:text-neutral-800',
        selected
          ? 'border-b-neutral-800 text-neutral-800'
          : 'border-transparent text-neutral-500'
      )}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
}
