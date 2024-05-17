import React from "react";
import styles from "./button.module.scss";
import {IRadioButton} from "@components/radioButton/interface.ts";

const RadioButton: React.FC<IRadioButton> = ({text, onClick}) => {
    return (
        <button className={styles.button} type={'button'} onClick={onClick}>{text}</button>
    )
}

export default RadioButton;