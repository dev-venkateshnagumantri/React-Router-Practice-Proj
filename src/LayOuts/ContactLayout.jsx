import { Outlet } from "react-router-dom"
import ContactPage from "../Pages/ContactPage"

function ContactLayout(){
    return(
        <>
        <ContactPage />
        <Outlet />
        </>
    );
}

export default ContactLayout;