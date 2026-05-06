import { useState } from "react";
import whatwedo_img from "../../../assets/whatwedo_img.png";

const services = [
  {
    title: "ServiceNow Solutions",
    desc: "End to end ServiceNow services including ITSM, ITOM, HRSD, and workflow automation to enhance organizational productivity and service delivery.",
  },

  {
    title: "Salesforce Services",
    desc: "Comprehensive Salesforce solutions including CRM implementation, customization, automation, and third party integrations to improve customer engagement and revenue growth.",
  },

  {
    title: "DevOps and Cloud Engineering",
    desc: "We design and implement robust DevOps pipelines and cloud infrastructure to enable faster deployments, continuous integration, and reliable system performance across environments.",
  },

  {
    title: "Agentic AI and Generative AI",
    desc: "We build advanced AI driven systems that enable intelligent automation, autonomous decision making, and enhanced user experiences. Our solutions include AI agents, chatbots, workflow automation, and data driven insights.",
  },

  {
    title: "Cybersecurity and Risk Management",
    desc: "Our cybersecurity services focus on proactive threat detection, risk assessment, compliance management, and data protection to safeguard critical business assets.",
  },

  {
    title: "Global Capability Centers (GCC)",
    desc: "We help organizations establish and manage global capability centers, enabling cost efficiency, access to skilled talent, and scalable operations.",
  },
];

export default function WhatWeDo() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % services.length);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));

  return (
    <section className="relative w-full min-h-[650px] md:min-h-[800px] overflow-hidden">
      {/* Background */}
      <img
        src={whatwedo_img}
        alt="team"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center md:justify-end px-6 md:px-16 py-16">
        <div
          className="bg-[var(--card)] text-[var(--text)] 
          p-6 md:p-8 rounded-2xl w-full max-w-[550px]
          shadow-2xl border border-[var(--border)]
          flex flex-col justify-between min-h-[340px] md:min-h-[360px]"
        >
          {/* Top */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5 text-[var(--primary)]">
              What We Do
            </h2>

            {/* Inner Box */}
            <div className="bg-[var(--card-bg)] p-4 sm:p-5 rounded-xl backdrop-blur-sm min-h-[150px] md:min-h-[170px] overflow-y-auto border border-[var(--border)]">
              <h3 className="font-semibold text-base sm:text-lg mb-3 text-[var(--text)] leading-relaxed">
                {services[index].title}
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                {services[index].desc}
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col items-center gap-4 mt-6">
            {/* Dots */}
            <div className="flex justify-center gap-2 flex-wrap">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === index
                      ? "bg-[var(--primary)] w-5"
                      : "bg-[var(--text-muted)] opacity-50 w-2"
                    }`}
                />
              ))}
            </div>

            {/* Nav */}
            <div className="flex justify-between items-center gap-6 bg-[var(--card-soft)] w-full max-w-[260px] py-2 px-3 rounded-full shadow-lg border border-[var(--border)]">
              <button
                onClick={prev}
                className="w-12 h-12 flex items-center justify-center rounded-full 
                bg-[var(--card-bg)] text-[var(--text)] hover:opacity-80 transition duration-300"
              >
                ←
              </button>

              <button
                onClick={next}
                className="w-12 h-12 flex items-center justify-center rounded-full 
                bg-[var(--card-bg)] text-[var(--text)] hover:opacity-80 transition duration-300"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
