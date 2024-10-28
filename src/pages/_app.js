import 'bootstrap/dist/css/bootstrap.css'
import '../../styles/custom.scss'
import Layout from '../../components/layout';


export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return <Layout>{page}</Layout>;
    };

  return renderWithLayout(<Component {...pageProps} />);
}