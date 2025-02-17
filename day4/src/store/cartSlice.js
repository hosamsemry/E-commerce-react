import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState={
    cart:[],
}

export const addToCartAction = createAsyncThunk("cart/addToCartAction", async(product, {rejectWithValue}) => {
    try {
        return product;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const removeFromCartAction = createAsyncThunk("cart/removeFromCartAction", async(product, {rejectWithValue}) => {
    try {
        return product;
    } catch (error) {
        return rejectWithValue(error);
    }
})

export const decreaseQuantityAction = createAsyncThunk("cart/decreaseQuantityAction",async ({ id, quantity }, { rejectWithValue }) => {
      if (quantity <= 1) {
        return { id, quantity: 0 };
    }
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ quantity: quantity - 1 }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to update quantity");
        }
  
        return { id, quantity: quantity - 1 };
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

export const increaseQuantityAction = createAsyncThunk("cart/increaseQuantityAction", async ({ id, quantity }, { rejectWithValue }) => {
  try {
    const response = await fetch(`http://localhost:3001/products/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: quantity + 1 }),
    });

    if (!response.ok) {
        throw new Error("Failed to update quantity");
    }

    return { id, quantity: quantity + 1 };
  } catch (error) {
      return rejectWithValue(error.message);
}
})
   

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cart.find((p) => p.id === action.payload.id);
            if (existingProduct) {
              existingProduct.quantity += 1;  
            } else {
              state.cart.push({ ...action.payload, quantity: 1 });  
            }
          },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload.id);
        },
        decreaseQuantity: (state, action) => {
            const product = state.cart.find((p) => p.id === action.payload.id);
            if (product && product.quantity > 1) {
            product.quantity -= 1;
            } else {
            state.cart = state.cart.filter((product) => product.id !== action.payload.id);
            }
        }
        },
        extraReducers: (builder) => {
            builder.addCase(addToCartAction.fulfilled, (state, action) => {
                const existingProduct = state.cart.find((p) => p.id === action.payload.id);
                if (existingProduct) {
                  existingProduct.quantity += 1;
                } else {
                  state.cart.push({ ...action.payload, quantity: 1 });
                }
              });
            builder.addCase(removeFromCartAction.fulfilled, (state, action) => {
                state.cart = state.cart.filter((product) => product.id !== action.payload.id);
            });
            
            builder.addCase(decreaseQuantityAction.fulfilled, (state, action) => {
                const product = state.cart.find((p) => p.id === action.payload.id);
                if (product) {
                product.quantity = action.payload.quantity;
                if (product.quantity === 0) {
                    state.cart = state.cart.filter((p) => p.id !== action.payload.id);
                }
                }
          });
          builder.addCase(increaseQuantityAction.fulfilled, (state, action) => {
                const product = state.cart.find((p) => p.id === action.payload.id);
                if (product) {
                    product.quantity = action.payload.quantity;
                }
            })

    },
})

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;