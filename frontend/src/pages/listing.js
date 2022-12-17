// React
import { useState } from 'react';
// Next JS
import Link from 'next/link';
// Components

import Card from '@/global//components/Card';
import Container from '@/global//layouts/Container';
import Layout from '@/global//layouts/Layout';
import Subscribe from '@/global//components/Subscribe';
import Header from '@/global//layouts/Header';
import Button from '@/global//elements/Button';
import Input from '@/global//elements/Input';
import Select from '@/global//elements/Select';
// Config\, Utils & Helpers
import { API_URL } from '@/config/index';

export default function Listing({ listings }) {
  const [city, setCity] = useState('Dallas');
  const [bedroom, setBedroom] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [newListings, setNewListings] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `${API_URL}/api/listings?min_price=${minPrice}&max_price=${maxPrice}&bedrooms=${bedroom}&city=${city}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await res.json();
    setNewListings(data.listings);
  };
  return (
    <Layout pageTitle={'Listing | Imperial Comfort Suites'}>
      <div className="header">
        <header className="header__listing">
          <section>
            <h2>Find your next home for your vacation</h2>
            <form onSubmit={handleSubmit}>
              <Input
                value={city}
                name={'city'}
                onChange={(e) => setCity(e.target.value)}
                type={'text'}
                required={'required'}
                placeholder={'City'}
                disabled={'disabled'}
              />
              <Select onChange={(e) => setBedroom(e.target.value)}>
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
      </div>
      <Container>
        <section className="listings">
          <main className="listings__row">
            {newListings === null ? (
              listings.map((listing) => (
                <div className="card">
                  <figure>
                    <main>
                      <img src={`${API_URL}/storage/${listing.image}`} alt="" />

                      <div>
                        <p>${listing.price}/Month</p>
                        <span className="font-bold">Rent</span>
                      </div>
                    </main>
                    <figcaption>
                      <main>
                        <h4>{listing.name}</h4>
                        <p>{listing.address}</p>
                      </main>
                      <div>
                        <p>{listing.bedrooms} Bedroom</p>
                        <hr />
                        <p>{listing.bathrooms} Bathrooms</p>
                        <hr />
                        <p>{listing.size}</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))
            ) : newListings.length > 0 ? (
              newListings.map((listing) => (
                <div className="card">
                  <figure>
                    <main>
                      <img src={`${API_URL}/storage/${listing.image}`} alt="" />
                      <div>
                        <p>${listing.price}/Month</p>
                        <span className="font-bold">Rent</span>
                      </div>
                    </main>
                    <figcaption>
                      <main>
                        <h4>{listing.name}</h4>
                        <p>{listing.address}</p>
                      </main>
                      <div>
                        <p>{listing.bedrooms} Bedroom</p>
                        <hr />
                        <p>{listing.bathrooms} Bathrooms</p>
                        <hr />
                        <p>{listing.size}</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))
            ) : (
              <div className="w-full flex flex-col items-center justify-center">
                <p>No Results for Search Criteria</p>
              </div>
            )}
          </main>
        </section>
      </Container>
      <Subscribe />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await Promise.all([
    fetch(`${API_URL}/api/listings`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  ]);
  const data = await Promise.all(res.map((res) => res.json()));
  return {
    props: {
      listings: data[0].listings,
    },
  };
}
