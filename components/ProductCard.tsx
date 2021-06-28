import Image from 'next/image';
import Link from 'next/link';
import pluralize from 'pluralize';
import { formatAsCurrency } from './../lib/util';
import { ProductWithReviewCount } from './../pages';
interface ProductCardProps {
  product: ProductWithReviewCount;
  usePurchaseButton?: boolean;
}
const ProductCard = (props: ProductCardProps) => {
  const { product } = props;

  return (
    <div className="border-gray-300 border rounded-lg py-8 px-6">
      <div className="text-center">
        <Image src={product.image} width={200} height={200} />
      </div>
      <p className="font-bold text-2xl text-gray-700 mt-4">{product.name}</p>
      <p className="text-gray-500 my-4">{product.description}</p>
      <p className="font-bold text-2xl mb-4">
        {formatAsCurrency(props.product.price)}
      </p>
      {props.product._count && (
        <div className="mb-2">
          <p>
            {props.product._count.reviews} Review
            {pluralize('s', props.product._count.reviews)}
          </p>
        </div>
      )}
      {props.usePurchaseButton ? (
        <Link href={`/products/${product.id}`}>
          <a className="bg-purple-700 text-white rounded-full py-2 px-4 text-sm hover:bg-purple-800 shadow-md">
            Buy Now
          </a>
        </Link>
      ) : (
        <Link href={`/products/${product.id}`}>
          <a className="bg-purple-700 text-white rounded-full py-2 px-4 text-sm hover:bg-purple-800 shadow-md">
            View Details
          </a>
        </Link>
      )}
    </div>
  );
};

export default ProductCard;
