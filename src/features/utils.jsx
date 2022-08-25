import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dashboarLinks: [ 'Overview', 'Orders', 'Clients'],
    dashboarLinks2: ['Settings', 'Profile'],
    buttons: ['Orders', 'Filter'],
    Delivering: ['Delivered', 'Waiting', 'Rejected', 'All'],
    showModal:false,
    showLinks:false,
    Resto:['Restaurent info', 'Restaurent Type & Timings', 'Create your menu'],
    showModalform: false,
    buttons3:[
        {
            name:"Drink",
            clicked:true,
            checked:true,
        },
        {
            name:'Starter',
            clicked:false
        },
        {
            name:'Appetiser',
            checked:false,
            clicked:false
        },
        {
            name:'Food',
            checked:false,
            clicked:false
        },
        {
            name:'Tailand Pizza',
            checked:false,
            clicked:false
        },
    ],
    orders: ['valens Niyonsenga', 'Murangwa patrick', 'Kwihangana Guerichom', 'valantin murangwa',  'Ishimwe Emmanuel', 'Faizzo pro', 'Amazon'],

    availableFood:[
        {
            name:'Desert',
            checked:true
        },
        {
            name:'Pocho',
            checked:false
        },
        {
            name:'Invange',
            checked:false
        },
        {
            name:'Pizza',
            checked:false
        },
        {
            name:'Pocho2',
            checked:false
        },
        {
            name:'Mango',
            checked:false
        },
    ],
    Tables:[
      {
        Drinks:[
            {
                name:'Red Wine',
                cost:150000,
                
            },
            {
                name:'Scotch',
                cost:12000,
                
            },
            {
                name:'Rye',
                cost:150000,
                
            },
            {
                name:'Vodka',
                cost:150000,
                
            },
            {
                name:'Hennessy',
                cost:350000,
                
            },
            {
                name:'Beer',
                cost:250000,
                
            },
            {
                name:'Fanta',
                cost:150000,
                
            }
        ]
      }
    ],
    overviews:[
        {
            name:'Clients',
            number:80,
        },
        {
            name:'Revenues',
            number:1000000,
        },
        {
            name:'Orders',
            number:1000
        }
    ],
    bestClients: [
        {
            name:'Restaurants',
            clients:[
                {
                    name:'La lune de couer',
                    income:9000000
                },
                {
                    name:'Chez mama Idi',
                    income:12000000
                },
                
            ]
        },
        {
            name:'Hotels',
            clients:[
                {
                    name:'La lune de couer',
                    income:9000000
                },
                {
                    name:'Chez mama Idi',
                    income:12000000
                },
                
            ]
        },

    ],
    bestClientss: [
                {
            name:'Boucheries',
            clients:[
                {
                    name:'La lune de couer',
                    income:9000000
                },
                {
                    name:'Mugabo boucher',
                    income:12000000
                },
                
            ]
        },
        {
            name:'Boutiquest',
            clients:[
                {
                    name:'La lune de couer',
                    income:9000000
                },
                {
                    name:'Kayove praza',
                    income:12000000
                },
                
            ]
        }
    ],

    clients: [
        {
            name:"Kigalie",
            income:59000500,
            category:"Resto"
        },
        {
            name:"Nyamirambo food ltd",
            income:450000000,
            category:"Resto"
        },
        {
            name:"valens NIYONSENGA",
            income:120000000,
            category:" client"
        },
        {
            name:"e-soko praza",
            income:5344440000,
            category:"Hotel"
        },
        {
            name:"Heritien MUGIRANEZA",
            income:50045300000,
            category:"Resto"
        },
        {
            name:"Nyabihu manogoes",
            income:230000000,
            category:"Resto"
        },
        {
            name:"Kigali soups",
            income:500000000,
            category:"Resto"
        },

    ],
    menuInputs:[
        {
            label:"Name",
            type:'text',
            placeholder:"Menu name"
        },
        {
            label:"Price",
            placeholder:"RWF",
            type:"number",
        },
        {
            label:"Image",
            type:'file',
            placeholder:"upload image"
        }
    ]
}


const utilsSlice = createSlice({
    name: "utils",
    initialState,
    reducers: {
        checke: (state, action) => {
            const data = action.payload;
            const food =  state.availableFood.find((food) => food.name == data);
            food.checked = !food.checked;
        },
        checke2: (state, action) => {
            const data = action.payload;
            const food =  state.buttons3.find((food) => food.name == data);
            food.checked = !food.checked;
        },
        showModal : (state, action) => {
            state.showModal = true;
          console.log(state.showModal)

        },
        hideModal : (state, action) => {
            state.showModal = false;
        },
        hideModa : (state, action) => {
            state.showModalform = false

        },
        showModa : (state, action) => {
            state.showModalform = true;

        },
        changeColor: (state, action) => {
            const btn = action.payload.name;
            const buttons = state.buttons3.filter((btn) => btn.name != btn);
            buttons.forEach((btn) =>{
                btn.clicked = false;
            })
            switch(btn){
                case 'Starter':
                    state.buttons3[1].clicked = true;
                    break;
                    console.log(state.buttons3[1].clicked);
                case 'Appetiser':
                    state.buttons3[2].clicked = true;
                    break;
                case 'Food':
                    state.buttons3[3].clicked = true;
                    break;
                case 'Tailand Pizza':
                    state.buttons3[4].clicked = true;
                    break;
                default :
                state.buttons3[0].clicked = true;
            }

        },
          changeColor: (state, action) => {
            const btn = action.payload.name;
            const buttons = state.buttons3.filter((btn) => btn.name != btn);
            buttons.forEach((btn) =>{
                btn.clicked = false;
            })
            switch(btn){
                case 'Starter':
                    state.buttons3[1].clicked = true;
                    break;
                    console.log(state.buttons3[1].clicked);
                case 'Appetiser':
                    state.buttons3[2].clicked = true;
                    break;
                case 'Food':
                    state.buttons3[3].clicked = true;
                    break;
                case 'Tailand Pizza':
                    state.buttons3[4].clicked = true;
                    break;
                default :
                state.buttons3[0].clicked = true;
            }

        },
        showLink: (state, action) =>{
          if(action.payload == 'open'){
            state.showLinks = true;
          }else{
            state.showLinks = false;
          }
            
        }

    }
})

export const utilReducer = utilsSlice.reducer;
export const { checke , checke2, changeColor, showLink, showModa , hideModa , showModal, hideModal} = utilsSlice.actions;