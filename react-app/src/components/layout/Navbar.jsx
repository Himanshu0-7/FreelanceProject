import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import imgSrc from "../../assets/logo.png";
import sunIcon from "../../assets/lightMode.svg";
import moonIcon from "../../assets/darkMode.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  // Load theme on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  // Toggle theme + save
  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };
  // Add shadow when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  return (
    <nav
      ref={menuRef}
      className={`fixed top-0 left-0 w-full z-50 bg-[var(--bg-secondary)] backdrop-blur-md transition-shadow duration-300 ${scrolled ? "shadow-md shadow-black/10" : ""
        }`}
    >
      <div className="w-full flex items-center justify-between px-6 sm:px-10 xl:px-20 h-16">
        {/* Logo */}
        <NavLink to="/">
          <img src={imgSrc} alt="Logo" className="h-8 sm:h-10 w-auto" />
        </NavLink>

        {/* Desktop nav + theme toggle */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 lg:gap-8 text-[var(--text)]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[var(--primary)] font-semibold border-b-2 border-[var(--primary)] pb-1"
                      : "hover:text-[var(--primary)] transition"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[var(--card-soft)] transition"
            aria-label="Toggle theme"
          >
            <img src={dark ? sunIcon : moonIcon} alt="" className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile — theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[var(--card-soft)] transition"
            aria-label="Toggle theme"
          >
            <img src={dark ? sunIcon : moonIcon} alt="" className="w-5 h-5" />
          </button>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="text-[var(--text)] p-2 rounded-md hover:bg-[var(--card-soft)] transition"
            aria-label="Toggle menu"
          >
            {/* Animated hamburger → X */}
            <div className="w-5 flex flex-col gap-[5px]">
              <span
                className={`block h-[2px] bg-current rounded transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""
                  }`}
              />
              <span
                className={`block h-[2px] bg-current rounded transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""
                  }`}
              />
              <span
                className={`block h-[2px] bg-current rounded transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu — animated slide down */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col bg-[var(--bg-secondary)] backdrop-blur-md px-6 pb-4 pt-2 gap-1 text-[var(--text)]">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block py-3 border-b border-[var(--border)] text-sm font-medium transition ${isActive
                    ? "text-[var(--primary)]"
                    : "hover:text-[var(--primary)]"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
