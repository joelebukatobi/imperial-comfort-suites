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
      <nav className={open ? `h-[100vh] [w-100%]` : `py-[3.2rem] w-[100%]  flex items-center justify-between`}>
        <Link href="/">
          <img className="h-[4rem]" src="/images/icon-logo.png" alt="" />
        </Link>

        <div className="flex items-center gap-x-[8rem]">
          <ul>
            <Link href="/">
              <li>
                Home
                <hr className={pathname === '/' ? 'visible' : 'invisible'} />
              </li>
            </Link>
            <Link href="/about">
              <li>
                About
                <hr className={pathname === '/about' ? 'visible' : 'invisible'} />
              </li>
            </Link>
            <Link href="/listing">
              <li>
                Listing
                <hr className={pathname === '/listing' ? 'visible' : 'invisible'} />
              </li>
            </Link>
            <Link href="/contact">
              <li>
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
