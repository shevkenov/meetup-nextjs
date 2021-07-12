import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
    const addNewMeetupForm = (meetup) => {
        console.log(meetup);
    }
    return (
        <NewMeetupForm onAddMeetup={addNewMeetupForm}/>
    )
};