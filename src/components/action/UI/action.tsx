import React, {useEffect} from "react";
import followImage from "@assets/icons/follow.svg"
import followedImage from "@assets//icons/followed.svg";
import liked from "@assets/icons/liked.svg";
import unliked from "@assets/icons/unliked.svg";
import {useState} from "react";

import styles from "./action.module.scss";
import {IAction} from "@components/action/interface.ts";
import {postLikeRecipes, postSaveRecipe} from "../../../API/network.ts";

const Action: React.FC<IAction> = ({
                                       type,
                                       count,
                                       isDetail,
                                       id
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
    const handleOnClickFollowingLike = () => {
        setFollow(!follow);
        if (type == "like") {
            postLikeRecipes(id).then(()=>{
                setImage(liked);
                setFollow(false);
            })
        }
        postSaveRecipe(id).then(()=> setImage(followedImage))
    }
    return (
        <div className={styles.action} onClick={handleOnClickFollowingLike}>
            <img className={styles.action__image} src={image} alt={`button ${type}`}/>
            <p className={styles.action__text}>{isDetail ? `${count} likes` : count} </p>
        </div>
    )
}

export default Action;