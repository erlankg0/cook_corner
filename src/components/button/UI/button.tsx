import React from "react";
import {IButton} from "@components/button/interace.ts";
import styles from './button.module.scss'

const Button: React.FC<IButton> = ({text}) => {
    return <button type={'submit'} className={styles.button}>{text}</button>
}

export default Button;