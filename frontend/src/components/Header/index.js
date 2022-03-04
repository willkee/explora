import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
    const sessionUser = useSelector((state) => state.session.user);
    return (
        <header className="main-header">
            <div>
                {sessionUser
                    ? `Welcome back ${sessionUser.username}!`
                    : "Welcome! Please Log In or Sign Up"}
            </div>
        </header>
    );
};

export default Header;
