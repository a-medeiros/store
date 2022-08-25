import GlobalStyle from '../styles/global.style';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
