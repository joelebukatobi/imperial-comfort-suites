// React
import { useEffect } from 'react';
// Next JS
import { useRouter } from 'next/router';
import Image from 'next/image';
// Components
import Header from '@/global//layouts/Header';
import Footer from '@/global//layouts/Footer';
import Button from '@/global//elements/Button';
import Input from '@/global//elements/Input';
// Images
import homeHeader from '@/images//home-header.png';
// Config & Helpers
import { API_URL } from '@/config/index';
// External Libraries
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '@/features//user/userActions';

export default function Layout({ children }) {
  // Assign next/router to a variable
  const pathname = useRouter().pathname;
  const { data } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <Header>
        {pathname === '/' && (
          <header className="header__home">
            <main>
              <h1>Own.Rent.Earn</h1>
              <p>
                Do you have a property in Dallas, Texas you’d like to rent? Imperial Comfort Suites is your bridge
                between your property and people looking to rent.
              </p>
              <Button>Make an Enquiry</Button>
            </main>

            <section>
              <figure>
                <Image src={homeHeader} alt="loading" layout="fill" priority />
              </figure>
            </section>
          </header>
        )}
        {pathname === '/about' && (
          <header className="header__about">
            <main>
              <span>Trusted by thousands</span>
              <h2>Rent with us, Live like Royalty.</h2>
              <p>
                <p>
                  We are a local hospitality company in Dallas, Texas and we're looking for rentals just like yours. We
                  are a team of professionals with years of experience in the real estate business dedicated to
                  achieving one thing - getting you value for your property. We have built a reputation as the best in
                  terms of innovation and efficient service delivery.
                </p>
              </p>
              <Button>Make an Enquiry</Button>
            </main>

            <section>
              <figure>
                <Image src={homeHeader} alt="loading" layout="fill" priority />
              </figure>
            </section>
          </header>
        )}
        {pathname === '/listing' && (
          <header className="header__listing">
            <section>
              <h2>Find your next home for your vacation</h2>
              <form>
                <Input />
                <Input />
                <Input />
                <Input />
                <Button>Show</Button>
              </form>
            </section>
          </header>
        )}
        {pathname === '/contact' && (
          <header className="header__contact">
            <section>
              <h2>Feel free to contact us</h2>
              <main>
                <figure>
                  <svg></svg>
                  <figcaption>
                    <h4>Email Address</h4>
                    <p>info@imperialcomfortsuite.com</p>
                  </figcaption>
                </figure>
                <hr />
                <figure>
                  <svg></svg>
                  <figcaption>
                    <h4>Phone Number</h4>
                    <p>(682) 283-7869</p>
                  </figcaption>
                </figure>
              </main>
            </section>
          </header>
        )}
      </Header>
      {children}
      <Footer />
    </>
  );
}
