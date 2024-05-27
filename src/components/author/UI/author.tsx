import React from "react";
import styles from "./author.module.scss"
import imageDefault from "@assets/image/userpic.png";
import {IAuthor} from "@components/author/interface.ts";
import {NavLink} from "react-router-dom";

const Author: React.FC<IAuthor> = ({ username, id, photo}) => {
    return (
        <NavLink to={`/author/${id}`} className={styles.author}>
            <img src={photo ? photo: imageDefault} alt={'chiefs photo'} className={styles.author__image}/>
            <p className={styles.author__title}>{username}</p>
        </NavLink>
    )
}

export default Author