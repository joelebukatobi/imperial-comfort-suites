import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from 'store/store';

function MyApp({ Component, pageProps }) {
  const pathname = useRouter().pathname;
  if (pathname === '/admin' || pathname.includes('admin')) {
    require('../assets/styles/admin.scss');
  }
  if (
    pathname === '/' ||
    pathname === '/listing' ||
    pathname.includes('listing') ||
    pathname === '/about' ||
    pathname.includes('about') ||
    pathname === 'contact' ||
    pathname.includes('contact')
  ) {
    require('../assets/styles/global.scss');
  }

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
