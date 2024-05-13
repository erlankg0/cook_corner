import React from "react";
import styles from "./ingredient.module.scss"
import {IIngredient} from "@components/ingredient/interface.ts";

const Ingredient: React.FC<IIngredient> = ({name}) => {
    return <p className={styles.ingredient}>{name}</p>

}

export default Ingredient;