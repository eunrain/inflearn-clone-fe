import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  message: "",
  data: [],
};

const url = process.env.REACT_APP_BACK_BASE_URL;

//좋아요 post
export const __patchheart = createAsyncThunk(
  "getheart",
  async (payload, thunkAPI) => {
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      const { data } = await axios.post(
        `${url}/feature/likes/${payload}`,
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

export const __getHeart = createAsyncThunk(
  "heart",
  async (payload, thunkAPI) => {
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      const { data } = await axios.get(`${url}/users/likes`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
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
    },
    [__patchheart.rejected]: (state, action) => {
      state.isLoading = true;
      alert(action.payload);
    },
    [__getHeart.fulfilled]: (state, action) => {
      state.data = action.payload;
      console.log(state.data);
    },
    [__getHeart.rejected]: (state, action) => {
      state.isLoading = true;
      alert(action.payload);
    },
  },
});

export default heartSlice.reducer;
