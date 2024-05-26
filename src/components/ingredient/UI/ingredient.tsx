import React from "react";
import styles from "./ingredient.module.scss"
import {IIngredient} from "@components/ingredient/interface.ts";

const Ingredient: React.FC<IIngredient> = ({name, quantity, }) => {
    return <div className={styles.box}>
        <p className={styles.ingredient}>{name}</p>
        <p className={styles.ingredient}>{quantity}</p>
    </div>

}

export default Ingredient;