import React from "react";

const GiphyList = ({gif, handleRemoveGif}) => {
  return (
    <div key={gif.id} className="gif-item">
      <h3>{gif.title}</h3>
      <img src={gif.images.fixed_height.url} alt={gif.title} />
      <button
        onClick={() => handleRemoveGif(gif.id)}
        className="gif-remove-button"
      >
        Eliminar
      </button>
    </div>
  );
};

export default GiphyList;
