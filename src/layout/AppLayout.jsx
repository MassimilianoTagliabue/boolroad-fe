import { Outlet } from "react-router-dom"
import SingleTravel from "../pages/SingleTravel"
import Homepage from "../pages/Homepage"
import Header from "../components/Header";
import AppFooter from '../components/AppFooter'

function AppLayout() {

    return (
        <>
            <Header />
            <div className="page-container">
                <Outlet />
                <AppFooter />
            </div>
        </>
    )

};

export default AppLayout;