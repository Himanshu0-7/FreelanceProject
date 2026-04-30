export default function VisionSection() {
  return (
    <section className="w-full bg-[linear-gradient(270deg,rgba(0,0,0,1)_0%,rgba(9,25,71,1)_100%)] py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-15 items-stretch">
          {/* LEFT SIDE (2 CARDS) */}
          <div className="flex flex-col gap-10">
            {/* Vision */}
            <div className="bg-[#111827] p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Our Vision
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                At the core of everything we do is a commitment to trust,
                innovation, and excellence. We prioritize security-first
                thinking, transparent collaboration, and practical
                execution—ensuring every solution delivers real business impact
                while remaining adaptable for the future.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-[#111827] p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Our Mission
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our mission is to help organizations navigate the evolving
                digital landscape through secure, intelligent, and scalable
                solutions. We enable businesses to adopt cybersecurity,
                generative AI, and automation with confidence—driving
                efficiency, innovation, and sustainable growth.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE (1 BIG CARD) */}
          <div
            className="bg-[#111827] p-6 rounded-2xl 
self-center max-w-[500px]"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              Why Choose Us
            </h3>

            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <span className="font-semibold text-white">
                  Practical Expertise –{" "}
                </span>
                We focus on real implementation, not just theory
              </li>
              <li>
                <span className="font-semibold text-white">
                  Future-Ready Approach –{" "}
                </span>
                Solutions designed for scalability and evolving tech
              </li>
              <li>
                <span className="font-semibold text-white">
                  Security First Mindset –{" "}
                </span>
                Every solution is built with protection at its core
              </li>
              <li>
                <span className="font-semibold text-white">
                  Client-Centric Process –{" "}
                </span>
                We work as partners, not vendors
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
