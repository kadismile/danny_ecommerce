import {createSlice} from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    product: {},
  },
  reducers: {
    setProduct(state:any, action) {
      console.log("action ", action.payload)
      //const questionIndex = action.payload
      //state.questions[questionIndex] = {...state.questions[questionIndex], answeredCorrectly: true}
    },

    resetState(state: any) {
      state.product = 0;
    },
  },
});


export const { resetState, setProduct } = productSlice.actions;
export const selectProduct = (state: any) => state.products.products;



export default productSlice.reducer;
