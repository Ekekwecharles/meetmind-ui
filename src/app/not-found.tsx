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
    <div className="flex items-center justify-center mb-6" aria-hidden="true">
      <svg 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-32 w-32 sm:h-40 sm:w-40"
      >
        <path d="M15 40V55C15 56.3261 15.5268 57.5979 16.4645 58.5355C17.4021 59.4732 18.6739 60 20 60H35" stroke="#09090B" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M35 40V80" stroke="#09090B" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M85 40V55C85 56.3261 85.5268 57.5979 86.4645 58.5355C87.4021 59.4732 88.6739 60 90 60H105" stroke="#09090B" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M105 40V80" stroke="#09090B" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M50 50V70C50 72.6522 51.0536 75.1957 52.9289 77.0711C54.8043 78.9464 57.3478 80 60 80C62.6522 80 65.1957 78.9464 67.0711 77.0711C68.9464 75.1957 70 72.6522 70 70M70 50C70 47.3478 68.9
        <path d="M15 15L105 105" stroke="#09090B" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export default function NotFoundPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white text-[#111827]">
      <SimpleHeader />

      <main className="mx-auto flex w-full max-w-[90rem] flex-1 flex-col items-center justify-center px-6 text-center sm:px-10 xl:px-[4.5rem] pb-20">
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
