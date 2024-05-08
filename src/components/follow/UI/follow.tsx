import followImage from "@assets/icons/follow.svg"
import followedImage from "@assets//icons/followed.svg";

import {useState} from "react";

import styles from "./follow.module.scss";

const Follow = () => {
    const [follow, setFollow] = useState<boolean>(false)
    const handleOnClickFollowing = () => {
        setFollow(!follow);
    }
    return (
        <div className={styles.follow} onClick={handleOnClickFollowing}>
            <img className={styles.follow__image} src={!follow ? followImage : followedImage} alt={'Кнопка избраного'}/>
            <p className={styles.follow__text}>1</p>
        </div>
    )
}

export default Follow;