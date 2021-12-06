/* eslint-disable no-underscore-dangle */
import { MongoClient } from 'mongodb';

const uri = <string>process.env.DB_URL;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

if (!process.env.DB_URL) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const client = new MongoClient(uri, options);
const clientPromise = client.connect();

export default clientPromise;
