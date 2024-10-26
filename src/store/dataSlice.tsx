import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  TGiftCard,
  TGiftsResponseType,
  TSaleResponseType
} from '../utils/types';
import { getGiftCards, postOrder } from '../utils/api';

export type TCGiftsState = {
  gifts: TGiftCard[];
  loader: boolean;
  error?: string;
  saleInfo: TSaleResponseType;
};

export const initialState: TCGiftsState = {
  gifts: [],
  loader: false,
  error: undefined,
  saleInfo: {
    ID: '',
    TABLENAME: '',
    PRIMARYKEY: '',
    PRICE: '',
    SUMMA: '',
    CLIENTNAME: '',
    PHONE: '',
    EMAIL: '',
    PAYMENTTYPEID: 2,
    USEDELIVERY: 0,
    DELIVERYADDRESS: null,
    ISGIFT: 0,
    MSGTEXT: null,
    PNAME: null,
    PPHONE: null
  }
};

export const getGiftsThunk = createAsyncThunk('gifts/get', async () => {
  try {
    const gifts = await getGiftCards();
    return gifts;
  } catch (err) {
    throw err;
  }
});

export const postOrderThunk = createAsyncThunk(
  'order/post',
  async (data: TSaleResponseType) => {
    try {
      const order = await postOrder(data);
    } catch (err) {
      throw err;
    }
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addGiftToOrder: (state, action: PayloadAction<{ id: string }>) => {
      const chosen = state.gifts.find((g) => g.ID === action.payload.id);
      if (chosen) {
        state.saleInfo = {
          ...state.saleInfo,
          ID: chosen.ID,
          TABLENAME: chosen.TABLENAME,
          PRIMARYKEY: chosen.PRIMARYKEY,
          PRICE: chosen.PRICE,
          SUMMA: chosen.SUMMA
        };
      }
    },
    addClientInfoToOrder: (
      state,
      action: PayloadAction<{
        ClientName: string;
        Phone: string;
        Email: string;
      }>
    ) => {
      state.saleInfo = {
        ...state.saleInfo,
        CLIENTNAME: action.payload.ClientName,
        PHONE: action.payload.Phone,
        EMAIL: action.payload.Email
      };
    }
  },
  selectors: {
    getGiftsSelector: (state) => state.gifts,
    getLoaderSelector: (state) => state.loader,
    getErrorSelector: (state) => state.error,
    getOrderInfoSelector: (state) => state.saleInfo
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGiftsThunk.pending, (state) => {
        state.loader = true;
        state.error = undefined;
      })
      .addCase(getGiftsThunk.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(
        getGiftsThunk.fulfilled,
        (state, action: PayloadAction<TGiftsResponseType>) => {
          state.loader = false;
          state.gifts = action.payload.data.data;
          console.log(typeof state.gifts[0].ID);
        }
      )
      .addCase(postOrderThunk.pending, (state) => {
        state.loader = true;
        state.error = undefined;
      })
      .addCase(postOrderThunk.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(postOrderThunk.fulfilled, (state, action) => {
        state.loader = false;
        state.saleInfo = initialState.saleInfo;
      });
  }
});

export const dataReducer = dataSlice.reducer;
export const { addGiftToOrder, addClientInfoToOrder } = dataSlice.actions;
export const {
  getGiftsSelector,
  getLoaderSelector,
  getOrderInfoSelector,
  getErrorSelector
} = dataSlice.selectors;
