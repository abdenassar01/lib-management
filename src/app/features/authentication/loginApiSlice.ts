import { toast } from "@/components/ui/use-toast";
import { apiSlice } from "@/app/api/apiSlice";
import { setCredentials } from "./loginSlice";
import { Credentials, Signin } from "@/types/user";

export const loginApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<Credentials, Signin>({
      query: (credentials) => ({
        url: "/signin",
        method: "POST",
        body: { ...credentials },
      }),
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          const response = await queryFulfilled;
          toast({ title: "Connected with success" });
          dispatch(setCredentials(response?.data));
        } catch (err) {
          toast({
            title: "Invlaide credentials",
            description: "Email or Password are invalides",
          });
        }
      },
    }),
  }),
});

export const { useLoginMutation } = loginApiSlice;
