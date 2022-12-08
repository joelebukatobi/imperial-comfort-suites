import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from 'store/store';

function MyApp({ Component, pageProps }) {
  const pathname = useRouter().pathname;
  if (pathname === '/admin' || pathname.includes('admin')) {
    require('../assets/styles/admin.scss');
  }

  if (pathname === '/' || pathname === '/listing' || pathname === '/about' || pathname === '/contact') {
    require('../assets/styles/global.scss');
  }
  return (
    <Provider store={store}>
      {/* <AuthCheck> */}
      <Component {...pageProps} />
      {/* </AuthCheck> */}
    </Provider>
  );
}

export default MyApp;
