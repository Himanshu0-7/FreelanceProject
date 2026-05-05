import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#12151d] text-white py-16 border-t border-blue-500/20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr_1fr_1.8fr] gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="MS Tech Logo"
              className="w-15 h-15 object-contain"
            />
            <h2 className="text-lg font-semibold">MS Tech</h2>
          </div>

          <p className="font-semibold text-white text-sm leading-relaxed">
            Building smarter, safer, and stronger digital businesses.
          </p>

          <div className="font-semibold text-white text-sm space-y-1">
            <p>info@syntax.com</p>
            <p>91-9030299300</p>
            <p>abc, 97 street,B-block</p>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-[#42b9f4] text-2xl mb-4">
            Quick Links
          </h2>

          <ul className="flex flex-col gap-2 text-white font-semibold">
            {["Home", "About", "Services", "Projects", "News"].map((item) => (
              <li
                key={item}
                className="hover:text-blue-400 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-[#42b9f4] text-2xl mb-4">
            Newsletter
          </h2>

          <p className="font-semibold text-white text-sm mb-4 leading-relaxed max-w-xs">
            Wanna know what we are upto. Signup For the Newsletter to join us.
          </p>

          <div className="flex w-full h-[50px] mt-10 bg-white rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 min-w-0 bg-white text-black px-4 py-2 outline-none text-sm"
            />
            <button className="flex-shrink-0 w-44 bg-[linear-gradient(90deg,rgba(11,37,110,1)_0%,rgba(7,113,186,1)_100%)] py-2 text-sm border border-white/40 font-semibold hover:opacity-90 transition rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="font-semibold mt-16 pt-6 text-center text-white text-sm">
        © Copyright MS Tech . All Right Reserved
      </div>
    </footer>
  );
}
