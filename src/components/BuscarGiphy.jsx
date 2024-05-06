import React from "react";

const BuscarGiphy = ({
  handleSubmit,
  handleSearchChange,
  search,
  handleClearGifs,
}) => {
  return (
    <form onSubmit={handleSubmit} className="giphy-search-form">
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Buscar GIFs, Ejm. Love"
        className="giphy-search-input"
      />
      <button type="submit" className="giphy-search-button">
        Buscar
      </button>

      <button
        type="button"
        onClick={handleClearGifs}
        className="giphy-search-button"
      >
        Limpiar
      </button>
    </form>
  );
};

export default BuscarGiphy;
