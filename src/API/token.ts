const ACCESS_TOKEN: string = 'accessToken';
const REFRESH_TOKEN: string = 'refreshToken';
const USER_ID: string = 'userid';
export const saveTokens = (access: string, refreshToken: string) => {
    localStorage.setItem(ACCESS_TOKEN, access);
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
}
export const saveUserID = (id: number) => {
    localStorage.setItem(USER_ID, `${id}`)
}
export const getUserID = () => {
    return localStorage.getItem(USER_ID);
}

export const getAccessToken = (): string | null => {
    return localStorage.getItem(ACCESS_TOKEN);
}

export const getRefreshToken = (): string | null => {
    return localStorage.getItem(REFRESH_TOKEN);
};

export const clearTokens = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem(USER_ID);
};
