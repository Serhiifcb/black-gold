import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.get['Referer'] = 'https://blackgold.com.ua';

axios.defaults.baseURL =
  'https://blackgold.com.ua/_next/data/OEdtlbtsb1fdQKhenkB9B/';
// GET /
export const fetchKitchenMenu = createAsyncThunk(
  'menu/fetchKitchenMenu',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/menyu-kuhni.json');
      console.log(res.data);
      return res.data.pageProps.allProducts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
