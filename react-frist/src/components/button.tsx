
const Button = () => {
     
    const handelButton = () =>{
        alert ('i am man ')
    }

  return (
    <div>
      <button className="bg-emerald-500 p-3.5 m-2.5" onClick={handelButton}>Klick Mes </button>
    </div>
  )
}

export default Button
