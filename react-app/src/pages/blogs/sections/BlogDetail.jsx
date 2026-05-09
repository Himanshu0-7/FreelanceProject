import { useParams, useNavigate } from "react-router-dom";
import blogsData from "../../../data/blogsData";

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[var(--text)]">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Blog not found</h2>
          <button
            onClick={() => navigate("/blogs")}
            className="px-6 py-3 rounded-full text-white bg-btn-light dark:bg-btn-dark"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  const BulletList = ({ items }) => (
    <ul className="mt-3 space-y-2 pl-4">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-[var(--text-muted)] text-sm leading-relaxed"
        >
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );

  const renderSection = (section, i) => (
    <div key={i} className="flex flex-col gap-4">
      {/* Section heading */}
      <h2 className="text-2xl font-semibold text-[var(--text)] border-l-4 border-[var(--primary)] pl-4">
        {section.heading}
      </h2>

      {/* Paragraph */}
      {section.content && (
        <p className="text-[var(--text-muted)] text-base leading-loose">
          {section.content}
        </p>
      )}

      {/* Top-level bullets */}
      {section.bullets && <BulletList items={section.bullets} />}

      {/* Subsections */}
      {section.subsections && (
        <div className="flex flex-col gap-6 mt-2">
          {section.subsections.map((sub, j) => (
            <div key={j}>
              <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">
                {sub.title}
              </h3>
              {sub.content && (
                <p className="text-[var(--text-muted)] text-sm leading-loose">
                  {sub.content}
                </p>
              )}
              {sub.bullets && <BulletList items={sub.bullets} />}
            </div>
          ))}
        </div>
      )}

      {/* Divider between sections */}
      <hr className="border-[var(--card-soft)] mt-4" />
    </div>
  );

  return (
    <section className="w-full min-h-screen bg-gradient-270-light dark:bg-gradient-270-dark">
      {/* HERO */}
      <div className="w-full bg-[var(--card-bg)] py-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => navigate("/blogs")}
            className="mb-8 flex items-center gap-2 text-[var(--primary)] text-sm hover:opacity-70 transition"
          >
            ← Back to Blogs
          </button>
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-4 block">
            {blog.tag}
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold text-[var(--text)] mb-6 leading-tight">
            {blog.title}
          </h1>
          <div className="w-16 h-1 rounded-full bg-[var(--primary)] mb-6" />
          <p className="text-[var(--text-muted)] text-base md:text-lg leading-loose">
            {blog.intro}
          </p>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 flex flex-col gap-10">
        {blog.sections.map((section, i) => renderSection(section, i))}

        {/* CONCLUSION */}
        <div className="relative bg-[var(--card-bg)] rounded-3xl p-8 overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-[var(--primary)]" />
          <div className="pl-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-3 block">
              Conclusion
            </span>
            <p className="text-[var(--text-muted)] text-base leading-loose">
              {blog.conclusion}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[var(--card-bg)] rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">
            Want to learn more about{" "}
            <span className="text-[var(--primary)]">{blog.tag}?</span>
          </h2>
          <p className="text-[var(--text-muted)] text-sm mb-8 max-w-xl mx-auto">
            Talk to our experts at MSNG Technologies and discover how we can
            help your business grow.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 rounded-full text-white bg-btn-light dark:bg-btn-dark hover:opacity-90 transition"
            >
              Talk to Our Expert
            </button>
            <button
              onClick={() => navigate("/blogs")}
              className="px-8 py-3 rounded-full bg-[var(--card)] text-[var(--text)] hover:opacity-90 transition"
            >
              Read More Blogs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
