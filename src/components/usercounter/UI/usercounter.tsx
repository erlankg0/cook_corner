import React from "react";
import {IUserCounter} from "@components/usercounter/interface.ts";
import styles from "./usercounter.module.scss"

const UserCounter: React.FC<IUserCounter> = ({count, paragraph}) => {
    return (
        <div className={styles.user}>
            <h3 className={styles.user__count}>{count}</h3>
            <p className={styles.user__paragraph}>{paragraph}</p>
        </div>
    )
}

export default UserCounter;