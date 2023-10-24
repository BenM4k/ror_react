import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

const greetingsAdapter = createEntityAdapter();

const initialState = greetingsAdapter.getInitialState();

export const greetingSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGreetings: builder.query({
      query: () => '/greeting',
      transformResponse: (resp) => greetingsAdapter.setAll(initialState, resp),
      providesTags: (result, error, arg) => [
        { type: 'greet', id: 'LIST' },
        ...result?.ids?.map((id) => ({ type: 'greet', id })),
      ],
    }),
  }),
});

export const { useGetGreetingsQuery } = greetingSlice;

export const selectGreetingsResult = greetingSlice.endpoints.getGreetings.select();

const selectGreetsData = createSelector(
  selectGreetingsResult,
  (greetingsResult) => greetingsResult.data,
);

export const { selectAll: selectAllGreetings } = greetingsAdapter.getSelectors((state) => selectGreetsData(state) ?? initialState);
