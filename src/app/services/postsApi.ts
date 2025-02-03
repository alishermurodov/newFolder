import { api } from "./api";


export const postsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: ({ page = 1, limit = 15 }) => ({
                url: `posts?_page=${page}&_limit=${limit}`,
                method: 'GET',
            }),
        }),
        getUsers: builder.query({
            query: () => ({
                url: "users",
                method: 'GET',
            }),
        }),
    }),
})

export const {
    useGetPostsQuery,
    useGetUsersQuery,
} = postsApi


