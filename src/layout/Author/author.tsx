import styles from "./author.module.scss";
import Aside from "@components/aside/UI/aside.tsx";

const Author = () => {
    return (
        <main className={styles.content}>
            <Aside/>
            <div className={styles.detail}>

            </div>
        </main>
    )
}

export default Author;