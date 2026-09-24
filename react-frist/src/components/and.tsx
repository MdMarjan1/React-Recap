interface AndProps{
    isAnd : boolean;
}

const And = ({isAnd}:AndProps) => {
  return (
    <div>
        {isAnd && <li>Button working</li>}
    </div>
  )
}

export default And
