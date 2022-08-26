import React, { useEffect, useState } from "react";
import * as WiIcons from "react-icons/wi";
import weatherIcons from "./utile/weatherIcons";

import "./Body.css";

function Body({ name, sys, mainData, windData, weatherData }) {
  // let iconKey = weatherData.main;
  // console.log(iconKey);

  console.log(weatherData);
  const [reactIcon, setReactIcon] = useState("");

  useEffect(() => {
    setReactIcon(weatherData.main);
  }, [ weatherData.main]);

  console.log(reactIcon);

  return (
    <div className="main">
      {/* Drapeau de background */}
      <img
        src={`https://flagcdn.com/${sys.country}.svg`}
        className="main__image"
        alt={mainData.country}
      />
      {/* Drapeau de background */}

      {/* Div pour le nom de la ville recherché */}
      <div className="main__city">
        <h2>{name}</h2>
      </div>
      {/* Fin de la div pour le nom de la ville recherché */}

      {/* Div pour l'icone de la météo actuelle */}
      <div className="main__weather">
        {/* Div icone principale */}
        <div className="main__weather__icon">
          {reactIcon.includes("Clear") ? (
            <WiIcons.WiDaySunny size={"9em"} />
          ) : (
            <p style={{ display: "none" }}></p>
          )}
          {reactIcon.includes("Thunderstorm") ? (
            <WiIcons.WiThunderstorm size={"9em"} />
          ) : (
            <p style={{ display: "none" }}></p>
          )}
          {reactIcon.includes("Drizzle") ? (
            <WiIcons.WiDayRainMix size={"9em"} />
          ) : (
            <p style={{ display: "none" }}></p>
          )}
          {reactIcon.includes("Rain") ? (
            <WiIcons.WiDayRain size={"9em"} />
          ) : (
            <p style={{ display: "none" }}></p>
          )}
          {reactIcon.includes("Snow") ? (
            <WiIcons.WiDaySnow size={"9em"} />
          ) : (
            <p style={{ display: "none" }}></p>
          )}
          {reactIcon.includes("Clouds") ? (
            <WiIcons.WiCloud size={"9em"} />
          ) : (
            <p style={{ display: "none" }}></p>
          )}
        </div>
        {/* Fin de la div pour l'icone principale */}

        {/* Div pour les icones secondaire */}
        <div className="main__weather__icon--other">
          <i>
            <WiIcons.WiBarometer size={"3em"} />
          </i>
          <p>{mainData.pressure} hPa</p>
          <i>
            <WiIcons.WiWindDeg
              size={"3em"}
              style={{ transform: `rotate(${windData.deg-90}deg)` }}
            />
          </i>
          <p>
            {windData.deg}&deg;
            {/* <WiIcons.WiDegrees size={"3em"} /> */}
          </p>
          <i>
            <WiIcons.WiHumidity size={"3em"} />
          </i>
          <p>{mainData.humidity}&#37;</p>
        </div>
        {/* Fin de la div pour les icones secondaire */}
      </div>
      {/* Fin de la div pour la météo actuelle */}

      {/* Div pour l'affichage de la temperature actuelle et les extremes */}
      <div className="main__Temp">
        {/* Div de la temperature actuelle */}
        <div className="main__temp__actuelle">
          <i>
            <WiIcons.WiThermometer size={"5em"} style={{ fill: "orange" }} />
          </i>
          <p>{mainData.temp} C&deg;</p>
        </div>
        {/* Fin de la div de la temperature actuelle */}

        {/* Div pour la temperature des extremes */}
        <div className="main__temp__extremes">
          {/* div pour la temperature min */}
          <div className="main__temp__extremes--min">
            <i>
              <WiIcons.WiThermometerExterior
                size={"3em"}
                style={{ fill: "blue" }}
              />{" "}
            </i>
            <p>{mainData.tempMin} C&deg;</p>
          </div>
          {/* Fin de la div pour la temperature min */}

          {/* Div pour la temperature max */}
          <div className="main__temp__extremes--max">
            <i>
              <WiIcons.WiThermometerExterior
                size={"3em"}
                style={{ fill: "red" }}
              />{" "}
            </i>
            <p>{mainData.tempMax} C&deg;</p>
          </div>
          {/* Fin de la div pour la temperature max */}
        </div>
        {/* Fin de la div pour la temperature des extremes */}
      </div>
      {/* Fin de la div pour l'affichage de la temperature actuelle et les extremes */}

      {/* Div pour l'affichage des infos concernant le soleil */}
      <div className="main__sun">
        {/* Div pour le lever du soleil */}
        <div className="main__sun__sunrise">
          <i>
            <WiIcons.WiSunrise size={"3em"} style={{ fill: "#ffa700" }} />{" "}
          </i>
          <p>{sys.sunrise}</p>
        </div>
        {/* Fin de la div pour le lever du soleil */}

        {/* Div pour le coucher du soleil */}
        <div className="main__sun__sunset">
          <i>
            <WiIcons.WiSunset size={"3em"} style={{ fill: "#FAD6A5" }} />{" "}
          </i>
          <p>{sys.sunset}</p>
        </div>
        {/* Fin de la div pour le coucher du soleil */}
      </div>
      {/* Fin de la div pour l'affichage des infos concernant le soleil */}
    </div>
  );
}

export default Body;
