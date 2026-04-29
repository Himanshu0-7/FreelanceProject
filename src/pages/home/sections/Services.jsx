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
    <section className="w-full min-h-screen bg-[#01050e] flex flex-col items-center py-20">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-semibold text-center text-white">
        Our <span className="text-blue-400">Services</span>
      </h1>

      {/* Description */}
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
      {/* Button */}
      <button className="mt-16 bg-blue-600 px-8 py-3 rounded-full text-white hover:bg-blue-500 transition">
        Hire Us Today →
      </button>
    </section>
  );
}
