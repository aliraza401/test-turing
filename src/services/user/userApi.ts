import { AuthStore, setAuth } from "../../redux/slice";
import { rtkApi } from "../rtk";

export const userApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthStore, { username: string; password: string }>({
      query: (data) => ({ url: "/auth/login", method: "post", data }),
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        queryFulfilled.then((response) => dispatch(setAuth(response.data)));
      },
    }),
  }),
});

export const { useLoginMutation } = userApi;
