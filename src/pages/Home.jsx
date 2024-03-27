import Carousel from './../components/carousel/carousel'
import Services from './../components/services/services'
import ContactusForm from './../components/form/contactus'
import TabTitle from './generalFunctions'

const Home = () => {

  TabTitle("Home | codestackz.in")

  return (
    <>
      <Carousel />
      <Services />
      <ContactusForm />
    </>
  )
}

export default Home;