import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  message: "",
};

const url = process.env.REACT_APP_BACK_BASE_URL;

//카드 버튼
export const __cart = createAsyncThunk("cart", async (payload, thunkAPI) => {
  const token = localStorage.getItem("token");
  console.log(payload);
  try {
    const { data } = await axios.patch(
      `https://qkero407.shop/feature/likes/${payload}`,
      payload,
      {
        headers: { "Content-Type": `application/json` },
        Authorization: `Bearer ${token}`,
      }
    );
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    console.log(error.response.data.error);
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducer: {},
  extraReducers: {
    [__cart.fulfilled]: (state, action) => {
      state.message = action.payload;
      console.log(state.message);
    },
    [__cart.rejected]: (state, action) => {
      state.isLoading = true;
      alert(action.payload);
    },
  },
});

export default cartSlice.reducer;
