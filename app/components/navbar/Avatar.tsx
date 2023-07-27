'use client';

import Image from 'next/image';
import React from 'react';

interface AvatarProps {
  src: string | null | undefined;
}

export default function Avatar({ src }: AvatarProps) {
  return (
    <Image
      alt="Logo"
      className="rounded-full"
      width="30"
      height="30"
      src={src || '/images/placeholder.jpg'}
    />
  );
}
