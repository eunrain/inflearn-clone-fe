import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  message: "",
};

const url = process.env.REACT_APP_BACK_BASE_URL;

//로그인
export const __login = createAsyncThunk("login", async (payload, thunkAPI) => {
  try {
    const { data } = await axios.post(`${url}/users/login`, payload, {
      headers: { "Content-Type": `application/json` },
    });

    const { token } = await data;
    const { loginId } = await data;

    const localSet = window.localStorage;

    localSet.setItem("token", token);
    localSet.setItem("loginId", loginId);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
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
      state.isLoading = true;
      alert(action.payload);
    },
  },
});

export default loginSlice.reducer;
