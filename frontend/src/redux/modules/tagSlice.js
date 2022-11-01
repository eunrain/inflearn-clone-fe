import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  message: "",
};

const url = process.env.REACT_APP_BACK_BASE_URL;

//로그인
export const __tag = createAsyncThunk("tag", async (payload, thunkAPI) => {
  try {
    const { data } = await axios.get(
      `https://qkero407.shop/posts/${}/${payload}`,
      payload,
      {
        headers: { "Content-Type": `application/json` },
      }
    );

    const { token } = await data;
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    console.log(error.response.data.error);
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
});

const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducer: {},
  extraReducers: {
    [__tag.fulfilled]: (state, action) => {},
    [__tag.rejected]: (state, action) => {
      console.log(action.error);
      state.isLoading = true;
      alert(action.payload);
    },
  },
});

export default tagSlice.reducer;
