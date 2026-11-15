import { useState } from "react";
import { CardGrid } from "./components/CardGrid";
import { ScoreCard } from "./components/ScoreCard";

function App() {
  const [clickedPkmn, setClickedPkmn] = useState([]);

  const handleChildData = (pkmn) => {
    setClickedPkmn(pkmn);
  };
  
  const pkmnList = [
    { id: 4, name: "Charmander" },
    { id: 56, name: "Mankey" },
    { id: 12, name: "Butterfree" },
    { id: 151, name: "Mew" },
  ];
  return (
    <>
      <CardGrid pList={pkmnList} onSendData={handleChildData} />
      <ScoreCard score={0} bestScore={5} />
    </>
  );
}

export default App;
