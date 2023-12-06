import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carModels: [
    {
      id: "m1",
      car_name: "Audi A1",
      car_rent: "$45",
      car_model: "Audi",
      car_type: "Manual",
      car_seat: "4/5",
      car_fuel: "Diesel",
    },
    {
      id: "m2",
      car_name: "Golf 6",
      car_rent: "$37",
      car_model: "VW",
      car_type: "Manual",
      car_seat: "4/5",
      car_fuel: "Diesel",
    },
    {
      id: "m3",
      car_name: "Toyota",
      car_rent: "$30",
      car_model: "Camry",
      car_type: "Manual",
      car_seat: "4/5",
      car_fuel: "Diesel",
    },
    {
      id: "m4",
      car_name: "BMW 320",
      car_rent: "$35",
      car_model: "ModernLine",
      car_type: "Manual",
      car_seat: "4/5",
      car_fuel: "Diesel",
    },
    {
      id: "m5",
      car_name: "Mercedes",
      car_rent: "$50",
      car_model: "Benz",
      car_type: "Manual",
      car_seat: "4/5",
      car_fuel: "Diesel",
    },
    {
      id: "m6",
      car_name: "VW Passat ",
      car_rent: "$25",
      car_model: "CC",
      car_type: "Manual",
      car_seat: "4/5",
      car_fuel: "Diesel",
    },
  ],
};

export const modelSlice = createSlice({
  name: "carModels",
  initialState,
});

export default modelSlice.reducer;
