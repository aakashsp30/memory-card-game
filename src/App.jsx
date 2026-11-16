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

  const hasWon = clickedPkmn.length === pkmnList.length;

  const handleCardClick = (pkmnId) => {
    setPkmnList(shuffle(pkmnList));
    if (!clickedPkmn.includes(pkmnId)) {
      const newClicked = [...clickedPkmn, pkmnId];
      setClickedPkmn(newClicked);
      if (newClicked.length > bestScore) {
        setBestScore(newClicked.length);
      }
    } else {
      setClickedPkmn([]);
    }
  };

  return (
    <>
      <CardGrid pList={pkmnList} onCardClick={handleCardClick} />
      <ScoreCard score={clickedPkmn.length} bestScore={bestScore} />
      {hasWon && (
        <>
          <p>You Won!</p>
          <button onClick={() => setClickedPkmn([])}>Play again</button>
        </>
      )}
    </>
  );
}

export default App;
