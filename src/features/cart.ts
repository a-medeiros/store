import { createSlice } from '@reduxjs/toolkit';

import { ProductType } from '../utils/globalTypes';

export interface InitialStateProps {
  value: ProductType[] | [];
}

const initialState: InitialStateProps = {
  value: []
};

export const userCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getDataFromLocalStorage: (state, action) => {
      const { cart } = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.value = cart;
    },
    addToCart: (state, action) => {
      const { id, name, description, brand, photo, price, cart } =
        action.payload;

      // eslint-disable-next-line prefer-const
      let newProduct = {
        id,
        name,
        description,
        brand,
        photo,
        price,
        quantity: 1
      };

      if (cart.length > 0) {
        cart.forEach((item, index: number) => {
          if (item.id === id) {
            // eslint-disable-next-line no-param-reassign
            newProduct.quantity = item.quantity + 1;

            // eslint-disable-next-line prefer-const
            let updateCart = [...cart];
            updateCart.splice(index, 1, newProduct);
            localStorage.setItem('cart', JSON.stringify(updateCart));
            // eslint-disable-next-line no-param-reassign
            state.value = updateCart;
          } else {
            const updateCart = [...cart, newProduct];
            localStorage.setItem('cart', JSON.stringify(updateCart));
            // eslint-disable-next-line no-param-reassign
            state.value = updateCart;
          }
        });
      } else {
        const updateCart = [...cart, newProduct];

        localStorage.setItem('cart', JSON.stringify(updateCart));
        // eslint-disable-next-line no-param-reassign
        state.value = updateCart;
      }
    },
    removeFromCart: (state, action) => {
      const { cart, index } = action.payload;
      const updateCart = [...cart];
      updateCart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(updateCart));
      // eslint-disable-next-line no-param-reassign
      state.value = updateCart;
    },
    increment: (state, action) => {
      const { cart, index } = action.payload;
      cart[index].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(cart));
      // eslint-disable-next-line no-param-reassign
      state.value = cart;
    },
    decrement: (state, action) => {
      const { cart, index } = action.payload;
      cart[index].quantity -= 1;

      if (cart[index].quantity === 0) {
        const updateCart = [...cart];
        updateCart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(updateCart));
        // eslint-disable-next-line no-param-reassign
        state.value = updateCart;
      } else {
        localStorage.setItem('cart', JSON.stringify(cart));
        // eslint-disable-next-line no-param-reassign
        state.value = cart;
      }
    }
  }
});

export const {
  getDataFromLocalStorage,
  addToCart,
  removeFromCart,
  increment,
  decrement
} = userCart.actions;

export default userCart.reducer;
