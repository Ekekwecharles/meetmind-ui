import Image from 'next/image';

import personaConfigSnippet from '/images/personaConfigSnippet.png';

export default function Features() {
  const featuresList = [
    {
      id: 1,
      icon: '/icons/plugicon.png',
      title: 'Platform adapters',
      desc: 'Plug-and-play connectors for Zoom and Google Meet. No custom connector needed.',
    },
    {
      id: 2,
      icon: '/icons/brainicon.png',
      title: 'Context injection',
      desc: 'Feed the agent documents, scorecards, and agendas before the call. It arrives informed.',
    },
    {
      id: 3,
      icon: '/icons/foldericon.png',
      title: 'Live voice participation',
      desc: 'The agent joins as a named participant, interacting with audio in real-time.',
    },
    {
      id: 4,
      icon: '/icons/foldericon.png',
      title: 'Relevance engine',
      desc: 'Decides when to speak passive, standard, or proactive modes with config thresholds.',
    },
    {
      id: 5,
      icon: '/icons/foldericon.png',
      title: 'Structured note capture',
      desc: 'Auto-saves decisions, action items, and open questions every 30 seconds.',
    },
    {
      id: 6,
      icon: '/icons/foldericon.png',
      title: 'Post-session query',
      desc: 'Natural language search over the session record. Ask anything, get a direct answer.',
    },
  ];

  return (
    <section
      id="features"
      className="flex flex-col items-center bg-[#F7F9FB] px-4 md:px-8 py-16 w-full"
    >
      <section className="flex flex-col">
        <div className="flex flex-col lg:max-w-172 mx-auto">
          <h3 className="font-bold text-[40px] text-center">
            Everything to ship a voice agent
          </h3>
          <p className="font-medium text-2xl text-center text-wrap">
            The SDK handles audio, context, relevance, and output. You build the
            product logic on top.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:max-w-272 mx-auto mt-2 px-4 md:px-0 ">
          {featuresList.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col bg-white p-6 rounded-xl border border-gray-100 shadow-sm gap-6 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
            >
              <div className="flex items-center justify-start w-full">
                <Image 
                  src={feature.icon} 
                  alt={`${feature.title} icon`}
                  width={32}
                  height={32}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-[#0F172A]">
                  {feature.title}
                </h2>
                <p className="text-base font-normal text-[#3F4555] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full lg:max-w-272  gap-6 mx-auto mt-20 items-center">
        <div className="flex flex-col gap-6 text-left md:w-1/2">
          <h3 className="font-bold text-[40px] text-[#09090B]">
            Your Agent. Your Rules
          </h3>
          <p className="font-medium text-2xl text-[#3F4555] text-wrap">
            Every behaviour is configurable. Set the tone, mode, verbosity, and
            interruption threshold to match your exact use case.
          </p>
          <div className="space-y-4">
            <p className="font-normal text-base text-[#3F4555] text-wrap">
              Every parameter maps directly to the Persona() constructor. Changes
              to tone, mode, and verbosity affect how the agent speaks — not just
              when.
            </p>
            <p className="font-normal text-base text-[#3F4555] text-wrap">
              Interruption threshold controls how long the agent waits for a
              natural pause before speaking. Lower values feel conversational.
              Higher values suit formal sessions.
            </p>
          </div>
        </div>
        
        <div className="flex md:justify-end md:w-1/2">
          <Image
            src='/images/personaConfigSnippet.png'
            alt="Persona Config Snippet"
            className="rounded-lg shadow-lg "
             width={308}
              height={314}
          />
          {/* <img 
            src='/images/personaConfigSnippet.png'
            alt="Persona Config Snippet"
            className="rounded-lg shadow-lg"
           /> */}
        </div>
      </section>
    </section>
  );
}