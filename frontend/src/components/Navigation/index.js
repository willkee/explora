import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = <ProfileButton user={sessionUser} />;
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink className="nav-link" to="/signup">
                    Sign Up
                </NavLink>
            </>
        );
    }

    return (
        <nav className="main-navbar">
            <NavLink className="nav-link" exact to="/">
                Home
            </NavLink>
            <NavLink className="nav-link" to="/api/csrf/restore">
                Restore Tokens
            </NavLink>
            {isLoaded && sessionLinks}
        </nav>
    );
};

export default Navigation;
