import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Signin as Login, loginSchema } from "@/types/user";
import { useLoginMutation } from "../loginApiSlice";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../loginSelector";
import { Loader } from "lucide-react";

function Signin() {
  const [loginMutation, loginResult] = useLoginMutation();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  const methods = useForm<Login>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit = () => {
    loginMutation(methods.getValues());
  };

  useLayoutEffect(() => {
    if (!token) return;
    navigate("/protected");
  }, [token]);

  return (
    <Card className="w-[350px] mx-auto">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Connect to your Library paltform by one Click.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...methods}>
          <form onSubmit={methods.handleSubmit(submit)}>
            <div className="grid w-full items-center gap-4">
              <FormField
                control={methods.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={methods.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="********"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-2 items-center">
              {loginResult?.isLoading && <Loader className="animate-spin" />}
              <Button type="submit" className="mt-2">
                Sign In
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default Signin;
