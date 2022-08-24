import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../model";
import { clearLocalStorage, persistLocalStorage } from "../../utilities";
import { user } from '../../../.history/src/redux/states/user_20220823165900';
export const EmptyUserState: UserInfo = {
    id: 0,
    name: '',
    email: '',
    rol:user,
};
export const UserKey = 'user';
export const userSlice = createSlice({
    name: 'user',
    initialState:
        localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : EmptyUserState,
    reducers: {
        createUser: (state, action) => {
            persistLocalStorage<UserInfo>(UserKey, action.payload);
            return action.payload;
        },
        updateUser: (state, action) => {
            const result = { ...state, ...action.payload };
            persistLocalStorage<UserInfo>(UserKey, result);
            return result;
        },
        resetUser: () => {
            clearLocalStorage(UserKey);
            return EmptyUserState;
        }
    }
});
export const { createUser, updateUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
