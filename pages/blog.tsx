import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';

const Blog: NextPage<{ data: string }> = ({ data }) => (
  <h1>
    Blog Page - {data}
  </h1>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
      data: session ? 'List of 100 Personalized blog' : 'List of free blog',
    },
  };
};

export default Blog;
