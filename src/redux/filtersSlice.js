import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        filters: {
            name: ""
        }
    },
    reducers: {
        changeFilter: {
            reducer(state, action) {
                state.filters.name = action.payload;
            }
        }
    },
});

export const selectNameFilter = state => state.filters.filters.name
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;