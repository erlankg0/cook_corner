import React, {useState} from "react";
import {ISearchInput} from "@components/searchInput/interface.ts";

import styles from "./search.module.scss";
import clearImage from "@assets/icons/clear.svg";
import searchImage from "@assets/icons/search.svg";

const SearchInput: React.FC<ISearchInput> = ({placeholder, search, onChange}) => {
    const [image, setImage] = useState<string>(search);

    const handleOnChange = (value: string) => {
        if (value.length >= 1) {
            setImage(clearImage);
        } else {
            setImage(searchImage);
        }
    }

    const handleInputOnChange = (value: string) => {
        onChange(value);
        handleOnChange(value);
    }

    const handleOnClickClear = () => {
        onChange('');
        setImage(searchImage);
    }

    return (
        <div className={`${styles.inputBox} ${styles.active}`}>
            <input
                className={styles.input}
                value={search} // Bind the input value to the state
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    handleInputOnChange(event.target.value);
                }} placeholder={placeholder}/>
            <img onClick={handleOnClickClear} className={styles.icon} src={image} alt={'search image'}/>
        </div>
    )
}

export default SearchInput;