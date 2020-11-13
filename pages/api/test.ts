import { NextApiRequest, NextApiResponse } from 'next';
import {MongoClient} from 'mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const data = await JSON.parse(req.body)
  // if(data.feedback) {
  //   const mongoClient = await connectToDB(res);
  //   console.log(mongoClient)
  // res.json({message: true})
    // const db = mongoClient.db("Main");
    // const collection = db.collection("Main");
    // console.log(collection)
    // switch (data.feedback) {
    //   case "dislike":
    //     console.log('disliked!!!')
    //     break;
    //   case "like":
    //     console.log('liked!')
    //     break;
    //   default:
    //     res.status(400);
    //     res.json({message: "No data in request"})
    // }
    // res.send({ message: 'Updated was successful' })
  // }
}
