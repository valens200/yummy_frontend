import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice:9,
    cartsAmout:2,
    cartItems: [],
    isLoading:true
}

const cart = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart: (state) => {
            state.cartItems = []
            console.log("yes");
        },
        incrementAmount : (state, action) => {
            const id = action.payload;
            const itema = state.cartItems.find((item) => item.id === id);
            itema.num = itema.num + 1;
        },
        decrementAmount : (state, action) => {
            const id = action.payload;
            const itema = state.cartItems.find((item) => item.id === id);
           if(itema.num != 0){
            itema.num = itema.num  - 1;
           }
        },
        RemoveProduct :(state, action) => {
            const id = action.payload;
        },
        setMessage : (state, action) => {
            state.message = action.payload;
        },
        TotalPrice : (state) => {
            var cost = 0;
            var amount = 0;
            var total = 0;
            var i;
              state.cartItems.forEach((item) => {
                amount += item.num;
                total += item.cost * item.num;
              })
              state.cartsAmout = amount;
              state.totalPrice = total  ;

        },
        addToCart: (state, action) => {
            const item = action.payload
             state.cartItems[state.cartItems.length + 1] = item;
        }

    }
})
export const  { clearCart, incrementAmount, decrementAmount, RemoveProduct , setMessage, addToCart, TotalPrice} = cart.actions
export const cartReducer = cart.reducer;




