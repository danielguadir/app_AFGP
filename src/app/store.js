import{configureStore} from "@reduxjs/toolkit";
import productoresReducer from "../features/producers/producersSlice";

export const store = configureStore({
    reducer: {
        productores: productoresReducer,
    },
});
