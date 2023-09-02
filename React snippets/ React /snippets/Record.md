 Redux  toolkit steps
  create store and add reducers
  create  reducer with state and action

 1) npm install @reduxjs/toolkit react-redux

 2) create folder redux--> store.js
     import { configureStore } from '@reduxjs/toolkit'
     export const store = configureStore({
     reducer: {},})

 3)  Index.js
     import { store } from './app/store'
import { Provider } from 'react-redux'
  <Provider store={store}>
    <App />
  </Provider>

  4) create folder redux--> reducer.js

    import { createReducer } from '@reduxjs/toolkit'
     export const firstReducer=  creatcreateReducer({},{})  // initalState , reducer
            
              OR reatcreateReducer({ intialState:[] },{ first: (state,type)=>{} })
       Example        
       export const coinsReducer = createReducer(
    { coin: [] }, {
    coins: (state, action) => {
        state.coin.push("coin")
        console.log(action.payload);
}, 
exchange: (state, action) => { state.coin = action.payload; }
})


 5) store.js --> import {firstReducer} from "./ reducer.js"

  export const store = configureStore({
     reducer: {
          first:firstReducer       // action.type
                                    <!-- firstReducer/* action trigger by dispatch -->
                                    },})


   6)   HOme.jsx add button and event handler on that button { handleClick} 
       import {useDispatch} from "react-redux";
     const dispatch= useDispatch()
    const handleClick=()=>{
         <!-- dispatch({type:"" ,payload:""})     // type is action type -->
         dispatch({type:" firstReducer " ,payload:""})
    }
    ocnst handleClick = () => {
        dispatch(
            { type: "coins", payload: "ttttt" },  
            // action.type used to trigger reducer to change state

            // action.payload use to send data to state
        )
    }

    7) to access state in other compoent use hook { useSelector}
    import { useSelector } from 'react-redux'
        const { coin } = useSelector((state) => state.first)


        // slices contain ( action and reducer)