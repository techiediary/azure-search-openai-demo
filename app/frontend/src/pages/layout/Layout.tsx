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
                        <img src={intelliswift} alt="Intelliswift logo" className={styles.intelliswift} width="164px" height="45.18px" />
                    </Link>
                    {/* Replace text with Pregis logo */}
                    <img src={pregisLogo} alt="Pregis logo" className={styles.headerRightLogo} width="134px" height="37px" />
                    {useLogin && <LoginButton />}
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;
