import { useState } from "react";
import { NavLink } from "react-router-dom";
import imgSrc from "../../assets/logo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "Industries", path: "/industries" },
  ];

  return (
    <nav className="w-full h-16 fixed top-0 left-0 z-50 bg-[#030614] backdrop-blur-md border-b border-white/10 ">
      <div className="w-full flex items-center justify-between px-12 xl:px-20 h-full">
        <div className="text-white text-xl font-bold">
          <img src={imgSrc} alt="Logo" className="h-10 w-auto" />
        </div>

        <ul className="flex items-center gap-8 text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400 font-semibold border-b border-blue-400 pb-5"
                    : "hover:text-blue-400 transition"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 px-6 pb-4">
          <ul className="flex flex-col gap-4 text-white">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="block py-2 border-b border-gray-700"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
