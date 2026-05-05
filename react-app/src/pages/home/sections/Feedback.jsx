import Background from "../../../assets/Background.png";
import Perspective from "../../../assets/Perspective-Grid.svg";
import Client_Icon from "../../../assets/feedback_client_icon.svg";

export default function Feedback() {
  return (
    <section className="relative w-full py-16 sm:py-20 flex flex-col gap-6 bg-gradient-90-light dark:bg-gradient-180-dark overflow-hidden">
      {/* Background images */}
      <img
        src={Background}
        className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-overlay pointer-events-none"
      />
      <img
        src={Perspective}
        className="absolute left-0 top-0 h-full w-full sm:w-1/2 object-cover opacity-20 sm:opacity-40 pointer-events-none"
      />

      {/* Header */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-[var(--special-text)] text-3xl sm:text-4xl font-semibold">
          Client <span className="text-[var(--primary)]">We Served</span>
        </h1>
        <p className="text-[var(--text)] font-semibold text-base sm:text-xl mt-2">
          One Platform Where you get all the Ideas you need for your project
        </p>
      </div>

      {/* Scrolling rows */}
      <div className="relative z-10 px-4 sm:px-10 lg:px-20">
        <div className="relative py-4">
          {/* Corner brackets */}
          <span className="absolute top-0 z-10 left-0 w-6 sm:w-10 h-6 sm:h-10 border-t-[1.5px] border-l-[1.5px] border-[var(--border)]" />
          <span className="absolute top-0 z-10 right-0 w-6 sm:w-10 h-6 sm:h-10 border-t-[1.5px] border-r-[1.5px] border-[var(--border)]" />
          <span className="absolute bottom-0 z-10 left-0 w-6 sm:w-10 h-6 sm:h-10 border-b-[1.5px] border-l-[1.5px] border-[var(--border)]" />
          <span className="absolute bottom-0 z-10 right-0 w-6 sm:w-10 h-6 sm:h-10 border-b-[1.5px] border-r-[1.5px] border-[var(--border)]" />

          <div className="flex flex-col gap-6 sm:gap-10">
            <Row direction="left" />
            <Row direction="right" />
            {/* Third row hidden on mobile to avoid crowding */}
            <div className="hidden sm:block">
              <Row direction="left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ direction = "left" }) {
  const items = new Array(8).fill(Client_Icon);

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-[10px] sm:gap-[15px] w-max ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
          }`}
      >
        {[...items, ...items].map((icon, i) => (
          <div
            key={i}
            className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] lg:w-[150px] lg:h-[150px] shrink-0 border border-[var(--card-border)] flex items-center justify-center bg-transparent"
          >
            <img
              src={icon}
              className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-contain opacity-80"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
