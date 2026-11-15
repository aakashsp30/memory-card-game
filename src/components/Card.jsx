export function Card({ pkmn, onSendData }) {
  const triggerDataSend = () => {
    onSendData(pkmn.id);
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
