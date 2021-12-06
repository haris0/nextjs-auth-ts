import { NextPage } from 'next';
import { getSession, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

const Dashboard: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  });
  return (
    <div className="dashboard">
      {loading && (
        <h1>
          Loading
        </h1>
      )}
      {!loading && (
        <h1>
          Dashboard Page
        </h1>
      )}
    </div>
  );
};
export default Dashboard;
