import ContactHero from "./sections/ContactHero";
import ContactInfo from "./sections/ContactInfo";
import FollowUs from "./sections/FollowUs";

export default function Index() {
  return (
    <div className="relative overflow-hidden">
      {/* Global Gradient Background */}
      <div
        className="
          fixed inset-0 -z-10
          bg-gradient-180-light dark:bg-gradient-180-dark
        "
        style={{
          backgroundAttachment: "fixed",
        }}
      />

      <ContactHero />
      <ContactInfo />
      <FollowUs />
    </div>
  );
}
