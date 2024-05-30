import { useState } from "react";

const SearchBar = (onSearch) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search Something..."
      value={query}
      onChange={handleChange}
      className="rounded-md p-3 w-64 h-8 border mt-1 mb-1 text-sm hidden md:block"
    />
  );
};

export default SearchBar;
