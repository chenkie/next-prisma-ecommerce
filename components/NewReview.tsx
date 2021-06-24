import Button from './Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import StarIcon from './StarIcon';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
          userId: 'ckqb3e48h0000vk9k8jvnw36y',
          productId: props.productId
        })
      });
      const res = await req.json();

      reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="mb-6">
        <label className="text-gray-600 text-sm">Rating</label>
        <div className="grid grid-cols-5 gap-1 w-32 my-2">
          {Array.from(Array(5)).map((value: undefined, i: number) => (
            <StarIcon
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
