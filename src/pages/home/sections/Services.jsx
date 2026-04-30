import Background from "../../../assets/Background.png";
export default function Services() {
  const services = [
    {
      title: "Generative AI Service",
      // img: "/img1.jpg",
    },
    {
      title: "Agentic AI Service",
      // img: "/img2.jpg",
    },
    {
      title: "Cybersecurity Protection",
      // img: "/img3.jpg",
    },
  ];
  return (
    <section className="relative w-full min-h-screen   bg-[linear-gradient(270deg,rgba(0,0,0,1)_0%,rgba(9,25,71,1)_100%)] flex flex-col items-center py-20">
      <img
        src={Background}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0 pointer-events-none"
      />
      <h1 className="text-4xl md:text-5xl font-semibold text-center text-white">
        Our <span className="text-blue-400">Services</span>
      </h1>

      <p className="text-gray-300 text-center max-w-3xl mt-4">
        Our services are built to support digital transformation and long-term
        success. We provide expert consulting, scalable technology solutions,
        and end-to-end support.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 pb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[300px] rounded-2xl overflow-visible bg-white"
          >
            {/* <img */}
            {/* src={service.img} */}
            {/* alt={service.title} */}
            {/* className="w-full h-full object-cover" */}
            {/* /> */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
  bg-blue-600 px-6 py-3 rounded-xl text-white whitespace-nowrap"
            >
              {service.title}
            </div>
          </div>
        ))}
      </div>
      <button className="relative mt-16 px-10 py-4 rounded-full overflow-hidden">
        {/* Gradient background */}
        <span
          className="absolute inset-0 
        bg-[linear-gradient(90deg,rgba(11,37,110,1)_0%,rgba(7,113,186,1)_100%)]"
        ></span>

        {/* Content */}
        <span className="relative z-10 text-white font-semibold flex items-center gap-2">
          Hire Us Today →
        </span>
      </button>
    </section>
  );
}
