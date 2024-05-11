import Aside from "@components/aside/UI/aside.tsx";
import styles from "./detail.module.scss";
import imageBackground from "@assets/image/background.jpg";

const Detail = () => {
    return (
        <div className={styles.content}>
            <Aside/>
            <div className={styles.detail}>
                <div className={styles.detail__header}>
                    <img className={styles.detail__header__image} src={imageBackground} alt={'background image'}/>
                </div>
                <div className={styles.body}>
                    <div className={styles.text}>
                        <h2 className={styles.text__title}>Ainsley’s Jerk Chicken</h2>
                        <p className={styles.text__paragraph}>by Ainsley Harriott</p>
                    </div>
                    <div className={styles.time}>
                        <div>20-30 min</div>
                        <p>Easy</p>
                    </div>
                    <div>
                        <p></p>
                        <text>
                            You pick up your palette knife and then work that into. Give your meat a good old rub.
                            That’s
                            it, nice and hot, hot and spicy meat. He-he boy...You pick up your palette knife and then
                            work
                            that into. Give your meat a good old rub. That’s it, nice and hot, hot and spicy meat. He-he
                            boy...You pick up your palette knife and then work that into. Give your meat a good old rub.
                            That’s it, nice and hot, hot and spicy meat. He-he boy...
                        </text>
                    </div>
                    <div>
                        <h1>Ingredients</h1>
                        <ul>
                            <li>Chicken</li>
                            <li>Chicken</li>
                            <li>Chicken</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;