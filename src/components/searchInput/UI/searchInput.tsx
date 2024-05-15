import React, {useState} from "react";
import styles from "./search.module.scss";
import clear from "@assets/icons/clear.svg";
import search from "@assets/icons/search.svg";

import {ISearchInput} from "@components/searchInput/interface.ts";

const SearchInput: React.FC<ISearchInput> = ({text, placeholder}) => {
    const [image, setImage] = useState<string>(search);
    const handleOnChange = () => {
        if (text.length >= 1) {
            setImage(clear)
        }
        setImage(search)
    }
    return (
        <div className={`${styles.inputBox} ${styles.active}`}>
            <input className={styles.input} onChange={handleOnChange} placeholder={placeholder}/>
            <img className={styles.icon} src={image} alt={'search image'}/>
        </div>
    )
}

export default SearchInput;