import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

type Data = {
  error?: string,
  message?: string,
  session?: object,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: 'unauthenticated user' });
  } else {
    res.status(200).json({ message: 'success', session });
  }
}
