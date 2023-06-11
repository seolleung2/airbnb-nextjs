'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Logo() {
  const router = useRouter();

  const handleGotoHome = () => {
    router.push('/');
  };

  return (
    <Image
      alt="Logo"
      className="hidden cursor-pointer md:block"
      width="100"
      height="100"
      src="/images/logo.png"
      onClick={handleGotoHome}
    />
  );
}
