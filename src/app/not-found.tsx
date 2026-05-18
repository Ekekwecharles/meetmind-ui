import Link from 'next/link';
import Image from 'next/image';

function SimpleHeader() {
  return (
    <header className="mx-auto flex h-[5.25rem] w-full max-w-[90rem] items-center px-5 sm:h-24 sm:px-10 xl:h-[7.5rem] xl:px-[4.5rem]">
      <Link
        href="/"
        className={
          "flex items-center gap-5 rounded-md focus-visible:outline-none " +
          "focus-visible:ring-2 focus-visible:ring-[#035A69] focus-visible:ring-offset-4"
        }
        aria-label="MeetMind homepage"
      >
        <Image
          src="/icons/meetmind-logo.svg"
          alt=""
          aria-hidden="true"
          width={42}
          height={42}
          className="h-[2.625rem] w-[2.625rem]"
        />
        <Image
          src="/icons/MeetMind.svg"
          alt="MeetMind"
          width={112}
          height={18}
          className="h-[1.125rem] w-28"
        />
      </Link>
    </header>
  );
}

function ErrorCodeMark() {
  return (
    <div
      className="flex items-center justify-center gap-[0.16em]"
      aria-hidden="true"
    >
      <span className="block font-sans text-[4rem] font-extralight leading-none text-[#111827] sm:text-[4.375rem]">
        4
      </span>
      <div className="relative flex items-center justify-center">
        <span className="block font-sans text-[4rem] font-extralight leading-none text-[#111827] sm:text-[4.375rem]">
          0
        </span>
        <span className="absolute left-1/2 top-1/2 h-[125%] w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#111827]" />
      </div>
      <span className="block font-sans text-[4rem] font-extralight leading-none text-[#111827] sm:text-[4.375rem]">
        4
      </span>
    </div>
  );
}

export default function NotFoundPage() {
  return (
    <div className="min-h-dvh bg-white text-[#111827]">
      <SimpleHeader />

      <main className="mx-auto flex w-full max-w-[90rem] flex-col items-center px-6 pt-[5.875rem] text-center sm:px-10 sm:pt-[8.5rem] xl:px-[4.5rem] xl:pt-[13.5rem]">
        <ErrorCodeMark />

        <h1 className="mt-[2.75rem] text-[2rem] font-bold leading-[1.15] text-[#111827] sm:mt-[3.125rem] sm:text-[2.25rem]">
          Page Not Found
        </h1>
        <p className="mt-5 max-w-[36rem] text-[1.125rem] leading-[1.35] text-[#4B5563] sm:mt-6 sm:text-[1.375rem] sm:leading-none">
          We couldn&apos;t find the page you&apos;re looking for
        </p>

        <Link
          href="/"
          className={
            "mt-[2.5rem] flex h-14 w-full max-w-[41.75rem] items-center justify-center " +
            "rounded-md bg-[#035A69] px-6 text-[1.0625rem] font-semibold text-white " +
            "transition-colors hover:bg-[#024A56] focus-visible:outline-none " +
            "focus-visible:ring-2 focus-visible:ring-[#035A69] focus-visible:ring-offset-4 sm:mt-[2.625rem]"
          }
        >
          Back to Homepage
        </Link>
      </main>
    </div>
  );
}
