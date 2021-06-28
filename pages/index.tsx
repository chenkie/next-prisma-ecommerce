import Head from 'next/head';
import ProductCard from '../components/ProductCard';

export async function getServerSideProps() {
  return {
    props: { products: [] }
  };
}

interface HomeProps {
  products: any[];
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <Head>
        <title>Threadz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {props.products.map((p, i: number) => (
          <ProductCard product={p} key={i} />
        ))}
      </div>
    </div>
  );
}
