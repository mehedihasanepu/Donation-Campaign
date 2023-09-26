
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-5 pt-48">
                <h1 className="text-5xl ">404 Error</h1>
                <h1 className="text-2xl">Page Not Found</h1>
                <NavLink to="/"><button className="btn btn-error text-white">Back to Home</button></NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;