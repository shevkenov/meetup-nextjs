import { ObjectId } from 'mongodb';
import MeetupDetails from '../../components/meetups/MeetupDetails';
import dbConnection from '../../utils/dbConnection';
import Head from 'next/head';

export default function Details({meetup}) {
    return (
        <>
            <Head>
                <title>{meetup.title}</title>
                <meta name="description" content={meetup.description}/>
            </Head>
            <MeetupDetails meetupDetail={meetup}/>
        </>
    )
}

export async function getStaticPaths() {
    const collection = await dbConnection();
    const data = await collection.find({},  {id: 1}).toArray();

    const meetups = data.map(meetup => ({
        params: {
            meetupId: meetup._id.toString(),
        }
      }));
    
    return {
        fallback: 'blocking',
        paths: meetups
    }
}

export async function getStaticProps(context) {
    const {meetupId} = context.params;

    const collection = await dbConnection();
    const meetupDetails = await collection.findOne({_id: ObjectId(meetupId)});

    return {
        props: {
            meetup: {
                id: meetupDetails._id.toString(),
                title: meetupDetails.title,
                image: meetupDetails.image,
                description: meetupDetails.description,
                address: meetupDetails.address
            }
        }
    }
}