
const CartOn = ({cart}) => {
  return (
    <div className="border-4 border-b-blue-700 m-2.5">
      <h1>{cart.username}</h1>
      <h1>{cart.name}</h1>
    </div>
  )
}

export default CartOn
