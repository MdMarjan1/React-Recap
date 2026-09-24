interface Price1Props {
    price1 : number;
}

const HPrice = ({price1}:Price1Props) => {
    if(price1 > 25){
        return(
            <li>good price {price1}</li>
        )
    }
  return (
    <li>Low Price {price1}</li>
  )
}

export default HPrice;
