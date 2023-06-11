'use client';

import Image from 'next/image';
import React from 'react';

export default function Avatar() {
  return (
    <Image
      alt="Logo"
      className="rounded-full"
      width="30"
      height="30"
      src="/images/placeholder.jpg"
    />
  );
}
