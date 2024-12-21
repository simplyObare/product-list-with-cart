import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: number
  name: string
  category: string
  price: number
  quantity: number
  image: string
}

const initialState = {
  items: [] as CartItem[],
  orderConfirmed: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1
      } else {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          category: action.payload.category,
          price: action.payload.price,
          quantity: 1,
          image: action.payload.image,
        })
      }
    },
    changeQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex >= 0) {
        if (action.payload.quantity === 0) {
          state.items.splice(itemIndex, 1)
        } else {
          state.items[itemIndex].quantity = action.payload.quantity
        }
      }
    },

    removeFromCart(state, action: PayloadAction<number>) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      )
      if (itemIndex >= 0) {
        state.items.splice(itemIndex, 1)
      }
    },

    toggleOrderConfirmed(state) {
      state.orderConfirmed = !state.orderConfirmed
    },
  },
})

export const {
  addToCart,
  changeQuantity,
  removeFromCart,
  toggleOrderConfirmed,
} = cartSlice.actions

export default cartSlice.reducer
