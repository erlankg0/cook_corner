import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.content}>
            <div className={'container'}>
                <div className={styles.text}>
                    <h1 className={styles.title}>Welcome back To Corner Cook
                    </h1>
                </div>
            </div>
        </header>
    )
}

export default Header;
