import { useState } from "react"


const Count = () => {

    const [pis, update] = useState(0); 
    const handelClick = () => {
        update (pis+ 1);
    }



  return (
    <div>
      <h1>Flowers</h1>
      <h2>Total Count {pis}</h2>
      <button onClick={handelClick}>Push Me</button>
    </div>
  )
}

export default Count
