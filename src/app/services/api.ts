import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://jsonplaceholder.typicode.com/";

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}`, // Указываем базовый URL
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});