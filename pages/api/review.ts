import { Review, User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from './../../db';

type GetSuccessResponse = {
  reviews: Review[];
};

type PostSuccessResponse = Review & { user: User };

type PostErrorResponse = {
  message: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<
    GetSuccessResponse | PostSuccessResponse | PostErrorResponse
  >
) => {
  if (req.method === 'GET') {
    try {
      const data = JSON.parse(req.body);
      const reviews = await prisma.review.findMany({
        where: {
          productId: data.productId
        }
      });

      res.status(200).json({ reviews });
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong' });
    }
  }
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
        },
        include: {
          user: true
        }
      });

      res.status(200).json(review);
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong' });
    }
  }
};
