import { Outlet } from "react-router-dom"
import ContactPage from "../Pages/ContactPage"

function ContactLayout(){
    return(
        <div>
        <ContactPage />
        <Outlet /> {/* This acts as a slot for child component */}
        </div>
    );
}

export default ContactLayout;