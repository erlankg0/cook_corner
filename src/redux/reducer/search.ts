import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ISearch {
    search: string,
}

const initialState: ISearch = {
    search: '',
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        }
    }
})

export const {setSearch} = searchSlice.actions;
export default searchSlice.reducer;