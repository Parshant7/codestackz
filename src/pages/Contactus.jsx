import ContactusForm from "../components/form/contactus";
import Contactusicons from "../components/form/contactusicons";
import TabTitle from './generalFunctions'

const Contactus = () => {

    TabTitle("Contact Us | codestackz.in");

    return (
        <>
            <ContactusForm/>
            <Contactusicons/>
        </>
    )
}

export default Contactus; 