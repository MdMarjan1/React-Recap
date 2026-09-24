import type { SportsProps } from "../types/players"
import PlayerCard from "./playerCard"


const players : SportsProps[] = [
    {id: 1, name: "Marjan", role: 69},
    {id: 2, name: "Hasib", role: 40},
    {id: 3, name: "Nadia", role: 33},
    {id: 4, name: "Faysal", role: 95},
]


const Players = () => {
  return (
    <div>
        {
            players.map(player => <PlayerCard player = {player}></PlayerCard>)
        }
    </div>
  )
}

export default Players
