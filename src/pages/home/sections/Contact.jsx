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
    <section className="relative w-full min-h-screen bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(9,25,71,1)_100%)] py-20 flex flex-col items-center">
      <img
        src={Perspective}
        alt=""
        className="absolute left-0 top-0 h-full w-1/2 object-cover opacity-40 pointer-events-none"
      />
      <h1 className="text-4xl font-semibold text-white text-center">
        <span className="text-blue-400">Contact US</span>
      </h1>

      <h2 className="text-2xl text-white mt-2 text-center">
        Talk to Our Consultancy Expert Today
      </h2>

      <p className="text-gray-400 text-center mt-2">
        If You Have Any Query, Feel Free To Contact Us
      </p>

      <div className="w-full max-w-6xl mt-16 grid md:grid-cols-2 gap-10 items-start">
        <div className="grid grid-cols-3 gap-6">
          {cards.map((item, i) => (
            <div
              key={i}
              className="bg-[#0b1220] w-full h-[180px] rounded-2xl flex flex-col items-center justify-center text-center p-4"
            >
              <img
                src={item.icon}
                alt=""
                className="w-7 h-7 mb-3 object-contain"
              />

              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#0b1220] rounded-2xl p-6 w-full max-w-md mx-auto border border-blue-500/20">
          <h2 className="text-blue-400 text-xl mb-6">Get in Touch</h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-700/50 text-white px-4 py-2 rounded-md outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-700/50 text-white px-4 py-2 rounded-md outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="bg-gray-700/50 text-white px-4 py-2 rounded-md outline-none"
            />

            <input
              type="text"
              placeholder="What consultancy service do you want"
              className="bg-gray-700/50 text-white px-4 py-2 rounded-md outline-none"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="bg-gray-700/50 text-white px-4 py-2 rounded-md outline-none"
            />

            <button className="bg-gradient-to-r from-blue-600 to-blue-400 py-2 rounded-md text-white mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
