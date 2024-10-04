// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
//   total: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       // Check if item in cart
//       const duplicate = state.cartItems.find(
//         (product) => product.id === action.payload.id
//       );
//       if (duplicate) {
//         const new_cart = state.cartItems.map((product) => {
//           if (product.id === action.payload.id) {
//             return { ...product, quantity: action.payload.quantity };
//           }
//           return product;
//         });
//         state.cartItems = new_cart;
//         localStorage.setItem("cartItems", JSON.stringify(new_cart));
//       } else {
//         const new_cart = [...state.cartItems, action.payload];
//         state.cartItems = new_cart;
//         localStorage.setItem("cartItems", JSON.stringify(new_cart));
//       }
//     },
//     removeFromCart(state, action) {
//       const new_cart = state.cartItems.filter(
//         (item) => item.id !== action.payload
//       );
//       state.cartItems = new_cart;
//       localStorage.setItem("cartItems", JSON.stringify(new_cart));
//     },
//     changeQuantity(state, action) {
//       const new_cart = state.cartItems.map((product) => {
//         if (product.id === action.payload.id) {
//           return { ...product, quantity: action.payload.quantity };
//         }
//         return product;
//       });
//       state.cartItems = new_cart;
//       localStorage.setItem("cartItems", JSON.stringify(new_cart));
//     },
//     getTotal(state) {
//       state.total = state.cartItems.reduce((acc, product) => {
//         if (product.discont_price) {
//           return acc + product.discont_price * product.quantity;
//         }
//         return acc + product.price * product.quantity;
//       }, 0);
//     },
//     emptyCart(state) {
//       state.total = 0;
//       state.cartItems = [];
//       localStorage.setItem("cartItems", JSON.stringify([]));
//     },
//   },
// });

// export default cartSlice.reducer;
// export const {
//   addToCart,
//   removeFromCart,
//   changeQuantity,
//   getTotal,
//   emptyCart,
// } = cartSlice.actions;
