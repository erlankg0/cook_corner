import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: "https://atai-mamytov.click/cookscorner",
    headers: {
        Accept: '*/*',
        "Content-Type": 'application/json',
    },
    withCredentials: true
});


const auth = (email: string, password: string): Promise<AxiosResponse> => {
    const data = {
        email: email,
        password: password
    }
    return instance.post("/users/login/", data);
}


export {auth}