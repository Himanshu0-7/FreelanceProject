import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import imgSrc from "../../assets/logo.png";

// 👉 your custom icons
import sunIcon from "../../assets/lightMode.svg";
import moonIcon from "../../assets/darkMode.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav className="relative w-full h-16 fixed top-0 left-0 z-50 bg-[var(--bg-secondary)] backdrop-blur-md">
      <div className="w-full flex items-center justify-between px-12 xl:px-20 h-full">
        {/* Logo */}
        <div className="text-[var(--text)] text-xl font-bold">
          <img src={imgSrc} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 text-[var(--text)]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[var(--primary)] font-semibold border-b-4 border-[var(--primary)] pb-5"
                      : "hover:text-[var(--primary)] transition"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Theme Toggle (Custom Icons) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[var(--card-soft)] transition"
          >
            <img
              src={dark ? sunIcon : moonIcon}
              alt="theme toggle"
              className="w-5 h-5"
            />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-[var(--text)] cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gradient-180-light dark:bg-gradient-180-dark px-6 pb-4">
          <ul className="flex flex-col gap-4 text-[var(--text)]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="block py-2 border-b border-[var(--border)]"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Theme Toggle Mobile */}
            <li>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 py-2 text-[var(--text)]"
              >
                <img
                  src={dark ? sunIcon : moonIcon}
                  alt=""
                  className="w-5 h-5"
                />
                {dark ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
