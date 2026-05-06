import instagram from "../../../assets/Instagram.svg";
import linkedin from "../../../assets/LinkedIn.svg";
import twitter from "../../../assets/X.svg";
import facebook from "../../../assets/Facebook.svg";

const socials = [
  { name: "MSNG TECH", icon: instagram },
  { name: "MSNG TECH", icon: linkedin },
  { name: "MSNG TECH", icon: twitter },
  { name: "MSNG TECH", icon: facebook },
];

export default function FollowUs() {
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-[var(--text)] text-xl sm:text-2xl md:text-3xl font-semibold mb-10 sm:mb-16">
          Follow Us On:
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-10 justify-items-center">
          {socials.map((item, index) => (
            <div
              key={index}
              className="bg-[var(--card)] text-[var(--text)]
              w-full max-w-[140px] h-[80px] sm:h-[90px]
              rounded-2xl flex flex-col items-center justify-center gap-2 sm:gap-4
              border border-[var(--card-border)]
              hover:-translate-y-1 hover:scale-105 transition duration-300 cursor-pointer"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-6 sm:w-7 h-6 sm:h-7 object-contain"
              />
              <p className="text-xs sm:text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
