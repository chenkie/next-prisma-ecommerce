import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from './../../db';

type SuccessResponse = {
  text: string;
  rating: number;
};

type ErrorResponse = {
  message: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<SuccessResponse | ErrorResponse>
) => {
  if (req.method === 'POST') {
    try {
      const data = JSON.parse(req.body);
      const review = await prisma.review.create({
        data: {
          text: data.text,
          rating: data.rating,
          user: {
            connect: {
              id: data.userId
            }
          },
          product: {
            connect: {
              id: data.productId
            }
          }
        }
      });

      const { text, rating } = review;
      console.log('the review', review);
      res.status(200).json({ text, rating });
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong' });
    }
  }
};
