import React from "react";
import styles from "./navigation.module.scss";
import {INavigation} from "@components/navigation/interface.ts";
import {NavLink} from "react-router-dom";

const Navigation: React.FC<INavigation> = ({image, url, onClick}) => {
    return (
        <NavLink to={`/${url}`} className={styles.navigation}>
            <img className={styles.navigation__image} src={image} alt={"image navigation"} onClick={onClick}/>
        </NavLink>
    )
}

export default Navigation