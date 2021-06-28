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
      // TODO (optional): Get revies for a specific product
      // res.status(200).json({ reviews });
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong' });
    }
  }
  if (req.method === 'POST') {
    try {
      // TODO: get the review body and create a record in the database
      // Return the newly-created review as JSON
      // res.status(200).json(review);
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong' });
    }
  }
};
