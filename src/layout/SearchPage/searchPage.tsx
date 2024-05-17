import {useEffect, useState} from "react";
import {Modal} from "antd";

import Aside from "@components/aside/UI/aside.tsx";
import Category from "@components/category/UI/category.tsx";
import SearchInput from "@components/searchInput/UI/searchInput.tsx";
import ButtonRecipes from "@components/buttonRecepes/UI/buttonRecipes.tsx";
import PhotoUpload from "@components/photoUpload/UI/photoUpload.tsx";

import {useAddDispatch, useAppSelector} from "@redux/hooks.ts";
import {setSearch} from "@redux/reducer/search.ts";

import styles from "./search.module.scss"
import data, {ICard} from "./data.ts";

const SearchPage = () => {
    // redux

    const dispatch = useAddDispatch();
    const search = useAppSelector(state => state.search.search);

    const handleSearchOnChange = (value: string): void => {
        dispatch(setSearch(value));
    }
    // business
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

    // live search
    const [cards, setCards] = useState<ICard[]>([]);
    const handleFilter = (value: string, list: ICard[]) => {
        if (!value) {
            return list
        }
        return list.filter(({title}) => title.toLowerCase().includes(value.toLowerCase())
        )
    }

    useEffect(() => {
        const Debounce = setTimeout(() => {
            const filteredList = handleFilter(search, data.results);
            setCards(filteredList);
        })

        return () => clearTimeout(Debounce);
    }, [search])
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
                    <SearchInput placeholder={'Поиск...'} search={search} onChange={handleSearchOnChange}/>
                </div>
                <div className={styles.content__body}>
                    {cards.map((item) => (<p>{item.title}</p>))}
                </div>
                <div className={styles.content__footer}>
                    <ButtonRecipes onClick={handleOnClickModule}/>
                </div>
                <Modal
                    open={active}
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