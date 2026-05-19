"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type SignInFormData } from "@/schemas/signInSchema";
import { LuEye, LuEyeOff } from "react-icons/lu";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <div className="rounded-[32px] bg-white px-6 py-8 lg:px-8 lg:py-10">
      <h2 className="text-center text-[24px] font-bold text-text-color-primary">
        Sign In
      </h2>

      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 space-y-6"
      >
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-[16px] font-medium text-text-color-label"
          >
            Email address
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            {...register("email", {
              onChange: () => {
                if (errors.email) clearErrors("email");
              },
            })}
            className={`h-[48px] w-full rounded-[8px] border px-4 outline-none 
                transition-all placeholder:text-placeholder 
                focus:border-input-border-focus 
                ${errors.email ? "border-error" : "border-input-border"}
                `}
          />

          {errors.email && (
            <p className="mt-2 text-sm text-error-text">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-text-color-label"
          >
            Password
          </label>

          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", {
                onChange: () => {
                  if (errors.password) clearErrors("password");
                },
              })}
              className={`h-[48px] w-full rounded-[8px] border px-4 outline-none 
                transition-all placeholder:text-placeholder 
                focus:border-input-border-focus 
                ${errors.password ? "border-error" : "border-input-border"}
                `}
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-input-placeholder 
              hover:text-input-placeholder/80 cursor-pointer"
            >
              {showPassword ? (
                <LuEyeOff
                  size={20}
                  className="animate-in fade-in duration-200"
                />
              ) : (
                <LuEye size={20} className="animate-in fade-in duration-200" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-2 text-sm text-error-text">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Forgot Password */}
        <div className="flex justify-center">
          <Link
            href="/forgot-password"
            className="text-[16px] text-text-subtext cursor-pointer 
                hover:opacity-80"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="h-[48px] w-full rounded-[8px] bg-button-primary-bg text-[18px] 
          font-semibold text-white transition-all hover:opacity-80 cursor-pointer 
          disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
