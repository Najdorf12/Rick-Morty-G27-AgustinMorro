import backgrick from "/backgrick.jpg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Location } from "./components/Location";
import { HandleSearch } from "./components/HandleSearch";
import { ResidentsCards } from "./components/ResidentsCards";

function App() {
  const [data, setData] = useState({});
  const [infoResident, setInfoResident] = useState({});
  const [datos, estableceDatos] = useState("");
  const hijoAPadre = (idSearch) => {
    estableceDatos(idSearch)
  };
  console.log(datos)
  

  useEffect(() => {
    let randomId = Math.floor(Math.random() * 126 + 1);

    axios
      .get(`https://rickandmortyapi.com/api/location/${ datos || randomId}`)
      .then((resp) => setData(resp.data))
      .catch((error) => console.error(error));
  }, [datos]);

  useEffect(() => {
    const residentsId = data?.residents?.map((resident) => {
      return resident.split("/").reverse()[0];
    });
    axios
      .get(`https://rickandmortyapi.com/api/character/${residentsId}`)
      .then((resp) => setInfoResident(resp.data))
      .catch((error) => console.error(error));
  }, [data]);

  

  return (
    <>
      <section className="nav-container">
        <img src={ backgrick } alt="icono-navbar" />
      </section>

      <HandleSearch hijoAPadre= { hijoAPadre } />
      <div className="wrapper-location">
      <Location content={ data } />
      </div>
      

      <h1>RESIDENTS</h1>
      <div className="card-container">
        <ResidentsCards content={ data.residents } infoResident={ infoResident } />
      </div>
    </>
  );
}

export default App;
