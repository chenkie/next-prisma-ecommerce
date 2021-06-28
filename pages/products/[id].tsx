import Head from 'next/head';
import ProductCard from '../../components/ProductCard';

interface ProductsProps {
  product: any[];
}

const Products = (props: ProductsProps) => {
  return (
    <div>
      <Head>
        <title>Threadz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid grid-cols-3 gap-10">
        <section className="col-span-2">
          <ProductCard product={[]} usePurchaseButton />
        </section>
        <section className="w-3/4"></section>
      </div>
    </div>
  );
};

export default Products;
