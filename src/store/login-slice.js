import { createSlice } from "@reduxjs/toolkit"

const initial = [
    {
        email: 'insanrysbecov@gmail.com',
        password: 'insan123'
    },
    {
        email: 'beka00@gmail.com',
        password: 'b000b'
    },
    {
        email: 'talas@gmail.com',
        password: 'tkg77'
    },
]
 const register = createSlice({
    name: 'login',
    initialState: initial,
    reducers: {
        loggin(state, action){
        }
    }
})

export const registerActions = register.actions
export default register;