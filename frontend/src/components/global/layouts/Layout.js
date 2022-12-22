// React
import { useState, useEffect } from 'react';
// Next JS
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
// Components
import Header from '@/global//layouts/Header';
import Footer from '@/global//layouts/Footer';
import Button from '@/global//elements/Button';
import Video from '@/global//components/Video';
// Images
import homeHeader from '@/images//home-header.png';
import aboutHeader from '@/images//about-image.png';
// External Libraries
import AOS from 'aos';

export default function Layout({ children, pageTitle, description, keywords }) {
  useEffect(() => {
    AOS.init();
  }, []);
  //

  const [videoModal, setVideoModal] = useState(false);
  // Assign next/router to a variable
  const pathname = useRouter().pathname;
  const navigate = useRouter().push;

  const toggleVideoModal = () => {
    setVideoModal(!videoModal);
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index,follow" />
        <meta property="og:image" content="/images/image-og.png" />
        <meta name="keywords" content={keywords} />
      </Head>
      <div id="global">
        <Header>
          {pathname === '/' && (
            <header className="header__home">
              <main data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" data-aos-easing="ease-in-out">
                <h1>Own.Rent.Earn</h1>
                <p>
                  Do you have a property in Dallas, Texas you’d like to rent? Imperial Comfort Suites is your bridge
                  between your property and people looking to rent.
                </p>
                <Button
                  onClick={() => {
                    navigate('/contact');
                  }}
                >
                  Make an Enquiry
                </Button>
              </main>
              <section data-aos="flip-right" data-aos-duration="800" data-aos-delay="100" data-aos-easing="ease-in-out">
                <figure>
                  <Image src={homeHeader} alt="loading" layout="fill" priority />
                </figure>
                <main onClick={toggleVideoModal}>
                  <div>
                    <svg>
                      <use href="/images/sprite.svg#icon-play" />
                    </svg>
                  </div>
                  <div>
                    <h4>Play this video</h4>
                    <p>To know how it works</p>
                  </div>
                </main>
              </section>
            </header>
          )}
          {pathname === '/about' && (
            <header className="header__about">
              <main data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" data-aos-easing="ease-in-out">
                <span>Trusted by thousands</span>
                <h2>Rent with us, Live like Royalty.</h2>
                <p>
                  We are a local hospitality company in Dallas, Texas and we're looking for rentals just like yours. We
                  are a team of professionals with years of experience in the real estate business dedicated to
                  achieving one thing - getting you value for your property. We have built a reputation as the best in
                  terms of innovation and efficient service delivery.
                </p>
              </main>

              <section data-aos="flip-right" data-aos-duration="800" data-aos-delay="100" data-aos-easing="ease-in-out">
                <figure>
                  <Image src={aboutHeader} alt="loading" layout="fill" priority />
                </figure>
              </section>
            </header>
          )}
          {pathname === '/contact' && (
            <header className="header__contact">
              <section>
                <h2 data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" data-aos-easing="ease-in-out">
                  Feel free to contact us
                </h2>
                <main data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" data-aos-easing="ease-in-out">
                  <figure>
                    <div>
                      <svg>
                        <use href="/images/sprite.svg#icon-email" />
                      </svg>
                    </div>
                    <figcaption>
                      <h4>Email Address</h4>
                      <p>info@imperialcomfortsuites.com</p>
                    </figcaption>
                  </figure>
                  <hr />
                  <figure>
                    <div>
                      <svg>
                        <use href="/images/sprite.svg#icon-phone" />
                      </svg>
                    </div>
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
        <Video modal={videoModal} closeModal={setVideoModal} />
      </div>
    </>
  );
}

Layout.defaultProps = {
  pageTitle: 'Imperial Comfort Suites',
  description:
    'Imperial Comfort Suites is your best choice if you want to place your property on the market and obtain the finest bids. We are well versed with the area, its people and the properties.',
  keywords: 'airbnb, housing, hotels, suites, room, ',
};
