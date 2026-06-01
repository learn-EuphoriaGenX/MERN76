import { createSlice } from '@reduxjs/toolkit'


let initialData = {
    _id: "",
    token: "",
    username: "",
    email: "",
    role: "",
    profileImg: ""
}

let authSlice = createSlice({
    name: "auth",
    initialState: initialData,
    reducers: {
        setUser: (state, action) => {
            state._id = action.payload._id
            state.token = action.payload.token
            state.username = action.payload.username
            state.email = action.payload.email
            state.role = action.payload.role
            state.profileImg = action.payload.profileImg
        },

        removeUser: (state) => {
            state.token = ""
            state.username = ""
            state.email = ""
            state.role = ""
        }
    }
})


export default authSlice.reducer
export let { setUser, removeUser } = authSlice.actions