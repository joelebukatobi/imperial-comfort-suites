// React
import { useState } from 'react';
// Next JS
import Link from 'next/link';
import { useRouter } from 'next/router';
// Components
import Container from '@/global//layouts/Container';
import Button from '@/global//elements/Button';

export default function Navbar() {
  // Assign next/router to a variable
  const pathname = useRouter().pathname;
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <Container className={'max-width w-[100%]'}>
      <nav
        className={
          open
            ? `absolute z-[10] left-0 bg-black h-[100vh] w-full p-[3.2rem]`
            : `py-[3.2rem] w-[100%]  md:flex items-center justify-between`
        }
      >
        <div className="flex justify-between mb-[3.2rem] md:mb-0 ">
          <Link href="/">
            <img className="h-[4rem]" src="/images/icon-logo.png" alt="" />
          </Link>

          <svg onClick={toggle} className="h-[3.2rem] w-[3.2rem] md:hidden">
            <use href="/images/sprite.svg#icon-menu" />
          </svg>
        </div>

        <div
          className={open ? 'flex flex-col gap-y-[4rem] md:gap-y-0' : 'hidden md:flex md:items-center md:gap-x-[8rem]'}
        >
          <ul>
            <Link href="/">
              <li className={pathname === '/' ? 'text-[#FF9900] md:text-white' : 'text-white'}>
                Home
                <hr className={pathname === '/' ? 'visible' : 'invisible'} />
              </li>
            </Link>
            <Link href="/about">
              <li className={pathname === '/about' ? 'text-[#FF9900] md:text-white' : 'text-white'}>
                About
                <hr className={pathname === '/about' ? 'visible' : 'invisible'} />
              </li>
            </Link>
            <Link href="/listing">
              <li className={pathname === '/listing' ? 'text-[#FF9900] md:text-white' : 'text-white'}>
                Listing
                <hr className={pathname === '/listing' ? 'visible' : 'invisible'} />
              </li>
            </Link>
            <Link href="/contact">
              <li className={pathname === '/contact' ? 'text-[#FF9900] md:text-white' : 'text-white'}>
                Contact Us
                <hr className={pathname === '/contact' ? 'visible' : 'invisible'} />
              </li>
            </Link>
          </ul>
          <Button>Become a Host</Button>
        </div>
      </nav>
    </Container>
  );
}
