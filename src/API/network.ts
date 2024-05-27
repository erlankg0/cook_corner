import axios, {AxiosResponse} from "axios";
import {clearTokens, getAccessToken, getRefreshToken} from "./token.ts";
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

const refresh = async () => {
    const refreshToken = getRefreshToken();

    if (refreshToken) {
        try {
            // Выполнение запроса на обновление токена
            const response = await instance.post("users/login/refresh/", {refresh: refreshToken});

            // Возврат нового токена
            return response.data.access;
        } catch (error) {
            console.error('Ошибка при обновлении токена:', error);
            throw error;
        }
    } else {
        // Если нет refresh token, возможно, пользователь должен снова войти в систему
        throw new Error('Refresh token отсутствует');
    }
};


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

const putUserProfile = (username: string, user_bio: string) => {
    const data = {username, user_bio}
    return instance.put("users/update-profile/", data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}

// recipes
const getRecipes = (category?: number, author__name?: string) => {
    if (category) {
        return instance.get(`recipes/?category_id=${category}`)
    } else if (author__name) {
        return instance.get(`recipes/?author_username=${author__name}`)
    }
    return instance.get(`recipes/`)

}

const getDetailRecipe = (id: string) => {
    return instance.get(`recipes/${id}/`)
}

const getSaveRecipes = () => {
    return instance.get(`save-recipes/`)
}

const postSaveRecipe = (id: string) => {
    return instance.post("/save-recipes/create/", {recipe: id})
}

const deleteSaveRecipes = (id: number) => {
    return instance.delete(`save-recipes/delete/${id}/`);
}
// like

const getLikeRecipes = () => {
    return instance.get('like-recipes/')
}
const postLikeRecipes = (id: string) => {
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

const postRecipes = (
    title: string,
    author: string,
    description: string,
    category: number,
    cook_time: string,
    difficulty: string,
    ingredients: IIngredient[],
) => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('description', description);
    formData.append('category', String(category));
    formData.append('cook_time', cook_time);
    formData.append('difficulty', difficulty);
    ingredients.forEach((ingredient, index) => {
        formData.append(`ingredients[${index}][name]`, ingredient.name);
        formData.append(`ingredients[${index}][quantity]`, ingredient.quantity);
        formData.append(`ingredients[${index}][unit_name]`, ingredient.unit_name);
    });

    console.log('Sending data:', [...formData]);
    return instance.post('recipes/create/', formData,);
};

export {auth, registration, postRecipes};
export {getUser, getUsers, refresh, putUserProfile}
export {getCategories, getRecipes, getDetailRecipe};
export {getSaveRecipes, postSaveRecipe, deleteSaveRecipes}
export {getLikeRecipes, postLikeRecipes, deleteRecipes}
export {getFollowUser, postFollowUser, deleteFollowUser}