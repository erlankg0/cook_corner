import styles from "./aside.module.scss";
import Logo from "@components/logo/UI/logo.tsx";

import home from "@assets/icons/home.svg";
import search from "@assets/icons/search.svg";
import people from "@assets/icons/people.svg";
import logoutImage from "@assets/icons/logout.svg";
import Navigation from "@components/navigation/UI/navigation.tsx";
import {clearAuthTokens} from "@redux/reducer/auth.ts";
import {logout} from "../../../API/network.ts";
const Aside = () => {
    const handleLogout = ()=>{
        logout();
        clearAuthTokens();

    }
    return (
        <aside className={styles.aside}>
            <Logo/>
            <div className={styles.aside__navigations}>
                <Navigation url={'home'} image={home}/>
                <Navigation url={'search'} image={search}/>
                <Navigation url={'profile'} image={people}/>
            </div>
            <div className={styles.aside__out}>
                <Navigation onClick={handleLogout} url={''} image={logoutImage}/>
            </div>
        </aside>
    )
}


export default Aside;