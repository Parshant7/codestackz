import TopBar from './../components/topbar/topbar'
import NavBar from './../components/navbar/navbar'
import Carousel from './../components/carousel/carousel'
import Services from './../components/services/services'
import ContactusForm from './../components/form/contactus'
import Footer from './../components/footer/footer'

const Home = () => {
  return (
    <>
      <Carousel />
      <Services />
      <ContactusForm />
    </>
  )
}

export default Home;