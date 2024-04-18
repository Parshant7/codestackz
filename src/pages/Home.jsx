import Carousel from './../components/carousel/carousel'
import Services from './../components/services/services'
import ContactusForm from './../components/form/contactus'
import TabTitle from './generalFunctions'
import Faqs from '../components/faqs/faqs'

const Home = () => {

  TabTitle("Home | codestackz.in")

  return (
    <>
      <Carousel />
      <Services />
      <ContactusForm />
      <Faqs />
    </>
  )
}

export default Home;