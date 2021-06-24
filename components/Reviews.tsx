import NewReview from './NewReview';

interface ReviewsProps {
  productId: string;
}
const Reviews = (props: ReviewsProps) => {
  return (
    <>
      <p className="font-bold text-gray-600 text-xl">Reviews</p>
      <p className="italic mt-6">No reviews yet</p>
      <p className="text-purple-600 underline mt-4">Add a review</p>
      <div className="mt-10">
        <NewReview productId={props.productId} />
      </div>
    </>
  );
};

export default Reviews;
