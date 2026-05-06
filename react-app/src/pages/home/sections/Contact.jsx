import { useState } from "react";
import Perspective from "../../../assets/Perspective-Grid.svg";
import locationIcon from "../../../assets/locationIcon.svg";
import phoneIcon from "../../../assets/phoneIcon.svg";
import mailIcon from "../../../assets/mailIcon.svg";
import { sendContactForm } from "../../../api/contactApi";

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

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await sendContactForm(form);

      alert(res.message);

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-dvh py-16 sm:py-20 flex flex-col items-center overflow-hidden bg-gradient-180-light dark:bg-gradient-180-dark px-6 sm:px-10 lg:px-16">
      {/* Background */}
      <img
        src={Perspective}
        alt=""
        className="absolute left-0 top-0 h-full w-full sm:w-1/2 object-cover opacity-20 sm:opacity-40 pointer-events-none"
      />

      {/* Header */}
      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text)]">
          <span className="text-[var(--primary)]">Contact Us</span>
        </h1>

        <h2 className="text-lg sm:text-2xl text-[var(--text)] mt-3 leading-relaxed">
          Talk to Our Consultancy Expert Today
        </h2>

        <p className="text-[var(--text-muted)] mt-2 text-sm sm:text-base leading-relaxed">
          If You Have Any Query, Feel Free To Contact Us
        </p>
      </div>

      {/* Main */}
      <div className="relative z-10 w-full max-w-6xl mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((item, i) => (
            <div
              key={i}
              className="bg-[var(--card)] rounded-2xl flex flex-row sm:flex-col items-center gap-4 text-left sm:text-center p-4 border border-[var(--border)]"
            >
              <img
                src={item.icon}
                alt=""
                className="w-7 h-7 shrink-0 sm:mb-3"
              />

              <div>
                <h3 className="text-[var(--text)] font-semibold text-sm sm:text-base">
                  {item.title}
                </h3>

                <p className="text-[var(--text-muted)] text-xs sm:text-sm mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[var(--card-hard)] rounded-2xl p-5 sm:p-6 w-full max-w-lg mx-auto border border-[var(--border)]"
        >
          <h2 className="text-[var(--primary)] text-lg sm:text-xl mb-5 sm:mb-6">
            Get in Touch
          </h2>

          <div className="flex flex-col gap-3 sm:gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-[var(--card-soft)] text-[var(--text)] px-4 py-3 rounded-md outline-none border border-transparent focus:border-[var(--primary)] transition"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-[var(--card-soft)] text-[var(--text)] px-4 py-3 rounded-md outline-none border border-transparent focus:border-[var(--primary)] transition"
            />

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="bg-[var(--card-soft)] text-[var(--text)] px-4 py-3 rounded-md outline-none border border-transparent focus:border-[var(--primary)] transition"
            />

            <input
              type="text"
              name="service"
              value={form.service}
              onChange={handleChange}
              placeholder="What consultancy service do you want?"
              className="bg-[var(--card-soft)] text-[var(--text)] px-4 py-3 rounded-md outline-none border border-transparent focus:border-[var(--primary)] transition"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="Message"
              className="bg-[var(--card-soft)] text-[var(--text)] px-4 py-3 rounded-md outline-none resize-none border border-transparent focus:border-[var(--primary)] transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="py-3 rounded-full text-white bg-btn-light dark:bg-btn-dark hover:opacity-90 transition duration-300 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
