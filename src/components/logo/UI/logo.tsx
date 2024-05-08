import {NavLink} from "react-router-dom";
import logoImage from "@assets/icons/cookLogo.svg";
import styles from "./logo.module.scss";

const Logo = () => {
    return (
        <NavLink className={styles.logo} to={'/home'}>
            <img className={styles.logo__image} src={logoImage} alt={'logo'}/>
            <h1 className={styles.logo__title}>CooksCorner</h1>
        </NavLink>
    )
}

export default Logo;