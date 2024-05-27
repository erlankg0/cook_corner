// components
import Aside from "@components/aside/UI/aside.tsx";
import Action from "@components/action/UI/action.tsx";
import Ingredient from "@components/ingredient/UI/ingredient.tsx";

import styles from "./detail.module.scss";
import imageBackground from "@assets/image/background.jpg";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getDetailRecipe} from "../../API/network.ts";
import {IRecipe} from "../../API/interface.ts";

const Detail = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState<IRecipe>();
    useEffect(() => {
        if (id) {
            getDetailRecipe(id).then((r) => setDetail(r.data));
        }
    }, [])
    return (
        <div className={styles.content}>
            <Aside/>
            {detail && (
                <div className={styles.detail}>
                    <div className={styles.detail__header}>
                        <img className={styles.detail__header__image}
                             src={detail.image ? detail.image : imageBackground} alt={'background image'}/>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.header}>
                            <h2 className={styles.header__title}>{detail.title}</h2>
                            <p className={styles.header__paragraph}>{detail.author_name}</p>
                        </div>
                        <div className={styles.times}>
                            <div className={styles.times__time}>{detail.cook_time}</div>
                            <p className={styles.times__level}>{detail.difficulty}</p>
                        </div>
                        <div className={styles.actions}>
                            {id && (
                                <>
                                    <Action id={id} type={'like'} count={0} isDetail={true}/>
                                    <Action id={id} type={'follow'} count={1} isDetail={false}/>
                                </>
                            )}

                        </div>
                        <div className={styles.information}>
                            <p className={styles.information__description}>Description</p>
                            <text className={styles.information__text}>
                                {detail.description}
                            </text>
                        </div>
                        <div className={styles.ingredients}>
                            <h1 className={styles.ingredients__title}>Ingredients</h1>
                            <ul className={styles.ingredients__list}>
                                {detail.ingredients.map((ingredient) => (<Ingredient {...ingredient}/>))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Detail;