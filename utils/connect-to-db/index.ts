import { MongoClient } from 'mongodb';
export const connectToDB = async () => {
  if(process.env.DATA_BASE_URL){
    try {
      const mongoClient = new MongoClient(process.env.DATA_BASE_URL , { useUnifiedTopology: true});
      await mongoClient.connect()
      const db = mongoClient.db("Main");
      return db.collection("Main");
    } catch (e) {
      throw new Error("No connection to DB")
    }
  }
  throw new Error('Did not find DATA_BASE_URL in .env file')
}

