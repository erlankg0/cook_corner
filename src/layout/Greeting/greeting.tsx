import styles from "./greeting.module.scss"
import logoImage from "@assets/icons/Logo.svg";

import {Progress} from "antd";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Greeting = () => {
    const [percent, setPercent] = useState<number>(0);
    const navigate = useNavigate();
    useEffect(() => {
        const interval = setInterval(() => {
            setPercent(prevPercent => {
                const newPercent = prevPercent + 1;
                if (newPercent >= 100) {
                    clearInterval(interval);
                    navigate('/auth')
                }
                return newPercent
            })
        }, 300)
    })
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <img className={styles.image} src={logoImage} alt={'logo'}/>
                <h1 className={styles.title}>CooksCorner</h1>
                <Progress percent={percent}/>
            </div>
            <p className={styles.paragraph}>version 0.0.1</p>
        </main>
    )
}

export default Greeting;