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

import { useState } from "react";

export default function SignupForm() {
  const [error, setError] = useState(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch("http://localhost:8000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
      } else {
        const responseData = await response.json();
        setError(responseData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center pb-0">
        <CardTitle className="text-3xl font-bold mb-4">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit}>
          <div className="space-y-2 mt-6">
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" placeholder="Username" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" required type="password" />
          </div>
          <Button className="w-full mt-6" type="submit">
            Sign Up
          </Button>
        </form>
      </CardContent>
      {error && (
        <CardFooter className="text-red-500 text-center pt-0">
          {error}
        </CardFooter>
      )}
      <CardFooter className="text-center pt-0">
        <Link className="text-sm underline" href="#">
          Already have an account? Login
        </Link>
      </CardFooter>
    </Card>
  );
}
