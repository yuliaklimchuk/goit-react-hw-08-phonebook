import { persistStore, persistReducer, FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore} from "@reduxjs/toolkit";
import contactsReducer from "./reducer";
import authReducer from './auth/authReducer.js';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

const store =  configureStore({
    reducer: {
        auth: persistReducer(persistConfig, authReducer),
        contacts: contactsReducer,
    },
    middleware: (getDefaultMiddleware) => {
        const ignoreActionsReduxToolKit = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
        return ignoreActionsReduxToolKit;
    }
});
const persistor = persistStore(store);

export const persistedStore = {
    store,
    persistor,
}

