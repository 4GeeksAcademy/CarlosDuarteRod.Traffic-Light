import React, { useState } from 'react';

//include images into your bundle


//create your first component
const TrafficLight = () => {

    const [ color, setColor] = useState("roja");
    return (
        <div id="container">
      <div className={`luz roja ${color === "roja" ? "seleccionada" : ""}`} onClick={() => setColor("roja")}></div>
      <div className={`luz naranja ${color === "naranja" ? "seleccionada" : ""}`} onClick={() => setColor("naranja")}></div>
      <div className={`luz verde ${color === "verde" ? "seleccionada" : ""}`} onClick={() => setColor("verde")}></div>
        </div>
    )
};

export default TrafficLight;
