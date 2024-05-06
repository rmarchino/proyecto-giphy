import { useState } from "react";
import axios from "axios";
import "./App.css";
import Spinner from "../utils/Spiner";
import BuscarGiphy from "./components/BuscarGiphy";
import GiphyList from "./components/GiphyList";

function App() {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = "L4EwiU7OuK5m6bbSd8Izirn0gOEjg7qg&q";

  const fetchGifs = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}=${search}&limit=20`
      );
      setGifs(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error en la carga de los Gifs", error);
      setIsLoading(false);
    }
  };

  //Búsqueda capturando el carácter ingresado
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  //Búsqueda - Botón
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      fetchGifs();
    }
  };

  //Limpia todo el array
  const handleClearGifs = () => {
    setGifs([]); 
    setSearch("");
  };

  //Elimina el GIF específico
  const handleRemoveGif = (id) => {
    setGifs(gifs.filter((gif) => gif.id != id));
  };

  return (
    <>
      <div className="giphy-search-container">
        <h2 className="titulo-center">Busca tus Gifs con comunidad</h2>
        <BuscarGiphy 
          handleSearchChange={handleSearchChange}
          handleSubmit={handleSubmit}
          search={search}
          handleClearGifs={handleClearGifs}
        />

        {isLoading ? (
          <Spinner />
        ) : (
          <div className="gif-container">
            {gifs.map((gif) => (
              <GiphyList
                key={gif.id}
                gif={gif}
                handleRemoveGif={handleRemoveGif}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
