"use client";

import { CircleAlert } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// ==================== 🧩Main Component ====================
export default function InvalidLink() {
  const router = useRouter();

  return (
    <div className="bg-[#0F172A]/75 flex items-center justify-center md:bg-[#F7F9FB] h-full">
      <div className="p-4 max-w-[420px] flex flex-col justify-center">
        <div className="flex justify-center">
        <Image
            src="/icons/meetmind-logo.svg"
            alt="logo"
            width={43}
            height={43}
          />
        </div>

        <div className="mt-8 p-6 bg-[#FEFEFF] rounded-2xl">
          <div className="flex flex-col items-center">
            <div className="bg-[#FDECEC] rounded-full w-9 h-9 flex justify-center items-center mb-5">
              <CircleAlert
                strokeWidth={1.5}
                size={23}
                className="text-[#EF4444]"
              />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl">Invalid link</h3>
              <p className="text-[#5E6470] mt-2 mb-3">
                The reset link is invalid, or already expired
              </p>
            </div>
            <button
              className={`text-sm text-white font-medium bg-[#02505E] rounded-md w-full p-3 mt-1`}
              onClick={() => router.push("/forgot-password")}
            >
              Request a new link
            </button>
          </div>
        </div>
        <p className="text-center mt-5 text-[#5E6470] text-sm">
          Check spam or promotion if you don&apos;t see it
        </p>
      </div>
    </div>
  );
}
