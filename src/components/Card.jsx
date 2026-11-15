export function Card({ pkmn, onCardClick }) {
  const triggerDataSend = () => {
    onCardClick(pkmn.id);
  };

  return (
    <div onClick={triggerDataSend}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pkmn.id}.png`}
        alt={pkmn.name}
      />
      <p>{pkmn.name}</p>
    </div>
  );
}
