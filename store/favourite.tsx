import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFavouriteState {
    favouriteUsers: string[];
}

const initialState: IFavouriteState = {
    favouriteUsers: [],
};

export const favouriteSlice = createSlice({
    initialState,
    name: "favouriteSlice",
    reducers: {
        setFavouriteInitialState: (state, action: PayloadAction<string[]>) => {
            state.favouriteUsers = [...action.payload];
        },
        addFavouriteUser: (state, action: PayloadAction<string>) => {
            state.favouriteUsers = [...state.favouriteUsers, action.payload]
        },
        removeFavouriteUser: (state, action: PayloadAction<string>) => {
            state.favouriteUsers = [...state.favouriteUsers.filter(user => user !== action.payload)]
        }
    },
});

export default favouriteSlice.reducer;
export const { setFavouriteInitialState, addFavouriteUser, removeFavouriteUser } = favouriteSlice.actions;


