import { createStore } from "redux";
import { appointmentReducer } from "./appointmentReducer";

export const store = createStore(appointmentReducer);