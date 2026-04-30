import Background from "../../../assets/Background.png";
import Perspective from "../../../assets/Perspective-Grid.svg";
import Client_Icon from "../../../assets/feedback_client_icon.svg";
export default function Feedback() {
  return (
    <section className="relative w-full  bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(9,25,71,1)_100%)]  py-20 flex flex-col gap-6">
      <img
        src={Background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0 pointer-events-none"
      />
      <img
        src={Perspective}
        alt=""
        className="absolute left-0 top-0 h-full w-1/2 object-cover opacity-100 pointer-events-none"
      />
      <div className="text-center mb-4">
        <h1 className="text-white text-4xl font-semibold">
          Client <span className="text-blue-400">We Served</span>
        </h1>
        <p className="text-white font-semibold text-xl mt-2 text-sm">
          One Platform Where you get all the Ideas you need for your project
        </p>
      </div>

      <div className="px-20">
        <div className="relative py-4">
          {/* Corner brackets */}
          <span className="absolute top-0 z-10 left-0 w-10 h-10 border-t-[1.5px] border-l-[1.5px] border-[#549cba]" />
          <span className="absolute top-0 z-10 right-0 w-10 h-10 border-t-[1.5px] border-r-[1.5px] border-[#549cba]" />
          <span className="absolute bottom-0 z-10 left-0 w-10 h-10 border-b-[1.5px] border-l-[1.5px] border-[#549cba]" />
          <span className="absolute bottom-0 z-10 right-0 w-10 h-10 border-b-[1.5px] border-r-[1.5px] border-[#549cba]" />

          <div className="flex flex-col gap-10">
            <Row direction="left" />
            <Row direction="right" />
            <Row direction="left" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ direction = "left" }) {
  const items = new Array(8).fill(Client_Icon);

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-[15px] w-max ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
          }`}
      >
        {[...items, ...items].map((icon, i) => (
          <div
            key={i}
            className="w-[150px] h-[150px] shrink-0  border border-[#5a7a89] flex items-center justify-center"
          >
            <img src={icon} className="w-20 h-20 object-contain opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
}
