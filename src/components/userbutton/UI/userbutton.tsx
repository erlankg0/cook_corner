import React from "react";
import {IUserButton} from "@components/userbutton/interface.ts";
import styles from "./userbutton.module.scss"

const UserButton: React.FC<IUserButton> = ({onClick}) => {
    return <button className={styles.button} type={'button'} onClick={onClick}>Manage Profile</button>
}

export default UserButton;