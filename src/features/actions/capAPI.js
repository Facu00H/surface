import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import api from "../../api";


const capApi = createApi({
    reducerPath: 'capApi',

    baseQuery: fetchBaseQuery({
        baseUrl: api
    }),

    endpoints: (builder) => ({
        readAll: builder.query({
            query: () => 'caps/'
        }),

        readCap: builder.query({
            query: (id) => `caps/${id}`
        }),

        newCap: builder.mutation({
            query: (capNew) => ({
                url: 'caps/',
                method: 'POST',
                body: capNew
            })
        }),

        removeCap: builder.mutation({
            query: (capRemove) => ({
                url: 'caps/:id',
                method: 'DELETE',
                body: capRemove
            }),

        }),
        updateCap: builder.mutation({
            query: (capUpdate) => ({
                url: 'caps/:id',
                method: 'PATCH',
                body: capUpdate
            })
        }),

    })

})

export default capApi
export const { useReadAllQuery, useReadCapQuery, useNewCapMutation, useRemoveCapMutation, useUpdateCapMutation } = capApi