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

export default function Create({ token }) {
  // Assigns Next JS useRouter to a variable
  const navigate = useRouter();
  // Store values gotten from form
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [size, setSize] = useState('');

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
    body.append('address', address);
    body.append('city', city);
    body.append('bedrooms', bedrooms);
    body.append('bathrooms', bathrooms);
    body.append('image', image);
    body.append('size', size);

    // Post Requests
    const res = await fetch(`${API_URL}/api/listings`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      body: body,
    });

    const data = await res.json();

    if (res.ok) {
      toast.success('Saved: Listing created successfully');
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
            <h3 className="text-black/90 mr-[1.6rem]">Listing</h3>
            <figcaption onClick={handleSubmit} className="tag">
              <p>Create New</p>
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
          </div>
        </header>
        <form className="mt-[4rem] w-1/2" onSubmit={handleSubmit}>
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
            <Input
              label={'Image'}
              placeholder={'Thumbnail'}
              name={'new_image'}
              type={'file'}
              onChange={(e) => imageChange(e.target.files)}
              required={'required'}
              after={content || 'Upload an Image'}
              className={'mb-[2.4rem] '}
              classInput={
                'mt-[.8rem] relative after:content-[attr(after)] after:bg-white after:h-full after:w-full after:absolute after:top-0  after:left-[1.6rem] after:z-10 after:flex after:items-center after:font-light after:text-[#b9bec7]'
              }
            />
          </div>

          <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
            <Input
              label={'Size'}
              placeholder={'Size'}
              type={'text'}
              value={size}
              name={'size'}
              onChange={(e) => setSize(e.target.value)}
              required={'required'}
              className={'mb-[2.4rem]'}
              classInput={'mt-[.8rem] '}
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
              classInput={'mt-[.8rem] '}
            />
          </div>
          <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
            <Input
              label={'Bathrooms'}
              placeholder={'Bathrooms'}
              type={'number'}
              value={bathrooms}
              name={'bathrooms'}
              onChange={(e) => setBathrooms(e.target.value)}
              required={'required'}
              className={'mb-[2.4rem]'}
              classInput={'mt-[.8rem] '}
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
              classInput={'mt-[.8rem] '}
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
              label={'City'}
              placeholder={'City'}
              type={'text'}
              value={city}
              name={'city'}
              onChange={(e) => setCity(e.target.value)}
              required={'required'}
              className={'mb-[2.4rem]'}
              classInput={'mt-[.8rem] capitalize'}
            />
          </div>
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req, query: { listing } }) {
  const { token } = parseCookies(req);

  return {
    props: {
      token,
    },
  };
}
