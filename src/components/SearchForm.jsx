import { useState } from "react";

function SearchForm({ setQuery, query }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setQuery(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Enter</button>
    </form>
  );
}

export default SearchForm;
