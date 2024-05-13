import Aside from "@components/aside/UI/aside.tsx";
import styles from "./search.module.scss"
import Category from "@components/category/UI/category.tsx";
import {useState} from "react";
import SearchInput from "@components/searchInput/UI/searchInput.tsx";

const SearchPage = () => {
    const [select, setSelect] = useState<boolean>(false);
    const handleOnClick = () => {
        setSelect(!select);
    }
    return (
        <main className={styles.container}>
            <Aside/>
            <section className={styles.content}>
                <div className={styles.content__header}>
                    <h2 className={styles.title}>What to eat today ?</h2>
                    <div className={styles.categories}>
                        <Category selected={select} text={'Chefs'} onClick={handleOnClick}/>
                        <Category selected={select} text={'Recipes'} onClick={handleOnClick}/>
                    </div>
                    <SearchInput text={''}/>
                </div>
                <div className={styles.content__body}>
                    body
                </div>
                <div className={styles.content__footer}>
                    footer
                </div>
            </section>
        </main>
    )
}


export default SearchPage;