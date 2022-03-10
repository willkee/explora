import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./InfoButton.css";

const InfoButton = () => {
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
        <div className="info-outer-container">
            <div id="info-button">
                <i onClick={openMenu} className="fa-solid fa-circle-info"></i>
            </div>
            {showMenu && (
                <div className="dropdown-info">
                    <table>
                        <tbody>
                            <tr>
                                <td className="my-name">Developer: Will Kee</td>
                                <td>
                                    <a
                                        href="https://github.com/willkee"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-github-square"></i>
                                    </a>
                                </td>
                                <td>
                                    <a
                                        href="https://www.linkedin.com/in/will-kee/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="logo-parent-info">
                        <i className="devicon-javascript-plain"></i>
                        <i className="devicon-nodejs-plain"></i>
                        <i className="devicon-react-original"></i>
                        <i className="devicon-redux-original"></i>
                        <i className="devicon-postgresql-plain"></i>
                        <i className="devicon-express-original"></i>
                        <i className="devicon-sequelize-plain"></i>
                        <i className="devicon-css3-plain"></i>
                        <i className="devicon-heroku-plain"></i>
                        <i className="devicon-canva-original"></i>
                        <i className="devicon-figma-plain"></i>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InfoButton;
