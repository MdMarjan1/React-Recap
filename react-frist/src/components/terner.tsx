
interface TernerProps {
    isterner : number;
}

const ONTerner = ({isterner}:TernerProps) => {
  return (
    <div>
      {isterner > 25 ? (<li>Iphone</li>) : (<li>Oppo</li>)}
    </div>
  )
}

export default ONTerner;
