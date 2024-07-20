"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Bottom from "./bottom";
import { toast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { object, string } from "zod";

import { useForm } from "react-hook-form";

const signupSchema = object({
  username: string().max(20).min(5),
  email: string().email(),
  password: string().min(6),
});

export default function SignupForm() {
  const router = useRouter();
  const form = useForm();

  const handleSubmit = async (data: any) => {
    signupSchema.parse(data);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.token;
        toast({
          variant: "success",
          title: "Success",
          description: "Registered with success",
        });
        Cookies.set("token", token, { expires: 1 });
        router.push("/dashboard");
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Register failed invalid credentials",
        });
        const responseData = await response.json();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <div className="w-full flex items-center justify-center 2xl:bg-[#2C2A4A] xl:bg-[#2C2A4A] md:bg-[#2C2A4A] bg-[#F6F7EB] 2xl:text-[#F6F7EB] xl:text-[#F6F7EB] text-[#2C2A4A] 2xl:rounded-r-2xl xl:rounded-r-2xl">
          <div className="w-full max-w-sm">
            <div>
              <form onSubmit={form.handleSubmit(handleSubmit)}>
                <CardHeader className="text-center space-y-5">
                  <Image
                    src="/logo-branca.png"
                    alt="Image"
                    width={200}
                    height={200}
                    className="hidden 2xl:flex xl:flex md:flex max-w-full max-h-full ml-[4.8rem]"
                  />
                  <Image
                    src="/logo-azul.png"
                    alt="Image"
                    width={200}
                    height={200}
                    className="max-w-full max-h-full ml-[4.8rem] lg:hidden xl:hidden md:hidden"
                  />
                  <CardTitle className="text-2xl font-bold 2xl:text-[#F6F7EB] xl:text-[#F6F7EB] md:text-[#F6F7EB]">
                    Cadastre-se
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 mt-6">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      placeholder="Username"
                      className="bg-[#FFF] text-[#131404]"
                      required
                      {...form.register("username")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="m@exemplo.com"
                      required
                      type="email"
                      className="bg-[#FFF] text-[#131404]"
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
                      className="bg-[#FFF] text-[#131404]"
                      {...form.register("password")}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Button
                    type="submit"
                    className="mt-auto w-full bg-gradient-to-r from-gray-400 to-[#1f1d42] text-white border-none rounded-md py-2 px-4 transition duration-300 ease-in-out hover:bg-blue-800"
                  >
                    Cadastrar
                  </Button>
                </CardFooter>
                <CardFooter className="text-center text-sm 2xl:text-[#F6F7EB] xl:text-[#F6F7EB] md:text-[#F6F7EB]">
                  Já possui uma conta?{" "}
                  <Link
                    href="/login"
                    className="ml-2 text-blue-400 hover:opacity-75"
                  >
                    Login
                  </Link>
                </CardFooter>
                {/* <Bottom /> */}
              </form>
            </div>
          </div>
        </div>
        <div className="hidden 2xl:flex xl:flex md:flex w-full h-screen bg-[#F6F7EB] text-[#2C2A4A] items-center justify-center">
          <Image
            src="/caixa2.png"
            alt="Image"
            width={300}
            height={300}
            className="max-w-full max-h-full"
          />
        </div>
      </div>
    </div>
  );
}
