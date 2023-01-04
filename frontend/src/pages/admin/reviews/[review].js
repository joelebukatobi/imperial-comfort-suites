// React
import { useState } from 'react';
// Next JS
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
// Components
import Layout from '@/admin//layouts/Layout';
import Input from '@/admin//element/Input';
import Textarea from '@/admin//element/Textarea';
import Select from '@/admin//element/Select';
const Editor = dynamic(() => import('@/admin//components/Editor'), { ssr: false });
// Config & Helpers
import { API_URL } from '@/config/index';
import { parseCookies } from '@/helpers//index';
// External Libraries
import { ToastContainer, toast } from 'react-toastify';

export default function Review({ review, token }) {
  // Assigns Next JS useRouter to a variable
  const navigate = useRouter();
  // Store values gotten from form
  const [name, setName] = useState(review.name);
  const [reviews, setReviews] = useState(review.review);
  const [stars, setStars] = useState(review.stars);
  const [image, setImage] = useState(review.image);
  const [content, setContent] = useState(review.image);

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
    body.append('review', reviews);
    body.append('stars', stars);
    body.append('image', image);

    // Post Requests
    const res = await fetch(`${API_URL}/api/reviews/${review.slug}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      body: body,
    });

    const data = await res.json();

    if (res.ok) {
      toast.success('Saved: Review edited successfully');
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
            <h3 className="text-black/90 mr-[1.6rem]">Review</h3>
            <figcaption onClick={handleSubmit} className="tag">
              <p>Update</p>
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
            <h5>&gt; &nbsp;</h5>
            <Link href={`/admin/reviews/${review.slug}`}>
              <h5 className="capitalize text-black/70 hover:text-black">{review.name}</h5>
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
              placeholder={'Thumbnail'}
              name={'new_image'}
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
              value={reviews}
              name={'reviews'}
              onChange={(e) => setReviews(e.target.value)}
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

export async function getServerSideProps({ req, query: { review } }) {
  const { token } = parseCookies(req);
  const res = await Promise.all([
    fetch(`${API_URL}/api/reviews/${review}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }),
  ]);
  const data = await Promise.all(res.map((res) => res.json()));
  return {
    props: {
      token,
      review: data[0].review,
    },
  };
}
