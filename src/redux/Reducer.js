import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count:0,
    data: JSON.parse(localStorage.getItem('data'))  ||  []
};

export const counterReducer = createSlice({
    name:'counter',
    initialState,
    reducers:{
        incriment:(state)=>{
            state.count +=1
        },
        decriment:(state)=>{
            state.count -=1
        },
        anmount:(state,action)=>{
            state.count += action.payload
        },
        ////////////////////////////////
        addData:(state,action)=>{
            localStorage.setItem('data',JSON.stringify(state.data=[...state.data,{...action.payload,id:new Date().getTime()}]))
            state.data = JSON.parse(localStorage.getItem('data'))  || []
        },
        deletData:(state,action)=>{
            localStorage.setItem('data',JSON.stringify(state.data= state.data.filter((val)=>val.id !== action.payload)))
            state.data = JSON.parse(localStorage.getItem('data'))  || []
        }
    }
})


export const anmountAsync =(state)=>(dispatch)=>{
   setTimeout(()=>{
       dispatch(anmount(state))
   },1000)
} 


export const {incriment,decriment,anmount,addData,deletData} = counterReducer.actions;

export default counterReducer.reducer;