// React
import { useState } from 'react';
// Next JS
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
// Components
import Layout from '@/admin//layouts/Layout';
import Input from '@/admin//element/Input';
import Select from '@/admin//element/Select';
const Editor = dynamic(() => import('@/admin//components/Editor'), { ssr: false });
// Config & Helpers
import { API_URL } from '@/config/index';
import { parseCookies } from '@/helpers//index';
// External Libraries
import { ToastContainer, toast } from 'react-toastify';

export default function Listing({ listing, token }) {
  // Assigns Next JS useRouter to a variable
  const navigate = useRouter();
  // Store values gotten from form
  const [name, setName] = useState(listing.name);
  const [price, setPrice] = useState(listing.price);
  const [link, setLink] = useState(listing.link);
  const [address, setAddress] = useState(listing.address);
  const [bedrooms, setBedrooms] = useState(listing.bedrooms);
  const [bathrooms, setBathrooms] = useState(listing.bathrooms);
  const [image, setImage] = useState(listing.image);
  const [content, setContent] = useState(listing.image);
  const [size, setSize] = useState(listing.size);

  // handleChange
  const imageChange = (file) => {
    setImage(file[0]);
    setContent(file[0].name);
  };

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form Data
    const body = new FormData();
    body.append('name', name);
    body.append('price', price);
    body.append('link', link);
    body.append('address', address);
    body.append('bedrooms', bedrooms);
    body.append('bathrooms', bathrooms);
    body.append('new_image', image);
    body.append('size', size);

    // Post Requests
    const res = await fetch(`${API_URL}/api/listings/${listing.slug}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      body: body,
    });

    const data = await res.json();

    if (res.ok) {
      toast.success('Saved: Listing edited successfully');
      setTimeout(() => {
        setContent(null);
        navigate.push('/admin/listings');
      }, 5000);
    } else {
      toast.error(`Error ${data.message}`);
    }
  };

  return (
    <Layout>
      <div>
        <ToastContainer autoClose={4000} position="bottom-right" theme="colored" />
        <header className="flex flex-col ">
          <div className="flex items-center mb-[1.6rem]">
            <h3 className="text-black/90 mr-[1.6rem]">Listings</h3>
            <figcaption onClick={handleSubmit} className="tag">
              <p>Update</p>
            </figcaption>
          </div>
          <div className="flex">
            <Link href="/admin">
              <h5 className="text-black/70 hover:text-black">Dashboard &nbsp;</h5>
            </Link>
            <h5>&gt; &nbsp;</h5>
            <Link href="/admin/listings">
              <h5 className="text-black/70 hover:text-black">Listings &nbsp;</h5>
            </Link>
            <h5>&gt; &nbsp;</h5>
            <Link href={`/admin/listings/${listing.slug}`}>
              <h5 className="capitalize text-black/70 hover:text-black">{listing.name}</h5>
            </Link>
          </div>
        </header>
        <div className="mt-[2.4rem] mb-[2.4rem] rounded-[.4rem] w-full h-[24rem] border-[.16rem] border-black/10 overflow-hidden p-[.16rem]">
          <img className="w-full rounded-[.4rem]" src={`${API_URL}/storage/${listing.image}`} alt="post-thumbnail" />
        </div>
        <form className="mt-[4rem]" onSubmit={handleSubmit}>
          <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
            <Input
              label={'Name'}
              placeholder={'Name'}
              type={'text'}
              value={name}
              name={'name'}
              onChange={(e) => setName(e.target.value)}
              required={'required'}
              className={'mb-[2.4rem]'}
              classInput={'mt-[.8rem] capitalize'}
            />
          </div>
          <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
            <Input
              label={'AirBNB Link'}
              placeholder={'Link'}
              type={'text'}
              value={link}
              name={'link'}
              onChange={(e) => setLink(e.target.value)}
              required={'required'}
              className={'mb-[2.4rem]'}
              classInput={'mt-[.8rem] capitalize'}
            />
            <Input
              label={'Bedrooms'}
              placeholder={'Bedrooms'}
              type={'number'}
              value={bedrooms}
              name={'bedrooms'}
              onChange={(e) => setBedrooms(e.target.value)}
              required={'required'}
              className={'mb-[2.4rem]'}
              classInput={'mt-[.8rem] capitalize'}
            />
            <Input
              label={'Bathrooms'}
              placeholder={'Bathrooms'}
              type={'number'}
              value={bathrooms}
              name={'bathrooms'}
              onChange={(e) => setBathrooms(e.target.value)}
              required={'required'}
              className={'mb-[2.4rem]'}
              classInput={'mt-[.8rem] capitalize'}
            />
            <Input
              label={'Price'}
              placeholder={'Price'}
              type={'number'}
              value={price}
              name={'price'}
              onChange={(e) => setPrice(e.target.value)}
              required={'required'}
              className={'mb-[2.4rem]'}
              classInput={'mt-[.8rem] capitalize'}
            />
          </div>
          <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
            <Input
              label={'Address'}
              placeholder={'Address'}
              type={'text'}
              value={address}
              name={'address'}
              onChange={(e) => setAddress(e.target.value)}
              required={'required'}
              className={'mb-[2.4rem]'}
              classInput={'mt-[.8rem] capitalize'}
            />
            <Input
              label={'Size'}
              placeholder={'Size'}
              type={'text'}
              value={size}
              name={'size'}
              onChange={(e) => setSize(e.target.value)}
              required={'required'}
              className={'mb-[2.4rem]'}
              classInput={'mt-[.8rem] capitalize'}
            />
            <Input
              label={'Image'}
              placeholder={'Thumbnail'}
              name={'new_image'}
              type={'file'}
              onChange={(e) => imageChange(e.target.files)}
              required={'required'}
              after={content}
              className={'mb-[2.4rem] '}
              classInput={
                'mt-[.8rem] relative after:content-[attr(after)] after:bg-white after:h-full after:w-full after:absolute after:top-0  after:left-[1.6rem] after:z-10 after:flex after:items-center after:font-light after:text-[#b9bec7]'
              }
            />
          </div>
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, query: { listing } }) {
  const { token } = parseCookies(req);
  const res = await Promise.all([
    fetch(`${API_URL}/api/listings/${listing}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }),
  ]);
  const data = await Promise.all(res.map((res) => res.json()));
  console.log(data[0]);
  return {
    props: {
      token,
      listing: data[0].listing,
    },
  };
}
