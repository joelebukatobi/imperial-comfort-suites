// React
import { useState } from 'react';
// Next JS
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
// Components
import Layout from '@/admin//layouts/Layout';
import Textarea from '@/admin//element/Textarea';
import Input from '@/admin//element/Input';
import Select from '@/admin//element/Select';
const Editor = dynamic(() => import('@/admin//components/Editor'), { ssr: false });
// Config & Helpers
import { API_URL } from '@/config/index';
import { parseCookies } from '@/helpers//index';
// External Libraries
import { ToastContainer, toast } from 'react-toastify';

export default function Listing({ token }) {
  // Assigns Next JS useRouter to a variable
  const navigate = useRouter();
  // Store values gotten from form
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [stars, setStars] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

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
    body.append('review', review);
    body.append('stars', stars);
    body.append('image', image);

    // Post Requests
    const res = await fetch(`${API_URL}/api/reviews`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      body: body,
    });

    const data = await res.json();

    if (res.ok) {
      toast.success('Saved: Review created successfully');
      setTimeout(() => {
        setContent(null);
        navigate.push('/admin/reviews');
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
            <h3 className="text-black/90 mr-[1.6rem]">Reviews</h3>
            <figcaption onClick={handleSubmit} className="tag">
              <p>Create New</p>
            </figcaption>
          </div>
          <div className="flex">
            <Link href="/admin">
              <h5 className="text-black/70 hover:text-black">Dashboard &nbsp;</h5>
            </Link>
            <h5>&gt; &nbsp;</h5>
            <Link href="/admin/reviews">
              <h5 className="text-black/70 hover:text-black">Reviews &nbsp;</h5>
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
              classInput={'] capitalize'}
            />
          </div>
          <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
            <Input
              label={'Rating'}
              placeholder={'5 Stars'}
              type={'number'}
              value={stars}
              name={'stars'}
              onChange={(e) => setStars(e.target.value)}
              required={'required'}
              className={'mb-[2.4rem]'}
              classInput={'] capitalize'}
            />
            <Input
              label={'Image'}
              placeholder={'Reviewers Picture'}
              name={'image'}
              type={'file'}
              onChange={(e) => imageChange(e.target.files)}
              required={'required'}
              after={content.substring(0, 30) || 'Upload An Image'}
              className={'mb-[2.4rem] '}
            />
          </div>
          <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
            <Textarea
              label={'Review'}
              placeholder={'Review'}
              type={'text'}
              value={review}
              name={'review'}
              onChange={(e) => setReview(e.target.value)}
              required={'required'}
              className={'mb-[2.4rem]'}
              classTextArea={'mt-[.8rem] capitalize'}
            />
          </div>
        </form>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);
  return {
    props: {
      token,
    },
  };
}
