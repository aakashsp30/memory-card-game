import { Card } from "./Card";

export function CardGrid({ pList, onCardClick }) {
  return (
    <div>
      {pList.map((pkmn) => (
        <Card key={pkmn.id} pkmn={pkmn} onCardClick={onCardClick}/>
      ))}
    </div>
  );
}
