import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Data } from '../types/ielts';

export const ieltsApi = createApi({
  reducerPath: 'ieltsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.10minuteschool.com/discovery-service/api/v1/products/' }),
  endpoints: (builder) => ({
    getIeltsCourse: builder.query<Data, { lang?: string }>({
      query: ({ lang = 'en' } = {}) => ({
        url: 'ielts-course',
        params: { lang },
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetIeltsCourseQuery } = ieltsApi; 