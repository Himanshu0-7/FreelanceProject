import Perspective from "../../../assets/Perspective-Grid.svg";
import locationIcon from "../../../assets/locationIcon.svg";
import phoneIcon from "../../../assets/phoneIcon.svg";
import mailIcon from "../../../assets/mailIcon.svg";

export default function Contact() {
  const cards = [
    {
      title: "Our Main Office",
      desc: "abc Street,B-Block,2nd floor",
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
    <section className="relative w-full min-h-screen py-20 flex flex-col items-center bg-gradient-180-light dark:bg-gradient-180-dark">
      <img
        src={Perspective}
        alt=""
        className="absolute left-0 top-0 h-full w-1/2 object-cover opacity-40 pointer-events-none"
      />

      <h1 className="text-4xl font-semibold text-[var(--text)] text-center">
        <span className="text-[var(--primary)]">Contact US</span>
      </h1>

      <h2 className="text-2xl text-[var(--text)] mt-2 text-center">
        Talk to Our Consultancy Expert Today
      </h2>

      <p className="text-[var(--text-muted)] text-center mt-2">
        If You Have Any Query, Feel Free To Contact Us
      </p>

      <div className="w-full max-w-6xl mt-16 grid md:grid-cols-2 gap-10 items-start">
        <div className="grid grid-cols-3 gap-6">
          {cards.map((item, i) => (
            <div
              key={i}
              className="bg-[var(--card)] w-full h-[180px] rounded-2xl flex flex-col items-center justify-center text-center p-4"
            >
              <img
                src={item.icon}
                alt=""
                className="w-7 h-7 mb-3 object-contain"
              />

              <h3 className="text-[var(--text)] font-semibold">{item.title}</h3>
              <p className="text-[var(--text-muted)] text-sm mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[var(--card-hard)] rounded-2xl p-6 w-full max-w-lg mx-auto border border-[var(--border)]">
          <h2 className="text-[var(--primary)] text-xl mb-6">Get in Touch</h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[var(--card-soft)] text-[var(--text)] px-4 py-2 rounded-md outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-[var(--card-soft)] text-[var(--text)] px-4 py-2 rounded-md outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="bg-[var(--card-soft)] text-[var(--text)] px-4 py-2 rounded-md outline-none"
            />

            <input
              type="text"
              placeholder="What consultancy service do you want"
              className="bg-[var(--card-soft)] text-[var(--text)] px-4 py-2 rounded-md outline-none"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="bg-[var(--card-soft)] text-[var(--text)] px-4 py-2 rounded-md outline-none"
            />

            <button className="py-2 rounded-4xl text-white mt-2 bg-btn-light dark:bg-btn-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
