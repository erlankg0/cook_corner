import axios, {AxiosResponse} from "axios";
import {clearTokens, getAccessToken} from "./token.ts";
import {IIngredient} from "./interface.ts";
import {UploadFile} from "antd";

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
            window.location.href = '/auth'; // Перенаправление на страницу логина
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
// user

const getUser = (id: string) => {
    return instance.get(`users/profile/${id}/`)
}
const getUsers = () => {
    return instance.get(`users/profiles/`)
}
// recipes
const getRecipes = () => {
    return instance.get('recipes/')
}

const getSaveRecipes = () => {
    return instance.get(`save-recipes/`)
}

const postSaveRecipe = (id: number) => {
    return instance.post("/save-recipes/create/", {recipe: id})
}

const deleteSaveRecipes = (id: number) => {
    return instance.delete(`save-recipes/delete/${id}/`);
}
// like

const getLikeRecipes = () => {
    return instance.get('like-recipes/')
}
const postLikeRecipes = (id: number) => {
    return instance.post('like-recipes/create/', {recipe: id})
}

const deleteRecipes = (id: number) => {
    return instance.delete(`like-recipes/delete/${id}/`)
}
// follow

const getFollowUser = () => {
    return instance.get('follow-user/');
}

const postFollowUser = (id: number) => {
    return instance.post('follow-user/create/', {followed: id})
}

const deleteFollowUser = (id: number) => {
    return instance.delete(`follow-user/delete/${id}/`)
}


const postRecipes = (title: string, author: string, description: string, category: number, cook__time: string, difficulty: string, ingredients: IIngredient[], image: UploadFile) => {
    const data = {
        title: title,
        author: author,
        description: description,
        category: category,
        cook_time: cook__time,
        difficulty: difficulty,
        ingredients: ingredients,
        image: image
    }

    return instance.post('recipes/create/', data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
}
export {auth, registration, postRecipes};
export {getUser, getUsers}
export {getCategories, getRecipes};
export {getSaveRecipes, postSaveRecipe, deleteSaveRecipes}
export {getLikeRecipes, postLikeRecipes, deleteRecipes}
export {getFollowUser, postFollowUser, deleteFollowUser}