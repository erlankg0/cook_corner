import ReactDOM from 'react-dom/client'
import './index.scss'
import App from "@layout/App/App.tsx";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "@redux/store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)
