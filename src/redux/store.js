import {configureStore} from '@reduxjs/toolkit';
import  CounterReducer  from './Reducer';

export const store = configureStore({
    reducer:{
        counter:CounterReducer,
    }
})