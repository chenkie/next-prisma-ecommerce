import { yupResolver } from '@hookform/resolvers/yup';
import { Review, User } from '@prisma/client';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from './Button';
import StarIconButton from './StarIconButton';

const defaultValues = {
  text: '',
  rating: 0
};

const schema = yup.object().shape({
  text: yup.string().required('Review required'),
  rating: yup.number().min(0).max(5).integer().required()
});

type Inputs = {
  text: string;
  rating: number;
};

interface NewReviewProps {
  productId: string;
  onAddReview: (review: Review & { user: User }) => void;
}

const NewReview = (props: NewReviewProps) => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<Inputs>({
    defaultValues,
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const req = await fetch('/api/review', {
        method: 'POST',
        body: JSON.stringify({
          ...data,
          userId: 'ckqh1645j0000yq9k4d4b0qzy',
          productId: props.productId
        })
      });

      const res = await req.json();

      props.onAddReview(res);

      reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="font-bold text-gray-600 text-xl">Add a Review</p>
      <section className="mt-2 mb-6">
        <label className="text-gray-600 text-sm">Rating</label>
        <div className="grid grid-cols-5 gap-1 w-32 my-2">
          {Array.from(Array(5)).map((value: undefined, i: number) => (
            <StarIconButton
              key={i}
              filled={watch('rating') >= i + 1}
              onClick={() => setValue('rating', i + 1)}
            />
          ))}
        </div>
      </section>
      <section>
        <label className="text-gray-600 text-sm">Review</label>
        <textarea
          placeholder="Add a review"
          className="border border-gray-300 rounded-lg p-2 w-full h-32 mt-2"
          {...register('text')}
        />
        <p className="text-red-600 italic">{errors.text?.message}</p>
      </section>
      <div className="mt-2">
        <Button text="Submit" type="submit" />
      </div>
    </form>
  );
};

export default NewReview;
