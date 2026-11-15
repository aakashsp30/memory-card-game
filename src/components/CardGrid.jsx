import { Card } from "./Card";

export function CardGrid({ pList, onSendData }) {
  return (
    <div>
      {pList.map((pkmn) => (
        <Card key={pkmn.id} pkmn={pkmn} onSendData={onSendData}/>
      ))}
    </div>
  );
}
