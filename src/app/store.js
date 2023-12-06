import { configureStore, combineReducers } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";
import modelReducer from "../features/car/modelSlice";
import teamReducer from "../features/team/teamSlice";
const rootReducer = combineReducers({
  car: carReducer,
  model: modelReducer,
  team: teamReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
