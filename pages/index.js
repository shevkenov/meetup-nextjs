import MeetupList from '../components/meetups/MeetupList';
import dbConnection from '../utils/dbConnection';
import Head from 'next/head';

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'First meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/640px-Lower_Manhattan_skyline_-_June_2017.jpg',
//     addres: 'Some address 5, 123456, Some city',
//     description: 'Some description - first meetup'
//   },
//   {
//     id: 'm2',
//     title: 'Second meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/640px-Lower_Manhattan_skyline_-_June_2017.jpg',
//     addres: 'Some address 10, 8374573, Some city',
//     description: 'Some description - second meetup'
//   }
// ]

// export function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps() {
  //fetch data from a database
    const collection = await dbConnection();
    const data = await collection.find({}).toArray();
    const meetups = data.map(meetup => ({
      id: meetup._id.toString(),
      title: meetup.title,
      image: meetup.image,
      address: meetup.address,
      description: meetup.description,
    }));
    
    return {
    props: {
      meetups,
    }
  }
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>React meetups</title>
        <meta name="description" content="Very productive react meetups"/>
      </Head>
      <MeetupList meetups={props.meetups}/>
      </>
  )
}