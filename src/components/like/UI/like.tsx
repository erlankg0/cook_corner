import styles from "./like.module.scss"

import loved from "@assets/icons/liked.svg"
import unlove from "@assets/icons/unliked.svg";

import {useState} from "react";

const Like = () => {
    const [love, setLoved] = useState<boolean>(false)
    const handleOnClickLoved = () => {
        setLoved(!love);
    }

    return (
        <div className={styles.love} onClick={handleOnClickLoved}>
            <img
                src={!love ? loved : unlove}
                alt={'love'}
                className={styles.love__image}
            />
            <p className={styles.love__text}>2</p>
        </div>
    )
}

export default Like;