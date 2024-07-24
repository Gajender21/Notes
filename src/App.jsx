import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";
import { useState } from "react";

function App() {
  const themes = {
    grey: {
      textColor: "text-white",
      bgColor: "bg-zinc-900",
      labelColor: "text-zinc-500",
      backgroundTextColor: "text-zinc-900",
      screenBgColor: "bg-zinc-800",
      color: "Grey",
    },
    blue: {
      textColor: "text-white",
      bgColor: "bg-sky-900",
      labelColor: "text-sky-500",
      backgroundTextColor: "text-sky-900",
      screenBgColor: "bg-sky-800",
      color: "Blue",
    },
    green: {
      textColor: "text-white",
      bgColor: "bg-green-900",
      labelColor: "text-green-500",
      backgroundTextColor: "text-green-900",
      screenBgColor: "bg-green-800",
      color: "Green",
    },
    yellow: {
      textColor: "text-white",
      bgColor: "bg-yellow-900",
      labelColor: "text-yellow-500",
      backgroundTextColor: "text-yellow-900",
      screenBgColor: "bg-yellow-800",
      color: "Yellow",
    },
  };
  const [currentTheme, setCurrentTheme] = useState(themes.green);
  function changeTheme(event) {
    const input = event.target.value;
    console.log(input);
    switch (input) {
      case "grey":
        setCurrentTheme(themes.grey);
        break;
      case "blue":
        setCurrentTheme(themes.blue);
        break;
      case "green":
        setCurrentTheme(themes.green);
        break;
      case "yellow":
        setCurrentTheme(themes.yellow);
        break;
      default:
        setCurrentTheme(currentTheme);
        break;
    }

    console.log(currentTheme);
  }

  return (
    <div className={"relative w-full h-screen " + currentTheme.screenBgColor}>
      <Background theme={currentTheme} />
      <Foreground
        theme={currentTheme}
        changeTheme={changeTheme}
        themes={themes}
      />
    </div>
  );
}

export default App;
