import axios, {AxiosResponse} from "axios";
import {clearTokens, getAccessToken} from "./token.ts";
import {IIngredient} from "./interface.ts";

const instance = axios.create({
    baseURL: "https://atai-mamytov.click/cookscorner/",
    headers: {
        Accept: '*/*',
        "Content-Type": 'application/json',
    },
    withCredentials: true
});


// Добавление Access Token в каждый запрос
instance.interceptors.request.use((config) => {
        const token = getAccessToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
)

// Автоматический выход при истечении Access Token
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            clearTokens();
            // Дополнительно можно перенаправить пользователя на страницу логина
            // window.location.href = '/auth'; // Перенаправление на страницу логина
        }
        return Promise.reject(error);
    }
);


const auth = (email: string, password: string): Promise<AxiosResponse> => {
    const data = {
        email: email,
        password: password
    }
    return instance.post("users/login/", data);
}

const registration = (email: string, username: string, password: string) => {
    const data = {
        "email": email,
        "username": username,
        "password": password,
        "photo": null,
        "user_bio": null,
    }
    return instance.post("users/registration/", data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

const getCategories = () => {
    return instance.get('categories/');
}

const getRecipes = () => {
    return instance.get('recipes/')
}
const getUser = (id: string) => {
    return instance.get(`users/profile/${id}/`)
}
const postRecipes = (title: string, author: number, description: string, category: number, cook__time: string, difficulty: string, ingredients: IIngredient[]) => {
    const data = {
        title: title,
        author: author,
        description: description,
        category: category,
        cook__time: cook__time,
        difficulty: difficulty,
        ingredients: ingredients
    }

    return instance.post('recipes/create', data);
}
export {auth, registration, postRecipes};
export {getCategories, getRecipes, getUser};