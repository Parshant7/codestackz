import Carousel from './../components/carousel/carousel'
import Services from './../components/services/services'
import ContactusForm from './../components/form/contactus'

const Home = () => {

  document.title="Home | codestackz.in"

  return (
    <>
      <Carousel />
      <Services />
      <ContactusForm />
    </>
  )
}

export default Home;