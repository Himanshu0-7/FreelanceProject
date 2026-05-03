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
    <section className="w-full bg-gradient-90-light dark:bg-gradient-90-dark py-20">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-[var(--text)] text-2xl md:text-3xl font-semibold mb-16">
          Follow Us On:
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
          {socials.map((item, index) => (
            <div
              key={index}
              className="bg-[var(--card)] text-[var(--text)] w-[120px] h-[90px]
              rounded-2xl flex flex-col items-center justify-center gap-4
              border border-[var(--card-border)]
              hover:-translate-y-1 hover:scale-105 transition duration-300"
            >
              <img src={item.icon} alt="" className="w-7 h-7 object-contain" />

              <p className="text-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
