import Auth from "@layout/Auth/Auth.tsx";
import Registration from "@layout/Registration/registration.tsx";
import Home from "@layout/Home/home.tsx";
import Detail from "@layout/Detail/detail.tsx";
import {Route, Routes} from "react-router-dom";

import styles from './App.module.scss';
import Greeting from "@layout/Greeting/greeting.tsx";
import SearchPage from "@layout/SearchPage/searchPage.tsx";

const App = () => {
    return (
        <div className={styles.content}>
            <Routes>
                <Route path={'/'} element={<Greeting/>}/>
                <Route path={'/auth'} element={<Auth/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/detail'} element={<Detail/>}/>
                <Route path={'/search'} element={<SearchPage/>}/>
            </Routes>
        </div>
    )
}
export default App;