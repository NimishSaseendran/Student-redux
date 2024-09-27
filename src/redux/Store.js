import { configureStore } from "@reduxjs/toolkit";
import Studentslice from "./slice/Studentslice";

const studentStore = configureStore({
    reducer: {
        studentReducer: Studentslice,
    },
});

export default studentStore;
