import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Navbar from './../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10">
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
