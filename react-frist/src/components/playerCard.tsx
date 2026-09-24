import type { SportsProps } from "../types/players"

const PlayerCard = ({player} : {player: SportsProps}) => {
  return (
    <div>
        <h1>id: {player.id}</h1>
        <h1>Name: {player.name}</h1>
        <h1>role: {player.role}</h1>
    </div>
  )
}

export default PlayerCard
