import styles from './aside.module.scss';
import Logo from "@components/logo/UI/logo.tsx";

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <Logo/>
        </aside>
    )
}


export default Aside;