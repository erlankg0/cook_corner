// components
import Card from "@components/card/UI/card.tsx";
import Aside from "@components/aside/UI/aside.tsx";
import styles from "./home.module.scss";
import {useEffect, useState} from "react";
import {getCategories, getRecipes} from "../../API/network.ts";
import {ICategories, IRecipe} from "../../API/interface.ts";
import imageCard from "@assets/image/card3.jpg"

const Home = () => {
    const [categories, setCategories] = useState<ICategories[]>([])
    const [recipes, setRecipes] = useState<IRecipe[]>([])
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    useEffect(() => {
        getCategories().then((res) => {
            setCategories(res.data);
            if (res.data.length > 1) {
                setActiveCategory(res.data[0].name)
            }
        }).catch((er) => console.log(er))
        getRecipes().then((response) => {
            setRecipes(response.data.results)
        })
    }, [])
    const handleCategoryClick = (category: ICategories) => {
        setActiveCategory(category.name);
        getRecipes(category.id).then((res) => {
            setRecipes(res.data.results)
        });
    };

    return (
        <div className={styles.content}>
            <Aside/>
            <div className={styles.body}>
                <section className={styles.user}>
                    <h2 className={styles.user__title}>
                        Hi, Sarthak. UI Designer & Cook
                    </h2>
                </section>
                <section className={styles.category}>
                    <h2 className={styles.category__title}>Category</h2>
                    <nav className={styles.category__nav}>
                        {categories && categories.map((category) => (
                            <div
                                key={category.name}
                                className={`${styles.category__link} ${activeCategory === category.name ? styles.active : ''}`}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category.name}
                            </div>
                        ))}
                    </nav>
                </section>
                <section className={styles.cards}>
                    {recipes.length >= 1 && recipes.map((recipe) => (
                        <Card key={recipe.id} id={recipe.id} image={recipe.image ? recipe.image : imageCard} title={recipe.title}/>))}
                </section>
            </div>
        </div>
    )
}

export default Home;