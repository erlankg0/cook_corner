import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IUser {
    id: string,
    email: string,
    username: string,
    photo: string,
    user_bio: string,
    count_followers: string,
    count_following: string,
    count_recipes: string
}

const initialState: IUser = {
    id: '1',
    email: "era.ab.02@gmail.com",
    username: "era",
    photo: "",
    user_bio: "Front end Dev",
    count_followers: '1',
    count_following: "1000",
    count_recipes: "10",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setID(state, action: PayloadAction<string>) {
            state.id = action.payload;
        },
        setEmail(state, action: PayloadAction<string>) {
            state.email = action.payload
        },
        setUserName(state, action: PayloadAction<string>) {
            return state = {...state, username: action.payload};
        },
        setUserBio(state, action: PayloadAction<string>) {
            return state = {...state, user_bio: action.payload};
        },
        setData(state, action: PayloadAction<IUser>) {
            return {...state, ...action.payload}
        }
    }
})

export const {setID, setUserName, setUserBio, setData, setEmail} = userSlice.actions;
export default userSlice.reducer;