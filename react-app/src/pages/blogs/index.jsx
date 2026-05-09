import { useState } from "react";
import BlogCards from "./sections/BlogsCard";
import BlogSearch from "./sections/BlogSearch";
export default function index() {
  const [query, setQuery] = useState("");
  return (
    <>
      <BlogSearch query={query} setQuery={setQuery} />
      <BlogCards query={query} />
    </>
  );
}
