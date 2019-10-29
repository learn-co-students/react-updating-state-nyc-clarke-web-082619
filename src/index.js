import React from "react";
import ReactDOM from "react-dom";

import ClickityClick from "./components/ClickityClick";
import ButtonCounter from "./components/ButtonCounter";
import Lightswitch from "./components/LightSwitch";

ReactDOM.render(
  <div>
    <ClickityClick />
    <ButtonCounter />
    <Lightswitch />
  </div>,
  document.getElementById("root")
);
