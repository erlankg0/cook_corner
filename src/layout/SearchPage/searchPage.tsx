import Aside from "@components/aside/UI/aside.tsx";
import styles from "./search.module.scss"
import Category from "@components/category/UI/category.tsx";
import {useState} from "react";
import SearchInput from "@components/searchInput/UI/searchInput.tsx";
import ButtonRecipes from "@components/buttonRecepes/UI/buttonRecipes.tsx";
import {Modal} from "antd";
import PhotoUpload from "@components/photoUpload/UI/photoUpload.tsx";

const SearchPage = () => {
    const [chefsSelect, setChefsSelect] = useState<boolean>(true);
    const [recipesSelect, setRecipesSelect] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)
    const handleOnClickCategory = () => {
        setChefsSelect(!chefsSelect);
        setRecipesSelect(!recipesSelect)
    }
    const handleOnClickModule = () => {
        setActive(!active);
    }
    return (
        <main className={styles.container}>
            <Aside/>
            <section className={styles.content}>
                <div className={styles.content__header}>
                    <h2 className={styles.title}>What to eat today ?</h2>
                    <div className={styles.categories}>
                        <Category selected={chefsSelect} text={'Chefs'} onClick={handleOnClickCategory}/>
                        <Category selected={recipesSelect} text={'Recipes'} onClick={handleOnClickCategory}/>
                    </div>
                    <SearchInput placeholder={'Поиск...'} text={''}/>
                </div>
                <div className={styles.content__body}>
                    body
                </div>
                <div className={styles.content__footer}>
                    <ButtonRecipes onClick={handleOnClickModule}/>
                </div>
                <Modal
                    visible={active}
                    onCancel={handleOnClickModule}
                    centered={true}
                    footer={null}
                >
                    <div>
                        <h2>Моя собственная верстка</h2>
                        <p>Это ваше собственное содержимое модального окна.</p>
                        <p>Вы можете добавить здесь любые элементы HTML и стили для настройки внешнего вида.</p>
                        <PhotoUpload/>
                    </div>
                </Modal>
            </section>
        </main>
    )
}


export default SearchPage;