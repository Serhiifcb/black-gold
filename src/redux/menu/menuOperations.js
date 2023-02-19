import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://adm.blackgold.com.ua/api/';

export const fetchMenu = createAsyncThunk(
  'menu/fetchMenu',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/categories');
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMenuList = createAsyncThunk(
  'menu/fetchMenuList',
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/product_category/${id}`);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
