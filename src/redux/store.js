import { configureStore} from "@reduxjs/toolkit";
import contactsReducer from "./reducer";
import  authReducer from './auth/authReducer.js';


export const store =  configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsReducer,
    },
});



