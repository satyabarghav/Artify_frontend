import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";
export default function Component() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const updateEmail = (e) => setEmail(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        email: email,
        password: password,
      };

      const response = await axios.post(
        "https://artify-server-enba.onrender.com/login",
        formData
      );
      console.log(response.data);
      if (response.status === 200) {
        toast.success("Login successful");
        localStorage.setItem("user", JSON.stringify(response.data));
        setEmail("");
        setPassword("");
        localStorage.setItem("userRole","buyer")
        setTimeout(() => {
          navigate("/shop");
        }, 3000);
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    }
  };
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1554147090-e1221a04a025?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <Toaster richColors />
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <Button asChild variant="link">
              <Link to="/" className="text-md">
                Back to Home
              </Link>
            </Button>
          </div>

          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                  onChange={updateEmail}
                  value={email}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  required
                  type="password"
                  onChange={updatePassword}
                  value={password}
                />
              </div>
              <Button className="w-full" type="submit">
                Login
              </Button>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
