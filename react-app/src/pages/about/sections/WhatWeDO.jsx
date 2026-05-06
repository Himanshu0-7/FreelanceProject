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
    <section className="relative w-full h-[500px] md:h-[800px] overflow-hidden">
      {/* Background */}
      <img
        src={whatwedo_img}
        alt="team"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>

      {/* Content Card — fixed height with internal layout, no overflow push */}
      <div
        className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 
        bg-[var(--card)] text-[var(--text)] 
        p-6 md:p-8 rounded-2xl w-[300px] md:w-[550px]
        shadow-xl h-[280px] md:h-[300px] flex flex-col justify-between"
      >
        <div>
          <h2 className="text-xl md:text-4xl font-semibold mb-4 text-[var(--primary)]">
            What We Do
          </h2>
          {/* Inner Box — fixed height with scroll if needed */}
          <div className="bg-[var(--card-bg)] p-4 rounded-lg backdrop-blur-sm h-[120px] md:h-[130px] overflow-y-auto">
            <h3 className="font-semibold text-sm md:text-lg mb-2">
              {services[index].title}
            </h3>
            <p className="text-xs md:text-sm text-[var(--text-muted)]">
              {services[index].desc}
            </p>
          </div>
        </div>

        {/* Bottom: dots + nav always pinned */}
        <div className="flex flex-col items-center gap-3 mt-2">
          {/* Dot indicators */}
          <div className="flex justify-center gap-2">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === index
                    ? "bg-[var(--primary)] w-4"
                    : "bg-[var(--text-muted)] opacity-50 w-2"
                  }`}
              />
            ))}
          </div>
          {/* Nav buttons */}
          <div className="flex justify-between gap-6 bg-[var(--card-soft)] w-[250px] py-2 rounded-full shadow-lg">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center rounded-full 
              bg-[var(--card-bg)] text-[var(--text)] hover:opacity-80 transition"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center rounded-full 
              bg-[var(--card-bg)] text-[var(--text)] hover:opacity-80 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
