import classes from './MeetupDetails.module.css';
import Image from 'next/image';

export default function Details({meetupDetail}) {

    return (
        <section className={classes.details}>
            <Image src={meetupDetail.image} alt={meetupDetail.title} />
            <h3 >{meetupDetail.title}</h3>
            <address>{meetupDetail.address}</address>
            <p>{meetupDetail.description}</p>
        </section>
    )
}