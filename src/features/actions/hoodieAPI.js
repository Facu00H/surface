import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const hoodie = createApi ({
    reducerPath:"hoodieApi",

    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:4000/'
    }),

    endpoints: builder => ({
        GetHoodie: builder.query({
            query: (params) => `buzos/${params}`
        })
    }),

})

export default hoodie
export const { useGetHoodieQuery } = hoodie