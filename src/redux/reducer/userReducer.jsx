import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userRegister: {
        "email": "",
        "password": "",
        "name": "",
        "gender": true,
        "phone": ""
    }
};

const userReducer = createSlice({
    name: 'user', // Sửa thành chuỗi tên
    initialState,
    reducers: {
        handleChangeInputAction: (state, action) => {
            const { id, value } = action.payload;
            state.userRegister[id] = value; // Cập nhật state với giá trị mới
        }
    }
});

export const { handleChangeInputAction } = userReducer.actions;
export default userReducer.reducer;
