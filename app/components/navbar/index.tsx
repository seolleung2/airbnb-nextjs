import React from 'react';
import Container from '@components/Container';
import Logo from './Logo';
import Search from './Search';

export default function Navbar() {
  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div className="border-b-[1px] py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
          </div>
        </Container>
      </div>
    </div>
  );
}
