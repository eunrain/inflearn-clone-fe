import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  message: "",
};

const url = process.env.REACT_APP_BACK_BASE_URL;

//카트 post
export const __postCart = createAsyncThunk(
  "postcart",
  async (payload, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.post(
        `${url}/feature/buckets/${payload}`,
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

//카트 get
export const __getCart = createAsyncThunk(
  "getCart",
  async (payload, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.get(`${url}/users/buckets`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducer: {},
  extraReducers: {
    [__postCart.fulfilled]: (state, action) => {
      state.message = action.payload;
    },
    [__postCart.rejected]: (state, action) => {
      alert(action.payload);
    },
    [__getCart.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [__getCart.rejected]: (state, action) => {
      alert(action.payload);
    },
  },
});

export default cartSlice.reducer;
