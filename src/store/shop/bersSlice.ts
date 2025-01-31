import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';
import { Product } from '../../utils/commonLists.ts';

export const shopMyBookSelector = (state: RootState): ShopState => state.shop;

export interface ShopState {
  totalCount: number;
  itemBasket: { product: Product; quantity: number }[];
  items: Product[];
}

const initialState: ShopState = {
  totalCount: 0,
  itemBasket: [],
  items: [],
};

const bersSlice = createSlice({
  name: 'shopMyBook',
  initialState,
  reducers: {
    resetProductToBasketBers: (state) => {
      state.itemBasket = [];
      state.totalCount = 0;
    },
    addProductToBasketBers: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.itemBasket.find(
        (item) => item.product.id === action.payload.id
      );

      if (existingProduct) {
        // Если продукт уже в корзине, увеличиваем количество
        existingProduct.quantity += 1;
      } else {
        // Если продукта нет в корзине, добавляем его
        state.itemBasket.push({ product: action.payload, quantity: 1 });
      }

      // Пересчитываем общую сумму
      state.totalCount += action.payload.price;
    },
    decreaseProductQuantityBers: (state, action: PayloadAction<number>) => {
      const product = state.itemBasket.find(
        (item) => item.product.id === action.payload
      );

      if (product) {
        product.quantity -= 1;
        state.totalCount -= product.product.price;

        // Если количество продукта достигает 0, удаляем его
        if (product.quantity <= 0) {
          state.itemBasket = state.itemBasket.filter(
            (item) => item.product.id !== action.payload
          );
        }
      }
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const productIndex = state.itemBasket.findIndex(
        (item) => item.product.id === productId
      );

      if (productIndex !== -1) {
        // Уменьшаем общую сумму на стоимость удаляемого продукта
        state.totalCount -=
          state.itemBasket[productIndex].product.price *
          state.itemBasket[productIndex].quantity;

        // Удаляем продукт из корзины
        state.itemBasket.splice(productIndex, 1);
      }
    },
    visibleItemsBers: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
  },
});

export const shopSliceReducer = bersSlice.reducer;
export const {
  addProductToBasketBers,
  resetProductToBasketBers,
  decreaseProductQuantityBers,
  removeProductFromCart,
  visibleItemsBers,
} = bersSlice.actions;
