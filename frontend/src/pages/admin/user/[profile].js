// React
import { useState, useEffect } from 'react';
// Next JS
import Link from 'next/link';
import { useRouter } from 'next/router';
// Components
import Input from '@/admin//element/Input';
import Layout from '@/admin//layouts/Layout';
import Loading from '@/admin//components/Loading';
// Config & Helpers
import { API_URL } from '@/config/index';
import { parseCookies } from '@/helpers//index';
// External Libraries
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';

export default function Profile({ token, username }) {
  // Assigns Next JS useRouter to a variable
  const navigate = useRouter();
  const { data, loading } = useSelector((state) => state.user);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [content, setContent] = useState();
  // const user = data;
  console.log(data);
  // handleChange
  const imageChange = (file) => {
    setImage(file[0]);
    setContent(file[0].name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // FormData
    const body = new FormData();
    body.append('first_name', firstName);
    body.append('last_name', lastName);
    body.append('username', userName);
    body.append('new_image', image);
    body.append('email', email);
    body.append('password', password);
    body.append('password_confirmation', passwordConfirmation);
    // Post Requests
    const res = await fetch(`${API_URL}/api/users/${username}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      body: body,
    });

    const data = await res.json();

    if (res.ok) {
      toast.success('Saved: Post edited successfully');
      setTimeout(() => {
        setContent();
        navigate.push(`/admin/user/${data.user.username}`);
      }, 5000);
    } else {
      toast.error(`Error ${data.message}`);
    }
  };

  return (
    <Layout>
      {loading && <Loading />}
      {data && (
        <div className="w-1/2">
          <ToastContainer autoClose={4000} position="bottom-right" theme="colored" />
          <header className="flex flex-col ">
            <div className="flex items-center mb-[1.6rem]">
              <h3 className="text-black/90 mr-[1.6rem]">Welcome {data.first_name}</h3>
              <figcaption onClick={handleSubmit} className="tag">
                <p>Save</p>
              </figcaption>
            </div>

            <div className="flex">
              <Link href="/admin">
                <h5 className="text-black/70 hover:text-black">Dashboard &nbsp;</h5>
              </Link>
              <h5>&gt; &nbsp;</h5>
              <Link href={`/admin/user/${data.username}`}>
                <h5 className=" text-black/70 hover:text-black">User &nbsp;</h5>
              </Link>
            </div>
          </header>
          <form action="" className="mt-[4rem]" onSubmit={handleSubmit}>
            <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
              <Input
                name={'first_name'}
                label={'First Name'}
                placeholder={`${data.first_name}`}
                type={'text'}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className={'mb-[2.4rem]'}
                classInput={'mt-[.8rem]'}
              />
              <Input
                name={'last_name'}
                label={'Last Name'}
                placeholder={`${data.last_name}`}
                type={'text'}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className={'mb-[2.4rem]'}
                classInput={'mt-[.8rem]'}
              />
            </div>
            <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
              <Input
                name={'username'}
                label={'Username'}
                placeholder={`${data.username}`}
                type={'text'}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                className={'mb-[2.4rem]'}
                classInput={'mt-[.8rem]'}
              />{' '}
              <Input
                name={'new_image'}
                label={'Profile Picture'}
                placeholder={'Profile Picture'}
                type={'file'}
                onChange={(e) => imageChange(e.target.files)}
                required
                after={content || 'Upload an image'}
                className={'mb-[2.4rem] '}
                classInput={
                  'mt-[.8rem] relative after:content-[attr(after)] after:bg-white after:h-full after:w-full after:absolute after:top-0  after:left-[1.6rem] after:z-5 after:flex after:items-center after:font-light after:text-[#b9bec7]'
                }
              />
            </div>
            <Input
              name={'email'}
              label={'Email'}
              placeholder={`${data.email}`}
              type={'email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={'mb-[2.4rem]'}
              classInput={'mt-[.8rem]'}
            />

            <div className="flex items-start gap-x-[3.2rem] mb-[2.4rem];">
              <Input
                name={'password'}
                label={'Password'}
                placeholder={'Password'}
                type={'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={'mb-[2.4rem]'}
                classInput={'mt-[.8rem]'}
              />
              <Input
                name={'password_confirmation'}
                label={'Confirm Password'}
                placeholder={'Password'}
                type={'password'}
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required
                className={'mb-[2.4rem]'}
                classInput={'mt-[.8rem]'}
              />
            </div>
          </form>
        </div>
      )}
    </Layout>
  );
}

export async function getServerSideProps({ req, query: { post } }) {
  const { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/api/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  console.log(data);
  return {
    props: {
      token,
      username: data.user.username,
    },
  };
}
