import classes from './MeetupDetails.module.css';

export default function Details({meetupDetail}) {

    return (
        <section className={classes.details}>
            <img src={meetupDetail.image} alt={meetupDetail.title} />
            <h3 >{meetupDetail.title}</h3>
            <address>{meetupDetail.address}</address>
            <p>{meetupDetail.description}</p>
        </section>
    )
}