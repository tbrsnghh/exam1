import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chemicals: [
    { id: 1, name: "Hydrochloric Acid", formula: "HCl" },
    { id: 2, name: "Sodium Chloride", formula: "NaCl" },
    { id: 3, name: "Sulfuric Acid", formula: "H2SO4" },
    { id: 4, name: "Ammonia", formula: "NH3" },
    { id: 5, name: "Ethanol", formula: "C2H5OH" },
  ],
  id: 5,
};
const chemicalsSlice = createSlice({
  name: "chemicals",
  initialState,
  reducers: {
    deleteChemical(state, action){
        state.chemicals=state.chemicals.filter(item=>item.id !== action.payload)
    },
    addChemical(state, action){
        state.chemicals=[...state.chemicals, action.payload]
    },
    searchChe(state, action){
      state.chemicals.find(action.payload)
    }
  },
});
export const {deleteChemical, addChemical, searchChe} = chemicalsSlice.actions;
export default chemicalsSlice.reducer;
