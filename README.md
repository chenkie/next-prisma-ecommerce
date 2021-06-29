# next-prisma-ecommerce

This repo is for the Prisma Day 2021 workshop "Getting Started with Next.js and
Prisma".

For this workshop, we work on an ecommerce app called Threadz.

![Threadz main page](https://i.imgur.com/lj6X8ZB.png)
![Threadz product page](https://i.imgur.com/NyQ7NfG.png)

## Workshop Modules

The workshop has five modules.

There are "start" and "finish" branches for each module. Here are all the
branches:

- main
- 01-start
- 01-finish
- 02-start
- 02-finish
- 03-start
- 03-finish
- 04-start
- 04-finish
- 05-start
- 05-finish

Here's a breakdown of the modules including the topics covered:

#### 1. Getting Started

- Download the repo
- Install dependencies
- Tour the app

#### 2. Initialize Prisma

- Install Prisma dependencies
- Initialize Prisma with `prisma init`
- Provide data models for `Product`, `Review`, and `User`
- Migrate the database with `prisma migrate dev`
- Create a global `prisma` instance

#### 3. Prepare the Database

- Use Prisma Studio to write/view data
- Seed the database with a seed script
- Apply types

#### 4. Prisma Queries

- Call for data in `getServerSideProps`
- Display product data on the page

#### 5. Create Data with Prisma

- Create an API route to handle new reviews
- Optional: rework queries to get reviews from an API route

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installing Dependencies and Running the App

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `pages/index.js`. The page
auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This
endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are
treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead
of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.
