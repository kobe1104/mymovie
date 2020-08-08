import React from "react";

export function ListGroup({
  genres,
  handleItemSelect,
  textProp,
  valProp,
  currentGenre,
}) {
  const getActiveClass = (g) => {
    const currG = currentGenre ? currentGenre : genres[0];
    return currG[valProp] === g[valProp]
      ? "list-group-item active"
      : "list-group-item";
  };
  return (
    <ul className="list-group">
      {genres.map((g) => (
        <li
          className={getActiveClass(g)}
          key={g[textProp]}
          onClick={() => handleItemSelect(g)}
        >
          {g[textProp]}
        </li>
      ))}
    </ul>
  );
}
ListGroup.defaultProps = {
  textProp: "name",
  valProp: "_id",
};
