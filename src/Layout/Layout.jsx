import { Outlet } from "react-router-dom";
import Navbar from "../component/Header/Navbar/Navbar";

const Layout = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;