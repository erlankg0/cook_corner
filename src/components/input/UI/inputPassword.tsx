import React, {useState} from "react";
import styles from "@components/input/UI/input.module.scss";
import eyesOpen from "@assets/icons/eyesOpen.svg";
import eyesClose from "@assets/icons/eyesClose.svg";
import {IInput} from "@components/input/UI/interface.ts";

const InputPassword: React.FC<IInput> = ({field, form, placeholder}) => {
    const [show, setShow] = useState<boolean>(false);

    const handleShowPassword = () => {
        setShow(!show);
    };

    return (
        <div className={styles.inputBox}>
            <input
                {...field} // Передаем значения и обработчики Formik
                form={form}
                type={show ? 'text' : 'password'}
                placeholder={placeholder}
                required
                className={styles.input}
            />
            <img
                src={show ? eyesOpen : eyesClose}
                alt="password"
                className={styles.icon}
                onClick={handleShowPassword}
            />
        </div>
    );
};

export default InputPassword;
