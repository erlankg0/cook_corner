import Auth from "@layout/Auth/Auth.tsx";
import Registration from "@layout/Registration/registration.tsx";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Auth/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
            </Routes>
        </div>
    )
}
export default App;