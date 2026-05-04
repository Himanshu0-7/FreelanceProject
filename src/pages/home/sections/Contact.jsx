import Perspective from "../../../assets/Perspective-Grid.svg";
import locationIcon from "../../../assets/locationIcon.svg";
import phoneIcon from "../../../assets/phoneIcon.svg";
import mailIcon from "../../../assets/mailIcon.svg";

export default function Contact() {
  const cards = [
    {
      title: "Our Main Office",
      desc: "abc Street, B-Block, 2nd floor",
      icon: locationIcon,
    },
    {
      title: "Phone Number",
      desc: "+91 1111 0000 22",
      icon: phoneIcon,
    },
    {
      title: "E-mail",
      desc: "abc@gmail.com",
      icon: mailIcon,
    },
  ];

  return (
    <section className="relative w-full min-h-screen py-16 sm:py-20 flex flex-col items-center bg-gradient-180-light dark:bg-gradient-180-dark px-6 sm:px-10 lg:px-16">
      {/* Background decoration */}
      <img
        src={Perspective}
        alt=""
        className="absolute left-0 top-0 h-full w-full sm:w-1/2 object-cover opacity-20 sm:opacity-40 pointer-events-none"
      />

      {/* Header */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[var(--text)]">
          <span className="text-[var(--primary)]">Contact Us</span>
        </h1>
        <h2 className="text-lg sm:text-2xl text-[var(--text)] mt-2">
          Talk to Our Consultancy Expert Today
        </h2>
        <p className="text-[var(--text-muted)] mt-2 text-sm sm:text-base">
          If You Have Any Query, Feel Free To Contact Us
        </p>
      </div>

      {/* Main grid — stacks on mobile, side by side on md+ */}
      <div className="relative z-10 w-full max-w-6xl mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left — info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((item, i) => (
            <div
              key={i}
              className="bg-[var(--card)] w-full h-auto sm:h-[180px] rounded-2xl flex flex-row sm:flex-col items-center sm:justify-center gap-4 sm:gap-0 text-left sm:text-center p-4"
            >
              <img
                src={item.icon}
                alt=""
                className="w-7 h-7 sm:mb-3 object-contain shrink-0"
              />
              <div>
                <h3 className="text-[var(--text)] font-semibold text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-[var(--text-muted)] text-xs sm:text-sm mt-0.5 sm:mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right — contact form */}
        <div className="bg-[var(--card-hard)] rounded-2xl p-5 sm:p-6 w-full max-w-lg mx-auto border border-[var(--border)]">
          <h2 className="text-[var(--primary)] text-lg sm:text-xl mb-5 sm:mb-6">
            Get in Touch
          </h2>
          <form className="flex flex-col gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[var(--card-soft)] text-[var(--text)] px-4 py-2.5 rounded-md outline-none text-sm sm:text-base"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[var(--card-soft)] text-[var(--text)] px-4 py-2.5 rounded-md outline-none text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-[var(--card-soft)] text-[var(--text)] px-4 py-2.5 rounded-md outline-none text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="What consultancy service do you want?"
              className="bg-[var(--card-soft)] text-[var(--text)] px-4 py-2.5 rounded-md outline-none text-sm sm:text-base"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="bg-[var(--card-soft)] text-[var(--text)] px-4 py-2.5 rounded-md outline-none resize-none text-sm sm:text-base"
            />
            <button className="py-2.5 rounded-full text-white mt-1 bg-btn-light dark:bg-btn-dark hover:opacity-90 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
