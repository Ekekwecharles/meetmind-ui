"use client";

import Buttons from "@/components/reuseable-component/buttons";
import { FcGoogle } from "react-icons/fc";

const GoogleAuthButton = () => {
  const handleGoogleSignIn = () => {
    window.location.href =
      "https://api.staging.meetmind.hng14.com/api/v1/auth/google";
  };

  return (
    <Buttons
      text="Sign in with Google"
      type="button"
      icon={<FcGoogle size={24} />}
      onClick={handleGoogleSignIn}
      style="
        bg-white
        hover:bg-gray-50
        border
        text-[18px] font-medium
        border-[#E1E3E4]
        text-[#0F172A]
      "
      style2="w-full h-[56px]"
    />
  );
};

export default GoogleAuthButton;
