import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  message: "",
};

const url = process.env.REACT_APP_BACK_BASE_URL;

//카트 patch
export const __patchcart = createAsyncThunk(
  "cart",
  async (payload, thunkAPI) => {
    const token = localStorage.getItem("token");
    console.log(payload);
    try {
      const { data } = await axios.post(
        `${url}/feature/likes/${payload}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error.response.data.error);
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducer: {},
  extraReducers: {
    [__patchcart.fulfilled]: (state, action) => {
      state.message = action.payload;
    },
    [__patchcart.rejected]: (state, action) => {
      state.isLoading = true;
      alert(action.payload);
    },
  },
});

export default cartSlice.reducer;
