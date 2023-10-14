import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { toast } from "@/components/ui/use-toast";
import { logOut } from "../features/authentication/loginSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers, { getState }: any) => {
    const token = getState().login.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  options: {}
) => {
  let result = await baseQuery(args, api, options);
  if (result?.error?.status === 401) {
    toast({
      title: "Token expired",
      description: "Try to login please",
    });
    api.dispatch(logOut());
  }

  return result;
};

export const apiSlice = createApi({
  keepUnusedDataFor: 1,
  reducerPath: "root/api",
  baseQuery: baseQueryReauth,
  endpoints: () => ({}),
  tagTypes: [],
});
