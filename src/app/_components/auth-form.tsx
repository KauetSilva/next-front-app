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
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

export function AuthForm() {
  const [error, setError] = useState(null);
  const form = useForm();
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    console.log('data', data)
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
        
        toast({
          variant: "destructive",
          title: "Error",
          description: "Login failed",
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-full max-w-sm space-y-4">
        <Card className="mx-auto max-w-md">
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-2xl font-bold">Login</CardTitle>
              <CardDescription>
                Enter your email below to login to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                  {...form.register('email')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  required
                  type="password"
                  {...form.register('password')}
                />
              </div>
            </CardContent>
            {error && <p className="text-red-500">{error}</p>}
            <CardFooter className="flex flex-col gap-2">
              <Button type="submit" className="mt-auto w-full">
                Login
              </Button>
            </CardFooter>
            <CardFooter className="text-center text-sm">
              Dont have an account? <Link href="/signup">Sign up</Link>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}

