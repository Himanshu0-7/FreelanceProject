import PerspectiveImg from "../../../assets/Perspective-Grid.svg";
import locationIcon from "../../../assets/locationIcon.svg";
import phoneIcon from "../../../assets/phoneIcon.svg";
import mailIcon from "../../../assets/mailIcon.svg";

export default function ContactHero() {
  return (
    <section className="relative w-full py-20 bg-gradient-180-light dark:bg-gradient-180-dark">
      {/* Background Grid */}
      <img
        src={PerspectiveImg}
        alt=""
        className="absolute left-0 top-0 h-full w-1/2 object-cover opacity-40 pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[var(--primary)] text-2xl md:text-3xl font-semibold mb-3">
            Contact US
          </h2>

          <h3 className="text-[var(--text)] text-xl md:text-2xl font-semibold mb-2">
            Talk to Our Consultancy Expert Today
          </h3>

          <p className="text-[var(--text-muted)] text-sm">
            If You Have Any Query, Feel Free To Contact Us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* LEFT CARDS */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  icon: locationIcon,
                  title: "Our Main Office",
                  desc: "abc Street,B-Block,2nd floor",
                },
                {
                  icon: phoneIcon,
                  title: "Phone Number",
                  desc: "+91 1111 0000 22",
                },
                {
                  icon: mailIcon,
                  title: "E-mail",
                  desc: "abc@gmail.com",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[var(--card)] px-8 py-10 rounded-2xl w-[200px] text-center"
                >
                  <div className="flex justify-center mb-3">
                    <img src={item.icon} className="w-6 h-6" />
                  </div>

                  <p className="text-[var(--text)] font-semibold">
                    {item.title}
                  </p>

                  <p className="text-[var(--text-muted)] text-[10px] mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className="max-w-[600px] w-full ml-auto 
            bg-[var(--card)] p-8 rounded-2xl border border-[var(--border)]"
          >
            <h3 className="text-[var(--primary)] text-4xl font-semibold mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4">
              {[
                "Your Name",
                "Your Email",
                "Phone Number",
                "What consultancy service do you want",
              ].map((placeholder, i) => (
                <input
                  key={i}
                  placeholder={placeholder}
                  className="w-full bg-[var(--card-soft)] text-[var(--text)] px-4 py-3 rounded-md outline-none"
                />
              ))}

              <textarea
                rows="4"
                placeholder="Message"
                className="w-full bg-[var(--card-soft)] text-[var(--text)] px-4 py-3 rounded-md outline-none"
              />

              <button className="w-full bg-btn-light dark:bg-btn-dark text-white py-3 rounded-full">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
