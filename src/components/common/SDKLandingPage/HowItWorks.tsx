import Image from 'next/image';


export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Step 01',
      subject: 'Inject context before the call.',
      desc: 'Upload documents, agendas, scorecards, and role descriptions. The agent arrives at the meeting fully briefed not cold.',
    },
    {
      id: 2,
      title: 'Step 02',
      subject: 'Agent joins the call',
      desc: 'MeetMind connects to Zoom or Google Meet as an active, named participant, not a bot in the corner. It introduces itself and begins listening immediately.',
    },
    {
      id: 3,
      title: 'Step 03',
      subject: 'Listens, decides, speaks',
      desc: 'The relevance engine scores every speaker turn. When the threshold is met it speaks, asking follow-ups, flagging gaps, holding the conversation naturally.',
    },
    {
      id: 4,
      title: 'Step 04',
      subject: 'Structured output, immediately',
      desc: 'Session ends and a complete scorecard, AI summary, and queryable transcript are available instantly. No manual notes. No memory-dependent write-ups.',
    },
  ];

  const quickStartSteps = [
    {
      id: 1,
      num: '01',
      icon: '/icons/foldericon.png',
      title: 'Inject Context',
      desc: 'Provide agenda, documents, or candidate data before the session starts.',
    },
    {
      id: 2,
      num: '02',
      icon: '/icons/plugicon.png',
      title: 'Connect to a meeting',
      desc: 'Point the adapter at a Zoom or Google Meet link and run.',
    },
    {
      id: 3,
      num: '03',
      icon: '/icons/chipicon.png',
      title: 'Get structured output',
      desc: 'Scorecard, summary, and queryable transcript ready instantly.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="flex flex-col items-center bg-[#F7F9FB] px-4 md:px-8 py-16 w-full"
    >
      {/* Upper "How It Works" Layout Row */}
      <section className="flex flex-col md:flex-row gap-12 w-full lg:max-w-272 mx-auto">
        <div className="flex flex-col md:max-w-104 w-full">
          <p className="font-normal text-base text-[#035A69]">How It works</p>
          <h3 className="font-bold text-3xl md:text-[40px] leading-tight">
            Four Steps. <br />
            One Working Agent.
          </h3>
        </div>

        <div className="flex flex-col gap-4 md:max-w-161 w-full">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col gap-4 justify-between text-left border-b border-gray-100 pb-4 last:border-0"
            >
              <p className="text-base font-normal text-[#035A69]">
                {step.title}
              </p>
              <h2 className="text-2xl font-bold text-[#0F172A]">
                {step.subject}
              </h2>
              <p className="text-base font-normal text-[#3F4555]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lower "Quick Start" Layout Block */}
      <section className="flex flex-col gap-4 w-full lg:max-w-272 mx-auto mt-16">
        <div className="flex flex-col gap-4 text-left">
          <p className="font-normal text-base text-[#035A69]">Quick Start</p>
          <h3 className="font-bold text-[40px] leading-tight">
            Up and running in 60 seconds
          </h3>
          <p className="font-medium text-2xl text-[#3F4555]">
            Three steps to a live AI agent...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:max-w-272 mx-auto mt-2 px-4 md:px-0 ">
          {quickStartSteps.map((quickstep) => (
            <div
              key={quickstep.id}
              className="flex flex-col bg-white p-6 rounded-b-xl border-x border-b 
              border-gray-100 shadow-sm border-t-4 border-t-[#035A69] gap-6 text-left transition-all
               duration-300 hover:-translate-y-2 hover:shadow-md"
            >
              <div className="flex items-center justify-between w-full">
                <p className="text-base font-normal text-[#0A8F8F]">
                  {quickstep.num}
                </p>
                
                <Image
                  src={quickstep.icon}
                  alt={`${quickstep.title} illustration`}
                  width={32} 
                  height={32} 
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-[#0F172A]">
                  {quickstep.title}
                </h2>
                <p className="text-base font-normal text-[#3F4555] leading-relaxed">
                  {quickstep.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
