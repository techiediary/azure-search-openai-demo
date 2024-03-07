import { Outlet, NavLink, Link } from "react-router-dom";
import github from "../../assets/github.svg";
import pregisLogo from "../../assets/pregis.png"; // Import Pregis logo
import intelliswift from "../../assets/intelliswift.png";
import styles from "./Layout.module.css";
import { useLogin } from "../../authConfig";
import { LoginButton } from "../../components/LoginButton";

const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header} role={"banner"}>
                <div className={styles.headerContainer}>
                    <Link to="/" className={styles.headerTitleContainer}>
                        <img src={intelliswift} alt="Intelliswift logo" className={styles.intelliswift} width="200px" height="50px" />
                    </Link>
                    <nav>
                        <ul className={styles.headerNavList}>
                            {/* <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Chat
                                </NavLink>
                            </li> */}
                            <li className={styles.headerNavLeftMargin}>
                                <NavLink to="/qa" className={({ isActive }) => (isActive ? styles.headerNavPageLinkActive : styles.headerNavPageLink)}>
                                    Ask a question
                                </NavLink>
                            </li>
                            {/* <li className={styles.headerNavLeftMargin}>
                                <a href="https://aka.ms/entgptsearch" target={"_blank"} title="Github repository link">
                                    <img
                                        src={github}
                                        alt="Github logo"
                                        aria-label="Link to github repository"
                                        width="20px"
                                        height="20px"
                                        className={styles.githubLogo}
                                    />
                                </a>
                            </li> */}
                        </ul>
                    </nav>
                    {/* Replace text with Pregis logo */}
                    <img src={pregisLogo} alt="Pregis logo" className={styles.headerRightLogo} width="120px" height="40px" />
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
