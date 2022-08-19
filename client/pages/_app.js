
import Layout from "../Layout/Layout";
import "../styles/components/form.scss";
import "../styles/components/login.scss";
import "../styles/components/navbar.scss";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
