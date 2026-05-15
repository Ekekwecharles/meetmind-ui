"use client";
import Image from 'next/image';

export default function WaitlistPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Temporary Navbar */}
            <div className="h-20 border-b border-neutral-200 flex items-center px-6">
                <p className="font-semibold text-lg">Navbar Placeholder</p>
            </div>

            {/* Main Content */}
            <HeroSection />
            <FeaturesGrid />
            <CTASection />

            {/* Temporary Footer */}
            <div className="h-32 border-t border-neutral-200 flex items-center justify-center mt-20">
                <p className="text-neutral-500">Footer Placeholder</p>
            </div>
        </div>
    );
}

function HeroSection() {
    return (
        <section className="pt-20 pb-16 text-center px-4">
            <div className="max-w-5xl mx-auto relative flex flex-col items-center">

                {/* --- 1) Clipboard Icon: Top-Left of Heading --- */}
                <div className="absolute left-0 top-0 hidden lg:block">
                    <Image
                        src="/streamline-freehand_task-list-clipboard-favorite-star.png"
                        width={80}
                        height={80}
                        alt=""
                    />
                </div>

                {/* --- HEADING GROUP --- */}
                <div className="relative inline-block">
                    <h1 className="text-4xl md:text-[64px] font-semibold tracking-tight text-neutral-900 leading-[1.1] max-w-[840px] mx-auto relative z-10">
                        AI agents that join calls and participate <br />
                        <span className="font-serif italic text-[#006673]">
                            like real teammates.
                        </span>
                    </h1>

                    {/* --- 2) vector.png: Positioned to the RIGHT of the text --- */}
                    <div className="absolute right-[-70px] bottom-[10px] hidden md:block">
                        <Image
                            src="/vector.png"
                            width={50}
                            height={50}
                            alt=""
                            className="object-contain"
                        />
                    </div>
                </div>

                <p className="mt-8 text-neutral-500 max-w-xl mx-auto text-lg leading-relaxed">
                    MeetMind joins your call, tracks coverage, and delivers a structured
                    summary instantly.
                </p>

                {/* --- EMAIL SECTION --- */}
                <div className="mt-14 relative inline-block w-full max-w-lg">

                    {/* --- 3) meet.png: In front of Input --- */}
                    <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 hidden md:block">
                        <Image src="/meet.png" width={45} height={45} alt="" />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-6 py-4 border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 bg-neutral-50/50"
                        />
                        <button className="w-full sm:w-auto px-8 py-4 bg-[#004d57] text-white font-medium rounded-full whitespace-nowrap hover:bg-[#003a42] transition-all">
                            Get early access
                        </button>
                    </div>

                    {/* --- 4) Avatargroup.png: Below Input --- */}
                    <div className="absolute bottom-[-75px] left-1/2 -translate-x-1/2 w-full flex flex-col items-center">
                        <Image src="/Avatargroup.png" width={140} height={45} alt="Users" />
                        <p className="text-[10px] text-neutral-400 mt-1 font-bold tracking-widest uppercase">Join 1k+ early users</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeaturesGrid() {
    const features = [
        {
            title: "Context-aware AI",
            desc: "Inject agendas, resumes, scorecards, and structured data before every session.",
        },
        {
            title: "Developer SDK",
            desc: "Integrate MeetMind into your own product with APIs and adapters.",
        },
        {
            title: "Voice participation",
            desc: "AI listens, waits for natural pauses, and responds in real time.",
        },
        {
            title: "Natural language queries",
            desc: "Ask questions about meetings without scrolling through transcripts.",
        },
    ];

    return (
        <section className="py-32 max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Built for real-time participation.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className="p-10 border border-neutral-100 rounded-3xl bg-white hover:shadow-sm transition-shadow"
                    >
                        <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                        <p className="text-neutral-500 leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="px-6 mb-20">
            <div className="max-w-6xl mx-auto bg-[#006673] rounded-[40px] py-20 px-10 text-center text-white relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-serif mb-6">
                    Ready to Transform Your Meetings?
                </h2>

                <p className="text-teal-50 mb-10 max-w-lg mx-auto opacity-90">
                    Join thousands of teams using AI to improve their meeting experiences
                </p>

                <button className="bg-[#d2e9ec] text-[#004d57] px-8 py-4 rounded-xl font-semibold hover:bg-white transition-colors relative z-10">
                    Watch Demo
                </button>


            </div>
        </section>
    );
}