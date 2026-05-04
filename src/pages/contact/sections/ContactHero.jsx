import PerspectiveImg from "../../../assets/Perspective-Grid.svg";
import locationIcon from "../../../assets/locationIcon.svg";
import phoneIcon from "../../../assets/phoneIcon.svg";
import mailIcon from "../../../assets/mailIcon.svg";

export default function ContactHero() {
  const cards = [
    {
      icon: locationIcon,
      title: "Our Main Office",
      desc: "abc Street, B-Block, 2nd floor",
    },
    { icon: phoneIcon, title: "Phone Number", desc: "+91 1111 0000 22" },
    { icon: mailIcon, title: "E-mail", desc: "abc@gmail.com" },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 bg-gradient-180-light dark:bg-gradient-180-dark">
      {/* Background Grid */}
      <img
        src={PerspectiveImg}
        alt=""
        className="absolute left-0 top-0 h-full w-full sm:w-1/2 object-cover opacity-20 sm:opacity-40 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[var(--primary)] text-xl sm:text-2xl md:text-3xl font-semibold mb-3">
            Contact Us
          </h2>
          <h3 className="text-[var(--text)] text-lg sm:text-xl md:text-2xl font-semibold mb-2">
            Talk to Our Consultancy Expert Today
          </h3>
          <p className="text-[var(--text-muted)] text-sm">
            If You Have Any Query, Feel Free To Contact Us
          </p>
        </div>

        {/* Main grid — stacks on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* LEFT — info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {cards.map((item, i) => (
              <div
                key={i}
                className="bg-[var(--card)] px-4 sm:px-6 py-6 sm:py-8 rounded-2xl w-full
                flex flex-row sm:flex-col items-center sm:items-center gap-4 sm:gap-0
                text-left sm:text-center"
              >
                <div className="flex justify-center shrink-0 sm:mb-3">
                  <img src={item.icon} className="w-6 h-6" alt="" />
                </div>
                <div>
                  <p className="text-[var(--text)] font-semibold text-sm sm:text-base">
                    {item.title}
                  </p>
                  <p className="text-[var(--text-muted)] text-xs mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — form */}
          <div className="w-full bg-[var(--card)] p-6 sm:p-8 rounded-2xl border border-[var(--border)]">
            <h3 className="text-[var(--primary)] text-2xl sm:text-3xl lg:text-4xl font-semibold mb-5 sm:mb-6">
              Get in Touch
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {[
                "Your Name",
                "Your Email",
                "Phone Number",
                "What consultancy service do you want",
              ].map((placeholder, i) => (
                <input
                  key={i}
                  placeholder={placeholder}
                  className="w-full bg-[var(--card-soft)] text-[var(--text)] px-4 py-2.5 sm:py-3 rounded-md outline-none text-sm sm:text-base"
                />
              ))}
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full bg-[var(--card-soft)] text-[var(--text)] px-4 py-2.5 sm:py-3 rounded-md outline-none resize-none text-sm sm:text-base"
              />
              <button className="w-full bg-btn-light dark:bg-btn-dark text-white py-2.5 sm:py-3 rounded-full hover:opacity-90 transition text-sm sm:text-base">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
