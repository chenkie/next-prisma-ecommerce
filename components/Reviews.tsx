import { Review, User } from '@prisma/client';
import NewReview from './NewReview';
import StarIcon from './StarIcon';

interface ReviewsProps {
  productId: string;
  reviews: (Review & { user: User })[];
  onAddReview: (review: Review & { user: User }) => void;
}

const Reviews = (props: ReviewsProps) => {
  return (
    <>
      <p className="font-bold text-gray-600 text-xl">Reviews</p>
      {props.reviews.length ? (
        <>
          {props.reviews.map((review, i: number) => (
            <div key={i} className="mb-8">
              <div className="grid grid-cols-5 gap-1 w-32 my-2">
                {Array.from(Array(5)).map((value: undefined, i: number) => (
                  <StarIcon key={i} filled={review.rating > i} />
                ))}
              </div>
              <p>{review.text}</p>
              <em className="text-sm">
                {review.user.firstName} {review.user.lastName}
              </em>
            </div>
          ))}
        </>
      ) : (
        <p className="italic mt-6">No reviews yet</p>
      )}
      <div className="mt-10">
        <NewReview
          productId={props.productId}
          onAddReview={props.onAddReview}
        />
      </div>
    </>
  );
};

export default Reviews;
