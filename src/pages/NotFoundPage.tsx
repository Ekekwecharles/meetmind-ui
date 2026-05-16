import { BellDot, ChevronDown, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import meetmindWordmark from '@/assets/icons/MeetMind.svg';
import meetmindLogo from '@/assets/icons/meetmind-logo.svg';
import avatar from '@/assets/images/darrell-steward.png';

const navItems = [
  { label: 'Dashboard', to: '/' },
  { label: 'Candidates', to: '/candidates' },
  { label: 'Interviews', to: '/interviews', active: true },
  { label: 'Calendar', to: '/calendar' },
];

function ErrorNavbar() {
  return (
    <header className="mx-auto flex h-[5.25rem] w-full max-w-[90rem] items-center justify-between px-5 sm:h-24 sm:px-10 xl:h-[7.5rem] xl:px-[4.5rem]">
      <Link
        to="/"
        className="flex items-center gap-5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#035A69] focus-visible:ring-offset-4"
        aria-label="MeetMind homepage"
      >
        <img
          src={meetmindLogo}
          alt=""
          aria-hidden="true"
          className="h-[2.625rem] w-[2.625rem]"
        />
        <img
          src={meetmindWordmark}
          alt="MeetMind"
          className="h-[1.125rem] w-28"
        />
      </Link>

      <div className="hidden items-center gap-[4.35rem] xl:flex">
        <nav className="flex items-center gap-7" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              aria-current={item.active ? 'page' : undefined}
              className={`whitespace-nowrap rounded-md text-[0.875rem] leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#035A69] focus-visible:ring-offset-4 ${
                item.active
                  ? 'bg-[#E4F0F2] px-3 py-2 font-medium text-[#035A69]'
                  : 'font-normal text-[#111827] hover:text-[#035A69]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-[#374151]">
          <button
            type="button"
            aria-label="Search"
            className="inline-flex size-8 items-center justify-center rounded-md transition-colors hover:bg-[#E4F0F2] hover:text-[#035A69] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#035A69] focus-visible:ring-offset-4"
          >
            <Search className="size-[1.125rem]" strokeWidth={1.8} />
          </button>
          <button
            type="button"
            aria-label="Notifications"
            className="inline-flex size-8 items-center justify-center rounded-md transition-colors hover:bg-[#E4F0F2] hover:text-[#035A69] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#035A69] focus-visible:ring-offset-4"
          >
            <BellDot className="size-[1.125rem]" strokeWidth={1.8} />
          </button>
          <button
            type="button"
            aria-label="Open profile menu"
            className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#035A69] focus-visible:ring-offset-4"
          >
            <img
              src={avatar}
              alt="User profile"
              className="size-8 rounded-full object-cover"
            />
            <ChevronDown className="size-4" strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </header>
  );
}

function ErrorCodeMark() {
  return (
    <div
      className="relative h-[4.875rem] w-[9.625rem] text-center sm:h-[5.25rem] sm:w-[10.5rem]"
      aria-hidden="true"
    >
      <span className="block font-sans text-[4rem] font-extralight leading-none tracking-[0.16em] text-black sm:text-[4.375rem]">
        404
      </span>
      <span className="absolute left-[4.3rem] top-[-0.55rem] h-[6.875rem] w-px -rotate-45 bg-black sm:left-[4.7rem] sm:top-[-0.65rem] sm:h-[7.5rem]" />
    </div>
  );
}

export function NotFoundPage() {
  return (
    <div className="min-h-dvh bg-white text-[#111827]">
      <ErrorNavbar />

      <main className="mx-auto flex w-full max-w-[90rem] flex-col items-center px-6 pt-[5.875rem] text-center sm:px-10 sm:pt-[8.5rem] xl:px-[4.5rem] xl:pt-[13.5rem]">
        <ErrorCodeMark />

        <h1 className="mt-[2.75rem] text-[2rem] font-bold leading-[1.15] text-[#111827] sm:mt-[3.125rem] sm:text-[2.25rem]">
          Page Not Found
        </h1>
        <p className="mt-5 max-w-[36rem] text-[1.125rem] leading-[1.35] text-[#4B5563] sm:mt-6 sm:text-[1.375rem] sm:leading-none">
          We couldn&apos;t find the page you&apos;re looking for
        </p>

        <Link
          to="/"
          className="mt-[2.5rem] flex h-14 w-full max-w-[41.75rem] items-center justify-center rounded-md bg-[#035A69] px-6 text-[1.0625rem] font-semibold text-white transition-colors hover:bg-[#024A56] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#035A69] focus-visible:ring-offset-4 sm:mt-[2.625rem]"
        >
          Back to Homepage
        </Link>
      </main>
    </div>
  );
}
