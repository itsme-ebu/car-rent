import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  team: [
    {
      id: "CD1",
      name: "Briana Ross",
      role: "Photographer",
    },

    {
      id: "CD2",
      name: "Lauren Rivera ",
      role: "Car Detailist",
    },
    {
      id: "CD3",
      name: "Luke Miller",
      role: "Salesman",
    },

    {
      id: "CD4",
      name: "Martin Rizz",
      role: "Mechanic",
    },
    {
      id: "CD5",
      name: "Michael Diaz ",
      role: "Business Owner",
    },
    {
      id: "CD6",
      name: "Caitlyn Hunt ",
      role: "Menager",
    },
  ],
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
});

export default teamSlice.reducer;
