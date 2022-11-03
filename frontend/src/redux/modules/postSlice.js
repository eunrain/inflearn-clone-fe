import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  stack: [],
};

const url = process.env.REACT_APP_BACK_BASE_URL;

//메인페이지 포스트카드 불러오기
export const __getPostCard = createAsyncThunk(
  "getPostCard",
  async (payload, thunkAPI) => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const { data } = await axios.get(`${url}/posts`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        return thunkAPI.fulfillWithValue(data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    } else {
      try {
        const { data } = await axios.get(`${url}/posts`);
        return thunkAPI.fulfillWithValue(data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducer: {},
  extraReducers: {
    // 메인페이지 포스트 카드 get
    [__getPostCard.fulfilled]: (state, action) => {
      state.data = action.payload.postdata;
      state.stack = action.payload.stack;
    },
    [__getPostCard.rejected]: (state, action) => {
      alert(action.payload);
    },
  },
});
export default postSlice.reducer;
