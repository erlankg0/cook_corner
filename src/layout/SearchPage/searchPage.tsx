import {useEffect, useState} from "react";
import {Modal} from "antd";

import Aside from "@components/aside/UI/aside.tsx";
import Category from "@components/category/UI/category.tsx";
import SearchInput from "@components/searchInput/UI/searchInput.tsx";
import ButtonRecipes from "@components/buttonRecepes/UI/buttonRecipes.tsx";
import PhotoUpload from "@components/photoUpload/UI/photoUpload.tsx";
import Card from "@components/card/UI/card.tsx";
import Author from "@components/author/UI/author.tsx";

import {useAddDispatch, useAppSelector} from "@redux/hooks.ts";
import {setSearch} from "@redux/reducer/search.ts";

import styles from "./search.module.scss"
import {cards as data, authors, ICard} from "./data.ts";
import {IAuthor} from "@components/author/interface.ts";

import image from "@assets/image/card2.jpg";

const SearchPage = () => {
    // redux
    const dispatch = useAddDispatch();
    const search = useAppSelector(state => state.search.search);

    const handleSearchOnChange = (value: string): void => {
        dispatch(setSearch(value));
    }

    // business
    const [chefsSelect, setChefsSelect] = useState<boolean>(true);
    const [recipesSelect, setRecipesSelect] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);

    const handleOnClickCategory = () => {
        setChefsSelect(!chefsSelect);
        setRecipesSelect(!recipesSelect);
    }

    const handleOnClickModule = () => {
        setActive(!active);
    }

    // live search
    const [filteredResultsCards, setFilteredResultsCards] = useState<ICard[]>(data.results);
    const [filteredResultsAuthors, setFilteredResultsAuthors] = useState<IAuthor[]>(authors);

    const handleFilterCard = (value: string, list: ICard[]) => {
        if (!value) {
            return list;
        }
        return list.filter(({title}) => title.toLowerCase().includes(value.toLowerCase()));
    }

    const handleFilterAuthor = (value: string, list: IAuthor[]) => {
        if (!value) {
            return list
        }
        return list.filter(({name}) => name.toLowerCase().includes(value.toLowerCase()));
    }

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (chefsSelect || recipesSelect) {
                setFilteredResultsAuthors(handleFilterAuthor(search, authors));
                setFilteredResultsCards(handleFilterCard(search, data.results));
            }
        }, 300);

        return () => clearTimeout(debounce);
    }, [search]);


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
                    <h2 className={styles.results}>Search Result</h2>
                    <div className={styles.cards}>
                        {!recipesSelect && filteredResultsCards.map((card) => (<Card {...card} image={image}/>))}
                    </div>
                    <div className={styles.authors}>
                        {!chefsSelect && filteredResultsAuthors.map((author) => (<Author {...author}/>))}
                    </div>
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