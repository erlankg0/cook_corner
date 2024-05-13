import React from "react";
import styles from "./category.module.scss";
import {ICategory} from "@components/category/interface.ts";

const Category: React.FC<ICategory> = ({text, selected, onClick}) => {

    return (
        <button
            className={selected ? styles.button : `${styles.button} ${styles.action}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Category;