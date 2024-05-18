const ACCESS_TOKEN: string = 'accessToken';
const REFRESH_TOKEN: string = 'refreshToken';

export const saveTokens = (access: string, refreshToken: string) => {
    localStorage.setItem(ACCESS_TOKEN, access);
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
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
};
