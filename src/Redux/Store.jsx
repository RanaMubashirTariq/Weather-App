import { configureStore } from "@reduxjs/toolkit";
import { createWeatherApi } from "./ApiSlice";



export const Store = configureStore({
    reducer : {
      [createWeatherApi.reducerPath] : createWeatherApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createWeatherApi.middleware),
})