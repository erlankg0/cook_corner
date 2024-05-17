import React from "react";
import {IUserinfo} from "@components/userinfo/interface.ts";
import styles from "./userinfo.module.scss"

const Userinfo: React.FC<IUserinfo> = ({title, paragraph}) => {
    return (
        <div className={styles.info}>
            <h3 className={styles.info__title}>{title}</h3>
            <p className={styles.info__paragraph}>{paragraph}</p>
        </div>
    )
}

export default Userinfo