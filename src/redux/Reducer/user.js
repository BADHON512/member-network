import { createReducer } from "@reduxjs/toolkit"


const initialState={
    isAuthenticate:false
}

export const UserReducer=createReducer(initialState,{

    UserRequest:(state)=>{
        state.loading=false
     
    },
    UserSuccess:(state,action)=>{
        state.isAuthenticate=true
        state.loading=false
        state.user=action.payload
     
    },
    UserFail:(state,action)=>{
        state.isAuthenticate=false
        state.loading=false
        state.user=action.payload
     
    },
})