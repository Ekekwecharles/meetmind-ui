import { ReactNode } from "react";
import Image from "next/image";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const AuthLayout = ({ title, subtitle, children }: AuthLayoutProps) => {
  return (
    <section className="flex min-h-screen flex-col lg:flex-row">
      {/* Mobile Section */}
      <div className="sticky top-0 h-[50vh] w-full overflow-hidden lg:hidden">
        <Image
          src="/images/sign-in-bg-mobile.png"
          alt="Authentication background"
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Mobile Text */}
        <div className="absolute inset-0 z-10 flex items-start px-6 pt-10">
          <div className="max-w-[390px]">
            <h1 className="text-[48px] max-w-[358px] font-bold leading-[0.95] text-white">
              {title}
            </h1>

            <p className="mt-4 text-[36px] max-w-[358px] leading-[1.1] text-white">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Left Panel */}
      <div className="relative hidden lg:block lg:w-[45%]">
        <Image
          src="/images/signupBg.png"
          alt="Authentication background"
          fill
          sizes="45vw"
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Desktop Text */}
        <div className="absolute inset-0 z-10 flex items-center px-12">
          <div className="max-w-[640px]">
            <h1 className="text-[48px] max-w-[527px] font-bold leading-[0.95] text-white">
              {title}
            </h1>

            <p className="mt-6 text-[36px] max-w-[527px] leading-[1.1] text-white">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="relative -mt-25 z-20 flex flex-1 justify-center px-6 pb-10 
                   lg:bg-bg-secondary lg:items-center lg:px-10 lg:py-10"
      >
        <div className="h-[40vh] lg:hidden" />

        {/* Floating Content Wrapper */}
        <div className="w-[460px] rounded-t-[32px] p-8 lg:p-0 lg:rounded-none">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Image
              src="/icons/meetmind-logo.svg"
              alt="MeetMind logo"
              width={60}
              height={60}
              priority
              className="h-auto"
            />
          </div>

          <div className="w-full">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
