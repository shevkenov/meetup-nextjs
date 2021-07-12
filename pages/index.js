import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/640px-Lower_Manhattan_skyline_-_June_2017.jpg',
    addres: 'Some address 5, 123456, Some city',
    description: 'Some description - first meetup'
  },
  {
    id: 'm2',
    title: 'Second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/640px-Lower_Manhattan_skyline_-_June_2017.jpg',
    addres: 'Some address 10, 8374573, Some city',
    description: 'Some description - second meetup'
  }
]

export default function Home() {
  return (
    <MeetupList meetups={DUMMY_MEETUPS}/>
  )
}
