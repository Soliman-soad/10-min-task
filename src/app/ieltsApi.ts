import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ieltsApi = createApi({
  reducerPath: 'ieltsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.10minuteschool.com/discovery-service/api/v1/products/' }),
  endpoints: (builder) => ({
    getIeltsCourse: builder.query<any, { lang?: string }>({
      query: ({ lang = 'en' } = {}) => ({
        url: 'ielts-course',
        params: { lang },
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetIeltsCourseQuery } = ieltsApi; 