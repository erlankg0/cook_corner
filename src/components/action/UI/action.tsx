import React, {useEffect} from "react";
import followImage from "@assets/icons/follow.svg"
import followedImage from "@assets//icons/followed.svg";
import liked from "@assets/icons/liked.svg";
import unliked from "@assets/icons/unliked.svg";
import {useState} from "react";

import styles from "./action.module.scss";
import {IAction} from "@components/action/interface.ts";

const Action: React.FC<IAction> = ({
                                       type,
                                       count
                                   }) => {
    const [follow, setFollow] = useState<boolean>(false)
    const [image, setImage] = useState<string>(liked)

    useEffect(() => {
        if (type == "like") {
            if (follow) {
                setImage(unliked)
            } else {
                setImage(liked)
            }
        } else {
            if (follow) {
                setImage(followImage)
            } else {
                setImage(followedImage)
            }
        }
    }, [])
    const handleOnClickFollowing = () => {
        setFollow(!follow);
    }
    return (
        <div className={styles.action} onClick={handleOnClickFollowing}>
            <img className={styles.action__image} src={image} alt={`button ${type}`}/>
            <p className={styles.action__text}>{count}</p>
        </div>
    )
}

export default Action;