import App from "next/app";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  if (Math.random() > 0.5) {
    appProps.pageProps.hasReadPermission = true;
  }

  return { ...appProps };
};

export default MyApp;