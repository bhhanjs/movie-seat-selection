import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    seatsCount: 0,
    seatsSelected: [],
  },

  table: {
    isActive: false,
  },
};

const seatsSlice = createSlice({
  name: "seats",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      console.log(action.payload);
      state.user.name = action.payload.name;
      state.user.seatsCount = action.payload.seatsCount;
      state.user.seatsSelected = [];
    },

    addSelectedSeat: (state, action) => {
      console.log(state.user.seatsSelected);
      if (state.user.seatsSelected.length < state.user.seatsCount) {
        console.log(action.payload);
        state.user.seatsSelected.push(action.payload);
      }
    },

    removeSelectedSeat: (state, action) => {
      if (state.user.seatsSelected.includes(action.payload)) {
        state.user.seatsSelected = state.user.seatsSelected.filter(
          (id) => id !== action.payload
        );
      }
    },

    activeTable: (state) => {
      console.log(state.table.isActive);
      state.table.isActive = true;
    },
  },
});

export const { setUserInfo, activeTable, addSelectedSeat, removeSelectedSeat } =
  seatsSlice.actions;
export default seatsSlice.reducer;
