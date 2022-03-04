import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Navigation.css";
import * as sessionActions from "../../store/session";

const ProfileButton = ({ user }) => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => setShowMenu(false);

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    });

    return (
        <div className="profile-outer-container">
            <div className={showMenu ? "profile-icon lit" : "profile-icon"}>
                <button className="profile-button" onClick={openMenu}>
                    <i className="fa-solid fa-user"></i>
                </button>
            </div>
            {showMenu && (
                <div className="dropdown">
                    <table>
                        <tbody>
                            <tr>
                                <td className="td-row-header">User ID: </td>
                                <td>{user.id}</td>
                            </tr>
                            <tr>
                                <td className="td-row-header">Username: </td>
                                <td>{user.username}</td>
                            </tr>
                            <tr>
                                <td className="td-row-header">Email: </td>
                                <td>{user.email}</td>
                            </tr>
                        </tbody>
                    </table>

                    <button
                        className="nav-link nav-button"
                        onClick={() => dispatch(sessionActions.logoutUser())}
                    >
                        Log Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileButton;
