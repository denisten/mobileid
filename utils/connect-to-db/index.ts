import { MongoClient } from 'mongodb';
const localURL = 'mongodb://den:denlikepro@127.0.0.1:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false&connectTimeoutMS=5000'
export const connectToDB = async () => {
  try {
    const mongoClient = new MongoClient(process.env.DATA_BASE_URL || localURL , { useUnifiedTopology: true});
    await mongoClient.connect()
    const db = mongoClient.db("Main");
    return db.collection("Main");
  } catch (e) {
    throw new Error("No connection to DB")
  }
}

