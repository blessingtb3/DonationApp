import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';//simple asyncronous and persistent key value storage system that is global to the app.
//it is used to store data to persist even if the app is closed
import { persistReducer, persistStore } from 'redux-persist';
import User from "./reducers/User";
import { logger } from 'redux-logger';


const rootReducer = combineReducers({
    user: User,
});


//confuguration for persistance storing 
const configuration = {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
}//confuguration for persistance storing 



const persistedReducer = persistReducer(configuration, rootReducer);//passing in the configuration and the rootReducer for persisting



//takes an object as an argument where you can specify the initial state of your application
const store = configureStore({
    // reducer: rootReducer, stores temp
    reducer: persistedReducer,//stores perm


    // middleware to return logs of your application, you can use it to track state, bugs and errors
    middleware: getDefaultMidddleware => {
        return getDefaultMidddleware({
            serializableCheck: false,
        }).concat(logger);
    },
});

export default store;
export const persistor = persistStore(store);

//this root reducer will be used to tie the other reducers to our screen