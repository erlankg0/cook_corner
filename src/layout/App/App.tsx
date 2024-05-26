// layout
import Auth from "@layout/Auth/Auth.tsx";
import Registration from "@layout/Registration/registration.tsx";
import Home from "@layout/Home/home.tsx";
import Detail from "@layout/Detail/detail.tsx";
import Greeting from "@layout/Greeting/greeting.tsx";
import SearchPage from "@layout/SearchPage/searchPage.tsx";
import Profile from "@layout/Profile/profile.tsx";

// react router dom
import {Route, Routes} from "react-router-dom";

import styles from './App.module.scss';
import Author from "@layout/Author/author.tsx";
import {useEffect} from "react";
import {refresh} from "../../API/network.ts";
import {getAccessToken} from "../../API/token.ts";


const App = () => {
    const token = getAccessToken();

    useEffect(() => {
        const refreshToken = async () => {
            try {
                await refresh();
            } catch (error) {
                // Обработайте ошибку обновления токена здесь, если необходимо
                console.error('Ошибка при обновлении токена:', error);
            }
        };

        if (token) {
            refreshToken();
        }
    }, [token])

    return (
        <div className={styles.content}>
            <Routes>
                <Route path={'/'} element={<Greeting/>}/>
                <Route path={'/auth'} element={<Auth/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/detail/:id'} element={<Detail/>}/>
                <Route path={'/search'} element={<SearchPage/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={"/author/:id"} element={<Author/>}/>
            </Routes>
        </div>
    )
}
export default App;