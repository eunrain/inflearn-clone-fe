import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  message: "",
};

const url = process.env.REACT_APP_BACK_BASE_URL;

//카테고리 별 조회
export const __getCategory = createAsyncThunk(
  "getCategory",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${url}/posts/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//stack get
export const __getStack = createAsyncThunk("tag", async (payload, thunkAPI) => {
  console.log(payload);
  try {
    const { data } = await axios.get(
      `${url}/posts/${payload.category}/${payload.stack}`,
      payload,
      {
        headers: { "Content-Type": `application/json` },
      }
    );
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
});

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducer: {},
  extraReducers: {
    //category
    [__getCategory.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [__getCategory.rejected]: (state, action) => {
      alert(action.payload);
    },
    //stack
    [__getStack.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [__getStack.rejected]: (state, action) => {
      state.isLoading = true;
      alert(action.payload);
    },
  },
});

export default categorySlice.reducer;
