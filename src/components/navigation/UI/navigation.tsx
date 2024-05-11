import React from "react";
import styles from "./navigation.module.scss";
import {INavigation} from "@components/navigation/interface.ts";

const Navigation: React.FC<INavigation> = ({image}) => {
    return (
        <div className={styles.navigation}>
            <img className={styles.navigation__image} src={image} alt={"image navigation"}/>
        </div>
    )
}

export default Navigation