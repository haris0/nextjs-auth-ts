import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const {
    data: session,
  } = useSession();

  return (
    <div className="home">
      <h1>
        Welcome {session ? `${session.user?.name} ` : '' }
      </h1>
    </div>
  );
};
export default Home;
