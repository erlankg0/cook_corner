import React from "react";

import {ICard} from "@components/card/interface.ts";
import Action from "@components/action/UI/action.tsx";
import {NavLink} from "react-router-dom";

import styles from "./card.module.scss";

const Card: React.FC<ICard> = ({image, title, id}) => {
    return (
        <NavLink to={`/detail/${id}`} className={styles.card}>
            <img className={styles.card__image} src={image} alt={'card image'}/>
            <div className={styles.card__content}>
                <h2 className={styles.card__title}>{title}</h2>
                <p className={styles.card__author}>by Erlan Abdraimov</p>
                <div className={styles.card__actions}>
                    <Action isDetail={false} type={"like"} count={1}/>
                    <Action isDetail={false} type={"follow"} count={0}/>
                </div>
            </div>
        </NavLink>
    )
}

export default Card;