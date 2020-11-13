import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDB } from '../../utils/connect-to-db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await JSON.parse(req.body)
    if(data.likes && data.dislikes) {
        const {likes, dislikes} = data;
        const collection = await connectToDB();
        try {
            await collection.updateOne({}, { $set: { dislikes, likes } })
            res.json(200);
        } catch (e) {
            console.log(e)
            res.status(400);
            res.json({message: e})
        }
    }
}
