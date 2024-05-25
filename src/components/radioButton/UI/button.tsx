import React from "react";
import styles from "./button.module.scss";
import {IRadioButton} from "@components/radioButton/interface.ts";

const RadioButton: React.FC<IRadioButton> = ({text, checked, onClick}) => {
    return (
        <button className={checked ? `${styles.button} ${styles.primary}` : `${styles.green} ${styles.button}`} type={'button'} onClick={onClick}>{text}</button>
    )
}

export default RadioButton;