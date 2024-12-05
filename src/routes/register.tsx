import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ChevronLeft, Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { register as create } from "~/api/auth";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { ToastAction } from "~/components/ui/toast";
import { toast } from "~/hooks/use-toast";

export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

const registerSchema = z
  .object({
    rsaPin: z.string().min(3, "RSA PIN must be at least 3 characters."),
    surname: z.string().min(2, "Surname must be at least 2 characters."),
    email: z.string().email("Please enter a valid email."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

function RouteComponent() {
  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const mutation = useMutation({
    mutationFn: create,
    onSuccess: (data) => {
      //console.log("Registration successful", data);
      toast({
        className: "bg-green-600",
        title: "Registration successful, proceed to login",
      });
      navigate({ from: "/" });
      reset();
    },
    onError: (error) => {
      //console.error("Registration failed", error);
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: error.message,
      });
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data: RegisterFormData) => {
    mutation.mutate(data);
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
      </div>{" "}
      <div className="flex-1 flex justify-center bg-white p-8">
        <div className="w-full max-w-md">
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
          </div>{" "}
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Register</h2>
            <small className="">
              Enter your details to start your pension proces
            </small>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="mb-5">
              <label
                htmlFor="rsaPin"
                className="block text-sm font-medium text-gray-700"
              >
                RSA PIN
              </label>
              <Input
                id="rsaPin"
                placeholder="RSA Pin"
                {...register("rsaPin")}
                className="w-full mt-1 p-3 border border-gray-50 rounded"
              />
              {errors.rsaPin && (
                <p className="text-red-500 text-xs">{errors.rsaPin.message}</p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700"
              >
                Surname
              </label>
              <Input
                id="surname"
                placeholder="Surname"
                {...register("surname")}
                className="w-full mt-1 p-3 border border-gray-300 rounded"
              />
              {errors.surname && (
                <p className="text-red-500 text-xs">{errors.surname.message}</p>
              )}
            </div>
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
            <div className="flex space-x-4 mb-5">
              <div className="w-1/2">
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

              <div className="w-1/2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword")}
                    className="w-full mt-1 p-3 border border-gray-300 rounded"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2"
                  >
                    {showConfirmPassword ? (
                      <EyeClosed className="text-gray-400" size={15} />
                    ) : (
                      <Eye className="text-gray-400" size={15} />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>{" "}
            <div className="my-5">
              <Button
                type="submit"
                variant="green"
                className="w-full mt-4 <F34> text-white py-3 rounded"
              >
                Register
              </Button>
            </div>
            <div className="mt-4">
              <small className="text-sm text-gray-600">
                Already have an account or are not a retiree?{" "}
                <a
                  href="/login"
                  className="text-[#066523] hover:underline font-medium"
                >
                  Login here
                </a>
              </small>
            </div>{" "}
          </form>
        </div>
      </div>
    </div>
  );
}
