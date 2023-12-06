import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  carData: [
    {
      id: 1,
      car_name: "THAR",
      car_img: "THAR",
      car_details: {
        car_price: "$25",
        car_model: "THAR",
        car_year: 2022,
        car_ac: "Yes",
        car_sunroof: "No",
        fuel: "Diesel",
      },
    },
    {
      id: 2,
      car_name: "Harrier",
      car_img: "Harrier",
      car_details: {
        car_price: "$50",
        car_model: "Harrier",
        car_year: 2020,
        car_ac: "Yes",
        car_sunroof: "Yes",
        fuel: "Diesel",
      },
    },

    {
      id: 3,
      car_name: "Seltos",
      car_img: "Seltos",
      car_details: {
        car_price: "$25",
        car_model: "Seltos",
        car_year: 2023,
        car_ac: "Yes",
        car_sunroof: "Yes",
        fuel: "Petrol",
      },
    },
    {
      id: 4,
      car_name: "Carens",
      car_img: "Carens",
      car_details: {
        car_price: "$63",
        car_model: "Carens",
        car_year: 2023,
        car_ac: "Yes",
        car_sunroof: "Yes",
        fuel: "Petrol",
      },
    },
    {
      id: 5,
      car_name: "Hector",
      car_img: "hector",
      car_details: {
        car_price: "$55",
        car_model: "Hector",
        car_year: 2023,
        car_ac: "Yes",
        car_sunroof: "Yes",
        fuel: "Petrol",
      },
    },
    {
      id: 6,
      car_name: "Audi A1 S-Line",
      car_img: "audi_A1",
      car_details: {
        car_price: "$45",
        car_model: "Audi A1",
        car_year: 2012,
        car_ac: "Yes",
        car_sunroof: "Yes",
        fuel: "Petrol",
      },
    },
  ],
};

export const carSlice = createSlice({
  name: "carData",
  initialState,
  reducers: {
    addCar: () => {},
  },
});

export const { addCar } = carSlice.actions;

export default carSlice.reducer;
