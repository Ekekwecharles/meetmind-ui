const SignInForm = () => {
  return (
    <div className="rounded-[32px] bg-white px-6 py-8 lg:px-8 lg:py-10">
      <h2 className="text-center text-[24px] font-bold text-text-color-primary">
        Sign in
      </h2>

      <div className="mt-8 space-y-6">
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
            className="h-[48px] w-full rounded-[8px] border input-border px-4 
                outline-none transition-all placeholder:text-placeholder 
                focus:border-input-border-focus"
          />
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-text-color-label"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className=" h-[48px] w-full rounded-[8px] border border-input-border px-4 
              outline-none transition-all placeholder:text-placeholder
              focus:border-input-border-focus"
          />
        </div>

        {/* Forgot Password */}
        <div className="flex justify-center">
          <button
            type="button"
            className="text-[16px] text-text-subtext cursor-pointer 
                hover:opacity-80"
          >
            Forgot Password?
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          className="h-[48px] w-full rounded-[8px] bg-button-primary-bg text-[18px] font-semibold 
          text-white transition-all hover:opacity-80 cursor-pointer"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
