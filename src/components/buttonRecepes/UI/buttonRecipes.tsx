import add from "@assets/icons/add.svg"
import styles from "./buttonRecipes.module.scss"
import {IButtonRecipes} from "@components/buttonRecepes/interface.ts";
import React from "react";

const ButtonRecipes: React.FC<IButtonRecipes> = ({onClick}) => {
    return (
        <button className={styles.button} onClick={() => onClick(true)}>
            <img className={styles.button__image} src={add} alt={'add recipes'}/>
            <p className={styles.button__text}>Add your recipe</p>
        </button>
    )
}

export default ButtonRecipes