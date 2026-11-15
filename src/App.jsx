import { useState } from "react";
import { CardGrid } from "./components/CardGrid";
import { ScoreCard } from "./components/ScoreCard";

function shuffle(arr) {
  const copyArr = [...arr];
  for (let i = copyArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]];
  }
  return copyArr;
}

function App() {
  const [pkmnList, setPkmnList] = useState(() =>
    shuffle([
      { id: 4, name: "Charmander" },
      { id: 56, name: "Mankey" },
      { id: 12, name: "Butterfree" },
      { id: 151, name: "Mew" },
    ])
  );

  const [clickedPkmn, setClickedPkmn] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  const handleCardClick = (pkmnId) => {
    if (!clickedPkmn.includes(pkmnId)) {
      const newClicked = [...clickedPkmn, pkmnId];
      setClickedPkmn(newClicked);
      setPkmnList(shuffle(pkmnList));
      if (newClicked.length > bestScore) {
        setBestScore(newClicked.length);
      }
    } else {
      setClickedPkmn([]);
      setPkmnList(shuffle(pkmnList));
    }
  };

  return (
    <>
      <CardGrid pList={pkmnList} onCardClick={handleCardClick} />
      <ScoreCard score={clickedPkmn.length} bestScore={bestScore} />
    </>
  );
}

export default App;
