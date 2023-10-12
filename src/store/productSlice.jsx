import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const STATUSES = Object.freeze({
	IDLE: "idle",
	ERROR: "error",
	LOADING: "Loading",
});
const productSlice = createSlice({
	name: "product",
	initialState: {
		data: [],
		status: STATUSES.IDLE,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.status = STATUSES.LOADING;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.data = action.payload;
				state.status = STATUSES.IDLE;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = STATUSES.ERROR;
			});
	},
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

const apiUrl = "http://3.7.252.58:4001/product/getAllProduct";

export const fetchProducts = createAsyncThunk(
	"products/fetchData",
	async () => {
		try {
			const response = await fetch(apiUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Cookie:
						"connect.sid=s%253AC9UlQ9M1W1aslddIqBNrrk68Yx4GleaF.OyLqPkC%252FpbJKf070EG6KIJoS70bHaP5GOYXB...",
				},
				body: JSON.stringify({
					limit: 100,
					page: 0,
					search: "",
				}),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await response.json();
			return data;
		} catch (error) {
			throw error;
		}
	}
);
