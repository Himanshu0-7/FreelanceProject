import { useState } from "react";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // "loading" | "success" | "error" | "invalid"

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async () => {
    if (!email.trim()) {
      setStatus("invalid");
      return;
    }
    if (!validateEmail(email)) {
      setStatus("invalid");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/newsletter`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <footer className="w-full bg-[#12151d] text-white py-16 border-t border-blue-500/20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.2fr_1fr_1.8fr] gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="MSNG Logo"
              className="w-15 h-15 object-contain"
            />
            <h2 className="text-lg font-semibold">MSNG Technologies</h2>
          </div>
          <p className="font-semibold text-white text-sm leading-relaxed">
            Building smarter, safer, and stronger digital businesses.
          </p>
          <div className="font-semibold text-white text-sm space-y-1">
            <p>info@msngtechnologies.com</p>
            <p>91-9030299300</p>
            <p>abc, 97 street, B-block</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-[#42b9f4] text-2xl mb-4">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-2 text-white font-semibold">
            {["Home", "About", "Services", "Blogs", "Contact"].map((item) => (
              <li
                key={item}
                onClick={() => navigate(`/${item.toLowerCase()}`)}
                className="hover:text-blue-400 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold text-[#42b9f4] text-2xl mb-4">
            Newsletter
          </h2>
          <p className="font-semibold text-white text-sm mb-4 leading-relaxed max-w-xs">
            Wanna know what we are upto. Signup for the Newsletter to join us.
          </p>

          {/* Success message */}
          {status === "success" ? (
            <div className="mt-10 bg-green-500/20 border border-green-500/40 rounded-lg px-4 py-4 text-green-400 text-sm font-semibold text-center">
              ✓ You're subscribed! Check your inbox.
            </div>
          ) : (
            <>
              <div className="flex w-full h-[50px] mt-10 bg-white rounded-lg overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus(null);
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  className="flex-1 min-w-0 bg-white text-black px-4 py-2 outline-none text-sm"
                />
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="flex-shrink-0 w-44 bg-[linear-gradient(90deg,rgba(11,37,110,1)_0%,rgba(7,113,186,1)_100%)] py-2 text-sm border border-white/40 font-semibold hover:opacity-90 transition rounded-lg disabled:opacity-60"
                >
                  {status === "loading" ? "Submitting..." : "Submit"}
                </button>
              </div>

              {/* Validation error */}
              {status === "invalid" && (
                <p className="text-red-400 text-xs mt-2 pl-1">
                  Please enter a valid email address.
                </p>
              )}

              {/* Server error */}
              {status === "error" && (
                <p className="text-red-400 text-xs mt-2 pl-1">
                  Something went wrong. Please try again.
                </p>
              )}
            </>
          )}
        </div>
      </div>

      <div className="font-semibold mt-16 pt-6 text-center text-white text-sm">
        © Copyright MSNG Technologies. All Rights Reserved
      </div>
    </footer>
  );
}
