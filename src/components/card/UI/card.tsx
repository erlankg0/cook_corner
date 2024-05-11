import React from "react";

import {ICard} from "@components/card/interface.ts";

import styles from "./card.module.scss";
import Action from "@components/action/UI/action.tsx";

const Card: React.FC<ICard> = ({image}) => {
    return (
        <div className={styles.card}>
            <img className={styles.card__image} src={image} alt={'card image'}/>
            <div className={styles.card__content}>
                <h2 className={styles.card__title}>Egg Omlet</h2>
                <p className={styles.card__author}>by Erlan Abdraimov</p>
                <div className={styles.card__actions}>
                    <Action type={"like"} count={1}/>
                    <Action type={"follow"} count={0}/>
                    {/*<Like/>*/}
                    {/*<Follow/>*/}
                </div>
            </div>
        </div>
    )
}

export default Card;