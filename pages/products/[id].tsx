import { Product } from '@prisma/client';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import ProductCard from '../../components/ProductCard';
import prisma from '../../db';
import Reviews from './../../components/Reviews';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const product = await prisma.product.findFirst({
    where: {
      id: {
        equals: id as string
      }
    }
  });

  return {
    props: { product }
  };
};

interface ProductsProps {
  product: Product;
}

const Products = (props: ProductsProps) => {
  return (
    <div>
      <Head>
        <title>{props.product.name} | Threadz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid grid-cols-3 gap-10">
        <section className="col-span-2">
          <ProductCard product={props.product} usePurchaseButton />
        </section>
        <section className="w-3/4">
          <Reviews productId={props.product.id} />
        </section>
      </div>
    </div>
  );
};

export default Products;
