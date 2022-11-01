import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  message: "",
};

const url = process.env.REACT_APP_BACK_BASE_URL;

//좋아요 patch
export const __patchheart = createAsyncThunk(
  "heart",
  async (payload, thunkAPI) => {
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
  }
);

const heartSlice = createSlice({
  name: "heart",
  initialState,
  reducer: {},
  extraReducers: {
    [__patchheart.fulfilled]: (state, action) => {
      state.message = action.payload;
      console.log(state.message);
    },
    [__patchheart.rejected]: (state, action) => {
      state.isLoading = true;
      alert(action.payload);
    },
  },
});

export default heartSlice.reducer;
