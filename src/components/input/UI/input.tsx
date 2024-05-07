
import styles from "./input.module.scss";
import React from "react";
import {IInput} from "@components/input/UI/interface.ts";

const Input: React.FC<IInput> = ({value, type, placeholder, name, img}) => {
    return (
        <div className={styles.inputBox}>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                required
                className={styles.input}
                name={name}
            />
            <img src={img} alt={'et for mail'} className={styles.icon}/>
        </div>
    )
}

export default Input;