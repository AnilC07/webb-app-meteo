import React, { useEffect, useState } from "react";
import { msToTime } from "./components/utile/Utile";

import SearchBar from "./components/SearchBar";
import Body from "./components/Body";

import "./App.css";

function App() {
  /****  VARIABLES D'ÉTATS ****/

  // VARIABLE D'ETAT POUR LA RECHERCHE
  const [searchInput, setSearchInput] = useState("seoul");
  const [isSearch, setIsSearch] = useState(true);

  // VARIABLES D'ETATS CONTENANT TOUS L'OBJET
  const [allData, setAllData] = useState([]);
  // VARIABLE D'ÉTAT CONTENANT LES INFORMATIONS SUR LA TEMPERATURE
  const [mainData, setMainData] = useState({
    temp: "",
    tempMin: "",
    tempMax: "",
    feelsLike: "",
    humidity: "",
    pressure :""
  });
  const [sys, setSys] = useState({ country: "", sunrise: "", sunset: "" });
  // VARIABLE D'ÉTAT CONTENANT LES INFORMATIONS SUR LE TEMPS
  const [weatherData, setWeatherData] = useState({
    main: "",
    description: "",
    icon: "",
  });
  // VARIABLE D'ÉTAT CONTENANT LES INFORMATIONS SUR LE TEMPS
  const [windData, setwindData] = useState({ speed: "", deg: "" });

  /****  FONCTIONS ****/
  // CAPTURE DE LA RECHERCHE UTILISATEUR
  const handleSearch = (search) => {
    setSearchInput(search);
    setIsSearch(true);
  };

  // ADRESSE URL DE L'API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=6619539068799ea239859ee81bff37c7&units=metric`;

  // HOOK QUI SE DÉCLENCHE À LA MODIFICATION DE 'SEARCHINPUT'
  useEffect(() => {
    if (isSearch) {
      fetch(url)
        .then((body) => {
          return body.json();
        })
        .then((response) => {
          // INJECTE À LA VARIABLE D'ÉTAT 'allData' TOUT L'OBJET JSON
          setAllData(response);
          // INJECTE À LA VARIABLE D'ÉTAT 'mainDATA' LES INFORMATIONS PRINCIPALE
          setMainData({
            temp: Math.round((response.main.temp)*10)/10,
            tempMin: Math.round((response.main.temp_min)*10)/10,
            tempMax: Math.round((response.main.temp_max)*10)/10,
            feelsLike: Math.round((response.main.feels_like)*10)/10,
            humidity: response.main.humidity,
            pressure : response.main.pressure
          });
          // INJECTE À LA VARIABLE D'ÉTAT 'SYS' LES INFORMATIONS SUR LE LEVER ET COUCHER DE SOLEIL
          setSys({
            country: response.sys.country.toLowerCase(),
            sunrise:  msToTime((response.sys.sunrise + response.timezone)*1000),
            sunset: msToTime((response.sys.sunset + response.timezone)*1000),
          });
          setWeatherData({
            main: response.weather[0].main,
            description:response.weather[0].description,
            icon: response.weather[0].icon,
          })
          setwindData({ speed: response.wind.speed, deg: response.wind.deg })
          console.log(mainData)
        });
    }
    setIsSearch(false);
    setSearchInput("")
  }, [isSearch, mainData, url]);

  // useEffect(() => {
  //   setWeatherData({...weatherData ,icone: weatherData.icon});
  // }, [allData,weatherData]);

  return (
    <>
      <SearchBar handleSearch={handleSearch}
     />

      <Body
        name={allData.name}
        sys={sys}
        mainData = {mainData}
        windData = {windData}
        weatherData={weatherData}
      />
    </>
  );
}

export default App;
