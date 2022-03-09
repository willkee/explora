import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import DemoUser from "../DemoUser";
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
                <SignupFormModal isLoaded={isLoaded} />
                <DemoUser />
            </>
        );
    }

    return (
        <nav
            className={
                sessionUser ? "main-navbar" : "main-navbar logged-out-main-nav"
            }
        >
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
