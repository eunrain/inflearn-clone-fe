import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import thunk from "redux-thunk";

const initialState = {
  isLoading: false,
  error: null,
  message: "",
};

const url = process.env.REACT_APP_BACK_BASE_URL;

//로그인
export const __login = createAsyncThunk("login", async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post(
      "https://qkero407.shop/users/login",
      payload,
      {
        headers: { "Content-Type": `application/json` },
      }
    );
    console.log(data);
    const { token } = await data;
    const { loginId } = await data.meta.arg;
    console.log(loginId);
    const localSet = window.localStorage;
    localSet.setItem("token", token);

    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    console.log(error.response.data.error);
    return thunkAPI.rejectWithValue(error.response.data.error);
  }
});

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducer: {},
  extraReducers: {
    [__login.fulfilled]: (state, action) => {
      alert("로그인에 성공하였습니다.");
    },
    [__login.rejected]: (state, action) => {
      console.log(action.payload);
      state.isLoading = true;
      alert(action.payload);
    },
  },
});

export default loginSlice.reducer;