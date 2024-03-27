import React from "react";

export default function TagsComponents({tagName, handleTags, selected}) {
  const styles = {
    HTML: { backgroundColor: "#DD4B25"},
    CSS: { backgroundColor: "#2862E9" },
    JavaScript: { backgroundColor: "#EFD81D" },
    React: { backgroundColor: "#5ED3F3" },
    Default: { backgroundColor: "white" },
  };

  return (
    <button
      onClick={() => handleTags(tagName)}
      style={selected ? styles[tagName] : styles.Default}
      type="button"
      className="tagBtn btn btn-secondary text-dark ms-2"
    >
      {tagName}
    </button>
  );
}
