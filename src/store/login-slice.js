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
// const initial = {
//     isAuth: false,
//     errorMessage: '',
//     Accaunt: {}
// }
 const register = createSlice({
    name: 'login',
    initialState: initial,
    reducers: {
        loggin(state, action){
        //     for (const el of base) {
        //         if (el.email === action.payload.email && el.password === action.payload.password) {
		// 			state.isAuth = true
		// 			state.personalAccount = { ...el }
		// 			state.errorMessage = ''
        //             break;
		// 		} else {
		// 			state.errorMessage = 'Возможно вы ввели неправильный логин или пароль'
		// 		}
        //     }
		// },
		// logout(state){
		// 	state.errorMessage = '';
		// 	state.isAuth = false;
        // }
        }
    }
})

export const registerActions = register.actions
export default register;