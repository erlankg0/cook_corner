import styles from "./aside.module.scss";
import Logo from "@components/logo/UI/logo.tsx";

import home from "@assets/icons/home.svg";
import search from "@assets/icons/search.svg";
import people from "@assets/icons/people.svg";
import logout from "@assets/icons/logout.svg";
import Navigation from "@components/navigation/UI/navigation.tsx";

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <Logo/>
            <div className={styles.aside__navigations}>
                <Navigation image={home}/>
                <Navigation image={search}/>
                <Navigation image={people}/>
            </div>
            <div className={styles.aside__out}>
                <Navigation image={logout}/>
            </div>
        </aside>
    )
}


export default Aside;