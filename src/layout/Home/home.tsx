import Card from "@components/card/UI/card.tsx";
import card from "@assets/image/card1.jpg";
import styles from "./home.module.scss";
import Aside from "@components/aside/UI/aside.tsx";

const Home = () => {
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
                        <div className={`${styles.category__link} ${styles.active}`}>Breakfast</div>
                        <div className={styles.category__link}>Lunch</div>
                        <div className={styles.category__link}>Dinner</div>
                    </nav>
                </section>
                <section className={styles.cards}>
                    <Card image={card}/>
                    <Card image={card}/>
                    <Card image={card}/>
                    <Card image={card}/>
                    <Card image={card}/>
                    <Card image={card}/>
                    <Card image={card}/>
                    <Card image={card}/>
                    <Card image={card}/>
                    <Card image={card}/>
                    <Card image={card}/>
                    <Card image={card}/>
                </section>
            </div>
        </div>
    )
}

export default Home;