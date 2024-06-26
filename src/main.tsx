import ReactDOM from 'react-dom/client'
import './index.scss'
import App from "@layout/App/App.tsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
