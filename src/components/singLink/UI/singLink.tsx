import React from "react";
import {ISingLink} from "@components/singLink/interface.ts";
import {NavLink} from "react-router-dom";
import styles from "./singLink.module.scss";

const SingLink: React.FC<ISingLink> = ({text, url, actionText}) => {
    return (
        <div className={styles.content}>
            <p className={styles.text}>{text}</p>
            <NavLink className={styles.actionText} to={url}>{actionText}</NavLink>
        </div>
    )
}

export default SingLink;