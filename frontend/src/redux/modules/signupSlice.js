import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
  message: "",
};

const url = process.env.REACT_APP_BACK_BASE_URL;

//회원가입
export const __signUp = createAsyncThunk(
  "signUp",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(`${url}/users/signUp`, payload, {
        headers: { "Content-Type": `application/json` },
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//ID 중복체크
export const __idDupCheck = createAsyncThunk(
  "idDupCheck",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await axios.post(`${url}/users/checkId`, payload, {
        headers: { "Content-Type": `application/json` },
      });
      console.log(data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error.response.data.error);
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducer: {},
  extraReducers: {
    [__signUp.fulfilled]: (state, action) => {
      alert(action.payload);
    },
    [__signUp.rejected]: (state, action) => {
      state.isLoading = true;
      alert(action.error);
    },
    [__idDupCheck.fulfilled]: (state, action) => {
      alert(action.payload);
    },
    [__idDupCheck.rejected]: (state, action) => {
      alert(action.error);
    },
  },
});

export default signupSlice.reducer;
