import React from "react";
import styles from "./author.module.scss"
import imageDefault from "@assets/image/card2.jpg";
import {IAuthor} from "@components/author/interface.ts";
import {NavLink} from "react-router-dom";

const Author: React.FC<IAuthor> = ({ name, id}) => {
    return (
        <NavLink to={`/author/${id}`} className={styles.author}>
            <img src={imageDefault} alt={'chiefs photo'} className={styles.author__image}/>
            <p className={styles.author__title}>{name}</p>
        </NavLink>
    )
}

export default Author