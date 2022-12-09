// React
import { useEffect, useState } from 'react';
// Next JS
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
// Components
import Header from '@/global//layouts/Header';
import Footer from '@/global//layouts/Footer';
import Button from '@/global//elements/Button';
import Input from '@/global//elements/Input';
import Select from '@/global//elements/Select';
// Images
import homeHeader from '@/images//home-header.png';
import aboutHeader from '@/images//about-image.png';

export default function Layout({ children, pageTitle, description, keywords }) {
  //
  const [city, setCity] = useState('Dallas');
  const [bedrooms, setBedroom] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  // Assign next/router to a variable
  const pathname = useRouter().pathname;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        {/* <meta property="og:url" content={url ? `https://joelebukatobi.dev/${url}` : `https://joelebukatobi.dev`} /> */}
        <meta property="og:type" content="website" />
        <meta name="robots" content="index,follow" />
        <meta property="og:image" content="/images/image-og.png" />
        <meta name="keywords" content={keywords} />
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito+Sans:wght@200;300;400;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      </Head>
      <div id="global">
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
                <main>
                  <div>
                    <svg className=" ">
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
              <main>
                <span>Trusted by thousands</span>
                <h2>Rent with us, Live like Royalty.</h2>
                <p>
                  We are a local hospitality company in Dallas, Texas and we're looking for rentals just like yours. We
                  are a team of professionals with years of experience in the real estate business dedicated to
                  achieving one thing - getting you value for your property. We have built a reputation as the best in
                  terms of innovation and efficient service delivery.
                </p>
              </main>

              <section>
                <figure>
                  <Image src={aboutHeader} alt="loading" layout="fill" priority />
                </figure>
              </section>
            </header>
          )}
          {pathname === '/listing' && (
            <header className="header__listing">
              <section>
                <h2>Find your next home for your vacation</h2>
                <form>
                  <Input
                    value={city}
                    name={'city'}
                    onChange={(e) => setCity(e.target.value)}
                    type={'text'}
                    required={'required'}
                    placeholder={'City'}
                    disabled={'disabled'}
                  />
                  <Select>
                    <option value="">Bedrooms</option>
                    <option value={1}>1 Bedroom</option>
                    <option value={2}>2 Bedroom</option>
                    <option value={3}>3 Bedroom</option>
                    <option value={4}>4 Bedroom</option>
                  </Select>
                  <div className="md:!w-3/5 flex gap-x-[8%]">
                    <Input
                      value={minPrice}
                      name={'minPrice'}
                      onChange={(e) => setMinPrice(e.target.value)}
                      type={'number'}
                      required={'required'}
                      placeholder={'Min Price'}
                    />
                    <Input
                      value={maxPrice}
                      name={'maxPrice'}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      type={'number'}
                      required={'required'}
                      placeholder={'Max Price'}
                    />
                  </div>
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
                    <div>
                      <svg>
                        <use href="/images/sprite.svg#icon-email" />
                      </svg>
                    </div>
                    <figcaption>
                      <h4>Email Address</h4>
                      <p>info@imperialcomfortsuite.com</p>
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
