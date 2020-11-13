import { MongoClient } from 'mongodb';

export const connectToDB = async () => {
  const mongoClient = new MongoClient(process.env.DATA_BASE_URL, { useUnifiedTopology: true});
  await mongoClient.connect()
  const db = mongoClient.db("Main");
  return db.collection("Main");
}

