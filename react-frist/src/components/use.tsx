import { useState } from "react"

const Use = () => {
    const [point, uppoint] = useState(0);

    const Uplike = () => {
        uppoint(point+5)
    }

  return (
    <div className="bg-blue-600 w-28">
      <h1>Love Like</h1>
      <h2>Count {point}</h2>
      <button onClick={Uplike}>Punch Me</button>
    </div>
  )
}

export default Use
