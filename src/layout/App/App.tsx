import Auth from "@layout/Auth/Auth.tsx";
import Registration from "@layout/Registration/registration.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "@layout/Home/UI/home.tsx";

import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles.content}>
            <Routes>
                <Route path={'/'} element={<Auth/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                <Route path={'/home'} element={<Home/>}/>
            </Routes>
        </div>
    )
}
export default App;