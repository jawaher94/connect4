import { useState } from "react";
import Setup from "./components/Setup";
import Game from "./components/Game";
import './App.css';



export default function App() {
  const [settings, setSettings] = useState(null);

  if (!settings) {
    return <Setup onStart={setSettings} />;
  }

  return <Game settings={settings} />;
}
