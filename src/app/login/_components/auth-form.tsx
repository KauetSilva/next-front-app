"use client"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Image from "next/image";
import Bottom from "../../_components/bottom";
import { toast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { object, string } from 'zod';

const loginSchema = object({
  email: string().email(),
  password: string().min(6),
});

export function AuthForm() {
  const [error, setError] = useState(null);
  const form = useForm();
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    console.log('data', data)
    loginSchema.parse(data);
    try {
      const response = await fetch('http://localhost:8000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.token;
        toast({
          variant: "success",
          title: "Success",
          description: "Login with success",
        });
        Cookies.set("token", token, { expires: 1 });
        router.push("/dashboard");
      } else {
        console.log('oii')
        toast({
          variant: "destructive",
          title: "Error",
          description: "Login failed invalid credentials",
        });
        const responseData = await response.json();
        setError(responseData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <div className="w-1/2 h-screen bg-[#F6F7EB] text-[#2C2A4A] flex items-center justify-center">
          <Image
            src="/caixa2.png"
            alt="Image"
            width={300}
            height={300}
            className="max-w-full max-h-full"
          />
        </div>
        <div className="w-1/2 flex items-center justify-center bg-[#2C2A4A] text-[#F6F7EB] rounded-l-2xl">
          <div className="w-full max-w-sm">
            <div>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <CardHeader className="text-center space-y-2">
                  <Image
                    src="/logo-branca.png"
                    alt="Image"
                    width={200}
                    height={200}
                    className="max-w-full max-h-full ml-[4.8rem] mb-10"
                  />
                  <CardTitle className="text-2xl font-bold">Login</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>

                    <Input
                      id="email"
                      placeholder="m@exemplo.com"
                      required
                      type="email"
                      className="bg-[#252728]"
                      {...form.register("email")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input
                      id="password"
                      placeholder="Senha"
                      required
                      type="password"
                      className="bg-[#252728]"
                      {...form.register("password")}
                    />
                  </div>
                </CardContent>
                {/* {error && <p className="text-red-500 ml-6">{error}</p>} */}
                <CardFooter className="flex flex-col gap-2">
                  <Button
                    type="submit"
                    className="mt-auto w-full bg-gradient-to-r from-gray-400 to-[#1f1d42] text-white border-none rounded-md py-2 px-4 transition duration-300 ease-in-out hover:bg-blue-800"
                  >
                    Login
                  </Button>
                </CardFooter>
                <CardFooter className="text-center text-sm">
                  Não tem uma conta?{" "}
                  <Link
                    href="/signup"
                    className="ml-2 text-blue-400 hover:opacity-75"
                  >
                    Sign up
                  </Link>
                </CardFooter>
                <Bottom />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
