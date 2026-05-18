import { ReactNode } from "react";
import Image from "next/image";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const AuthLayout = ({ title, subtitle, children }: AuthLayoutProps) => {
  return (
    <section className="relative flex min-h-screen w-full overflow-hidden">
      <div className="relative hidden lg:block lg:w-[45%]">
        <Image
          src="/images/signupBg.png"
          alt="Authentication background"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="flex flex-col gap-1 px-10">
            <h1 className="text-[48px] font-bold text-white">{title}</h1>

            <p className="text-[36px] leading-11 tracking-[-0.02em] text-white max-w-md">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
