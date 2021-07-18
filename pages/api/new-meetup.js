import { MongoClient } from 'mongodb'

export default async function handler(req, res) {
    if(req.method === "POST"){
        const data = req.body;
        
        const client = await MongoClient.connect('mongodb+srv://user:user123456@cluster0.vxynr.mongodb.net/meetup?retryWrites=true&w=majority');
        const db = client.db();

        const meetupCollections = db.collection('meetups');

        try {
            const result = await meetupCollections.insertOne(data);
            res.status(201).json({message: "ok"})
        } catch (error) {
            console.log(error)
        }


    }
}