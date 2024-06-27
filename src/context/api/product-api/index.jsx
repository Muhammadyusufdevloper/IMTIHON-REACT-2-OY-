import { api } from '../index'

export const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
            query: (params) => ({
                url: '/products',
                params
            }),
            providesTags: ["Product"]
        }),
        getProductsCategory: build.query({
            query: (params) => ({
                url: `/products${params.category}`,
                params: {
                    limit: params.limit
                }
            }),
            providesTags: ["Product"]
        }),
        getProductsId: build.query({
            query: ({ id }) => ({
                url: `/products/${id}`,
            }),
            providesTags: ["Product"]
        }),
        getCategory: build.query({
            query: (params) => ({
                url: '/products/categories',
                params
            }),
            providesTags: ["Product"]
        }),
        getProductsSearch: build.query({
            query: ({ search }) => ({
                url: `/products/search?q=${search}`,
            }),
            providesTags: ["Product"]
        }),
        getProductById: build.query({
            query: (id) => ({
                url: `/products/${id}`
            }),
            providesTags: ["Product"]
        }),
        createProduct: build.mutation({
            query: (body) => ({
                url: "/products",
                method: "POST",
                body
            }),
            invalidatesTags: ["Product"]
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Product"]
        }),
        updateProduct: build.mutation({
            query: ({ id, body }) => ({
                url: `/products/${id}`,
                method: "PUT", // or "PATCH"
                body
            }),
            invalidatesTags: ["Product"]
        })
    }),
})

export const {
    useGetProductsQuery,
    useCreateProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation,
    useGetProductsSearchQuery,
    useGetCategoryQuery,
    useGetProductsCategoryQuery,
    useGetProductByIdQuery,
} = productApi