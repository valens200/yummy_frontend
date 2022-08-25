
import  { createSlice } from '@reduxjs/toolkit'


const initialState = {
    FirstName:'',
    LastName: '',
    Email:'',
    Phone:'',
    openedCheckBox:true,
    password:'',
    inputs: {
        loginInputs: ['Email', 'password'],
        signupInputs2: ['vava', 'password', 'murangwa'],
        signupInputs3: ['FirstName', 'LastName', 'Email','Password', ],

    },
    message: '',
    loggedIn:{
        username: '',
        email: '',
        FullNames: '',
    },
    product:{
        name:'',
        cost: ''

    }
}
const formSlice = createSlice({
    name:"form",
    initialState,
    reducers: {
        setForm: (state, action) =>{
            const data = action.payload.input;
            const value = action.payload.value;
            switch(data){
                case 'FirstName':
                    state.FirstName = value;
                    break;
                 case 'LastName': 
                       state.LastName = value;
                       break;
                 case 'Email':
                    state.Email = value;
                    break;
                 case 'password':
                    state.password = value;
                    break;
                 case 'phone':
                    state.Phone = value
                    break;
                  default:
                    console.log("app");
                    break;       
            }
        },
        setProduct: (state, action) => {
            const data = action.payload.input;
            const value = action.payload.value

            switch(data){
                case 'name':
                    state.product.name = value;
                    break;
                case 'cost':
                    state.product.cost = value;
                    break;
                default:
                    console.log("app");
                    break;
            }
        },

        setLoggedInUser: (state, action) => {
            state.loggedIn.FullNames = action.payload.fullNames;
            state.loggedIn.username = action.payload.username;
            state.loggedIn.email = action.payload.email;
            const user = state.loggedIn;
        },
        setMessage: (state, action) => {
            state.message = action.payload

        },
        ResetMessage: (state, action) => {
            state.message = "";
        },

        //other functions

        next : (state, action) =>{
            state.signupInputs3 = state.signupInputs2;
        },
        back : (state, action) =>{
            state.signupInputs3 = state.signupInputs1;
        },
        openedCheckBox: (state, action) =>{
            state.openedCheckBox = !state.openedCheckBox;
        }

    }
})
export const formReducer = formSlice.reducer;
export const {setForm, setProduct,  openedCheckBox, next, back, setLoggedInUser,  getType ,  setMessage, ResetMessage} = formSlice.actions;