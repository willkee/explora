import { NavLink } from "react-router-dom";
import "./Error.css";

const ErrorPage = () => {
    return (
        <div className="error-page-container">
            <h1>Page Not Found</h1>
            <img src="images/what-confused.gif" alt="Confused cat meme." />
            <NavLink className="return-home-from-error" to="/">
                Return Home
            </NavLink>
        </div>
    );
};

export default ErrorPage;
