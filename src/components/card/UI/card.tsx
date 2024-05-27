import React from "react";

import {ICard} from "@components/card/interface.ts";
import Action from "@components/action/UI/action.tsx";
import {NavLink} from "react-router-dom";

import styles from "./card.module.scss";
import defaultImage from "@assets/image/card1.jpg"

const Card: React.FC<ICard> = ({image, title, id}) => {
    return (
        <div className={styles.card}>
            <NavLink to={`/detail/${id}`} className={styles.card}>
                <img className={styles.card__image} src={image ? image : defaultImage} alt={'card image'}/>
            </NavLink>
            <div className={styles.card__content}>
                <h2 className={styles.card__title}>{title}</h2>
                <p className={styles.card__author}>by Erlan Abdraimov</p>
                <div className={styles.card__actions}>
                    {id && (
                        <>
                            <Action id={id} isDetail={false} type={"like"} count={1}/>
                            <Action id={id} isDetail={false} type={"follow"} count={0}/>
                        </>
                    )}
                </div>
            </div>

        </div>

    )
}

export default Card;