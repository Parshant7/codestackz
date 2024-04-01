import ContactusForm from "../components/form/contactus";
import Contactusicons from "../components/form/contactusicons";
import TabTitle from './generalFunctions'
// import Faqs from "../components/faqs/faqs";

const Contactus = () => {

    TabTitle("Contact Us | codestackz.in");

    return (
        <>
            <ContactusForm />
            <Contactusicons />
            {/* <Faqs /> */}
        </>
    )
}

export default Contactus; 