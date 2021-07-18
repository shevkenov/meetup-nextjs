import { useRouter } from "next/dist/client/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from 'next/head';

export default function NewMeetup() {
    const router = useRouter()
    const addNewMeetupForm = async(meetup) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(meetup),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const data = await response.json();

        router.push('/')
    }
    return (
        <>
        <Head>
            <title>Add new meetup</title>
            <meta name="description" content="Add new meetup"/>
        </Head>
        <NewMeetupForm onAddMeetup={addNewMeetupForm}/>
        </>
    )
};