import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDB } from '../../utils/connect-to-db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const data = req.body;
    if(data.hasOwnProperty('likes') && data.hasOwnProperty('dislikes')) {
        const {likes, dislikes} = data;
        const collection = await connectToDB();
        try {
            await collection.updateOne({}, { $set: { dislikes, likes } })
            res.json(200);
        } catch (e) {
            res.status(400);
            res.json({message: e})
        }
    } else {
        res.status(400)
        res.json({message: 'Data required'})
    }
}
