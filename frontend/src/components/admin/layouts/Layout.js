// React
import { useEffect, useState } from 'react';
// Next JS
import { useRouter } from 'next/router';
import Head from 'next/head';
// Components
import Navbar from '@/admin//layouts/Navbar';
import Body from '@/admin//layouts/Body';
import Sidebar from '@/admin//layouts/Sidebar';
import Loading from '@/admin//components/Loading';
import Login from '@/admin//components/Login';
// Config & Helpers
import { API_URL } from '@/config/index';
// External Libraries
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '@/features//user/userActions';

export default function Layout({ children }) {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser())
      .unwrap()
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Admin | Imperial Comfort Suites</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
      </Head>
      <div id="admin">
        {user ? (
          <>
            <Navbar user={user} />
            <Sidebar user={user} />
            <Body>{children}</Body>
          </>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}
