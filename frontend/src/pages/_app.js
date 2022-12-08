import { Provider } from 'react-redux';
import store from 'store/store';
import '../assets/styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <AuthCheck> */}
      <Component {...pageProps} />
      {/* </AuthCheck> */}
    </Provider>
  );
}

export default MyApp;
