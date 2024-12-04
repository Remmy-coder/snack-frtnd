import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ChevronLeft, Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

type LoginFormData = z.infer<typeof loginSchema>;

function RouteComponent() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // Implement your login logic here (e.g., calling an API)
    // For now, we will just navigate to the home page after submission.
    navigate({ from: "/" });
  };

  const handleBackClick = () => {
    navigate({ from: "/" });
  };

  return (
    <div className="flex h-screen">
      <div
        className="w-1/3 h-full relative flex flex-col"
        style={{
          backgroundImage: "url('../../assests/images/Group 17.png')",
          backgroundSize: "80%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "grayscale(90%)",
        }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative z-10 p-4"></div>
      </div>
      <div className="flex-1 flex justify-center bg-white p-8">
        <div className="w-full max-w-md mt-6">
          <div className="flex items-center space-y-2 mb-4">
            <ChevronLeft
              style={{ cursor: "pointer" }}
              size={15}
              className="mt-1 mr-4"
              onClick={handleBackClick}
            />
            <small
              style={{ cursor: "pointer" }}
              className="text-sm text-gray-600"
              onClick={handleBackClick}
            >
              Back to home
            </small>
          </div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Login</h2>
            <small className="">Enter your email and password to login</small>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                placeholder="Email"
                type="email"
                {...register("email")}
                className="w-full mt-1 p-3 border border-gray-300 rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className="w-full mt-1 p-3 border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeClosed className="text-gray-400" size={15} />
                  ) : (
                    <Eye className="text-gray-400" size={15} />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="my-5">
              <Button
                type="submit"
                variant="green"
                className="w-full mt-4 bg-civis-blue text-white py-3 rounded"
              >
                Login
              </Button>
            </div>
            <div className="mt-4">
              <small className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="text-[#066523] hover:underline font-medium"
                >
                  Register here
                </a>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
