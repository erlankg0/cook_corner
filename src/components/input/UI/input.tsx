import styles from "./input.module.scss";
import React from "react";
import {IInput} from "@components/input/UI/interface.ts";

const Input: React.FC<IInput> = ({field, form, type, placeholder, img}) => {
    return (
        <div className={styles.inputBox}>
            <input
                {...field}
                {...form}
                type={type}
                placeholder={placeholder}
                required
                className={styles.input}
            />
            <img src={img} alt={'et for mail'} className={styles.icon}/>
        </div>
    )
}

export default Input;