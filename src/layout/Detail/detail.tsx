import Aside from "@components/aside/UI/aside.tsx";
import styles from "./detail.module.scss";
import imageBackground from "@assets/image/background.jpg";
import Action from "@components/action/UI/action.tsx";
import Ingredient from "@components/ingredient/UI/ingredient.tsx";

const Detail = () => {
    return (
        <div className={styles.content}>
            <Aside/>
            <div className={styles.detail}>
                <div className={styles.detail__header}>
                    <img className={styles.detail__header__image} src={imageBackground} alt={'background image'}/>
                </div>
                <div className={styles.body}>
                    <div className={styles.header}>
                        <h2 className={styles.header__title}>Ainsley’s Jerk Chicken</h2>
                        <p className={styles.header__paragraph}>by Ainsley Harriott</p>
                    </div>
                    <div className={styles.times}>
                        <div className={styles.times__time}>20-30 min</div>
                        <p className={styles.times__level}>Easy</p>
                    </div>
                    <div className={styles.actions}>
                        <Action type={'like'} count={0} isDetail={true}/>
                        <Action type={'follow'} count={1} isDetail={false}/>
                    </div>
                    <div className={styles.information}>
                        <p className={styles.information__description}>Description</p>
                        <text className={styles.information__text}>
                            You pick up your palette knife and then work that into. Give your meat a good old rub.
                            That’s
                            it, nice and hot, hot and spicy meat. He-he boy...You pick up your palette knife and then
                            work
                            that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he
                            boy...You pick up your palette knife and then work that into. Give your meat a good old rub.
                            That’s it, nice and hot, hot and spicy meat. He-he boy...
                        </text>
                    </div>
                    <div className={styles.ingredients}>
                        <h1 className={styles.ingredients__title}>Ingredients</h1>
                        <ul className={styles.ingredients__list}>
                            <Ingredient name={'Мясо'}/>
                            <Ingredient name={'Мясо'}/>
                            <Ingredient name={'Мясо'}/>
                            <Ingredient name={'Мясо'}/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;