import { MongoClient } from "mongodb";

export default async function dbConnection() {
    const client = await MongoClient.connect('mongodb+srv://user:user123456@cluster0.vxynr.mongodb.net/meetup?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollections = db.collection('meetups');

    return meetupsCollections;
}