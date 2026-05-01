import PerspectiveImg from "../../../assets/Perspective-Grid.svg";
import locationIcon from "../../../assets/locationIcon.svg";
import phoneIcon from "../../../assets/phoneIcon.svg";
import mailIcon from "../../../assets/mailIcon.svg";
export default function ContactHero() {
  return (
    <section className="relative w-full bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(9,25,71,1)_100%)] py-20">
      <img
        src={PerspectiveImg}
        alt=""
        className="absolute left-0 top-0 h-full w-1/2 object-cover opacity-60 pointer-events-none"
      />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 text-2xl md:text-3xl font-semibold mb-3">
            Contact US
          </h2>

          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
            Talk to Our Consultancy Expert Today
          </h3>

          <p className="text-gray-300 text-sm">
            If You Have Any Query, Feel Free To Contact Us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative flex gap-8">
              <div className="bg-[#0b1220] px-8 py-10 rounded-2xl w-[200px] text-center">
                <div className="flex justify-center mb-3">
                  <img src={locationIcon} alt="" className="w-6 h-6" />
                </div>
                <p className="text-white text-xm font-semibold">
                  Our Main Office
                </p>
                <p className="text-white/90 text-[10px] mt-1">
                  abc Street,B-Block,2nd floor
                </p>
              </div>

              <div className="bg-[#0b1220] px-8 py-10 rounded-2xl w-[200px] text-center">
                <div className="flex justify-center mb-3">
                  <img src={phoneIcon} alt="" className="w-6 h-6" />
                </div>
                <p className="text-white text-xm font-semibold">Phone Number</p>
                <p className="text-white/90 text-[10px] mt-1">
                  +91 1111 0000 22
                </p>
              </div>

              <div className="bg-[#0b1220] px-8 py-10 rounded-2xl w-[200px] text-center">
                <div className="flex justify-center mb-3">
                  <img src={mailIcon} alt="" className="w-6 h-6" />
                </div>
                <p className="text-white text-xm font-semibold">E-mail</p>
                <p className="text-white/90 text-[10px] mt-1">abc@gmail.com</p>
              </div>
            </div>
          </div>

          <div
            className="max-w-[600px] w-full ml-auto 
          bg-[#0b1220] p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-blue-400 text-4xl font-semibold mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4">
              <input
                className="w-full bg-gray-600/30 text-white px-4 py-3 rounded-md"
                placeholder="Your Name"
              />
              <input
                className="w-full bg-gray-600/30 text-white px-4 py-3 rounded-md"
                placeholder="Your Email"
              />
              <input
                className="w-full bg-gray-600/30 text-white px-4 py-3 rounded-md"
                placeholder="Phone Number"
              />
              <input
                className="w-full bg-gray-600/30 text-white px-4 py-3 rounded-md"
                placeholder="What consultancy service do you want"
              />
              <textarea
                className="w-full bg-gray-600/30 text-white px-4 py-3 rounded-md"
                rows="4"
                placeholder="Message"
              />

              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-full">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
