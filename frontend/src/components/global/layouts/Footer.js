// Next JS
import { useRouter } from 'next/router';
import Link from 'next/link';
// Components
import Container from '@/global//layouts/Container';
import Input from '@/global//elements/Input';
import Button from '@/global//elements/Button';
import Success from '@/global//components/Success';
// Config & Helpers
import { API_URL } from '@/config/index';
import { useState } from 'react';
export default function Footer() {
  // Router
  const navigate = useRouter().push;
  const pathname = useRouter().pathname;
  // State
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form Data
    const body = new FormData();
    body.append('email', email);

    // Post Requests
    const res = await fetch(`${API_URL}/api/subscriptions`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: body,
    });
    const data = await res.json();
    if (data.success === true) {
      setOpen(true);
    }
  };
  return (
    <footer>
      <Container>
        <div className="top">
          <section>
            <img src="/images/icon-footer-logo.png" alt="" />
            <div>
              <p>
                <strong>Phone:</strong> (682) 283-7869
              </p>
              <p>
                <strong>Email:</strong> info@imperialcomfortsuites.com
              </p>
            </div>
          </section>
          <section>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/listing">Listing</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </section>
          <section>
            <h4>Newsletter</h4>
            <p>Subscribe to our weekly Newsletter and receive updates via email</p>
            <form onSubmit={handleSubmit}>
              <Input
                name={'email'}
                onChange={(e) => setEmail(e.target.value)}
                type={'email'}
                required={'required'}
                placeholder={'Enter Email'}
              />
              <Button>Submit</Button>
            </form>
          </section>
        </div>
        <div className="bottom">
          <p>All Rights Reserved @ Imperial Comfort Suite 2022</p>
        </div>
      </Container>
      <Success modal={open} caption={'Subscribed'} message={'Thank you for subscribing to our newsletter!'} />
    </footer>
  );
}
