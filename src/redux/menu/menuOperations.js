import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.get['Referer'] = 'https://blackgold.com.ua';

axios.defaults.baseURL = 'https://adm.blackgold.com.ua/api/';
// GET /
export const fetchMenu = createAsyncThunk(
  'menu/fetchMenu',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/categories');
      // console.log('fetchMenu:', res.data.data);
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
      // console.log('fetchMenuList: ', res.data.data);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
