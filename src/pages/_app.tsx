import { Provider } from 'react-redux';
import { store } from '../store/index';
import GlobalStyle from '../styles/global.style';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
