import { use } from "react";
import CartOn from "./cart";

const Users = ({UsersData}) => {
    const carts = use(UsersData);

  return (
    <div>
      {
        carts.map(cart => <CartOn cart = {cart}></CartOn>)
      }
      
    </div>
  )
}

export default Users;
