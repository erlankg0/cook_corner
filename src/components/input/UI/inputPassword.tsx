import styles from "@components/input/UI/input.module.scss";
import eyesOpen from "@assets/icons/eyesOpen.svg"
import eyesClose from "@assets/icons/eyesClose.svg"
import React, {useState} from "react";
import {IInput} from "@components/input/UI/interface.ts";

const InputPassword: React.FC<IInput> = ({value, type, placeholder, name}) => {
    const [show, setShow] = useState<boolean>(false);

    const handleShowPassword = () => {
        setShow(!show);
    }

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
            <img src={show ? eyesOpen : eyesClose} alt={'password'} className={styles.icon}
                 onClick={handleShowPassword}/>
        </div>
    )
}

export default InputPassword;