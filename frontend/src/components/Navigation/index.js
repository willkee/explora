import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        // User is logged in
        sessionLinks = (
            <div className="session-links-container">
                <span className="welcome-back">
                    {sessionUser && `Welcome back ${sessionUser.username}!`}
                </span>
                <ProfileButton user={sessionUser} />
            </div>
        );
    } else {
        // User is not logged in
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
            <NavLink className="main-logo-container" exact to="/">
                <img
                    className="main-logo"
                    src="/images/explora-logo-dark-new.svg"
                    alt="Explora logo"
                />
            </NavLink>
            <div className="navlink-container">{isLoaded && sessionLinks}</div>
        </nav>
    );
};

export default Navigation;
