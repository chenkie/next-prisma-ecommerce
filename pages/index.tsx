import { Product } from '@prisma/client';
import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import prisma from './../db';

export async function getServerSideProps() {
  try {
    const products = await prisma.product.findMany({
      include: {
        _count: {
          select: { reviews: true }
        }
      }
    });

    return {
      props: { products }
    };
  } catch (err) {
    console.log(err);
  }
}

export type ProductWithReviewCount = Product & { _count: { reviews: number } };

interface HomeProps {
  products: ProductWithReviewCount[];
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
