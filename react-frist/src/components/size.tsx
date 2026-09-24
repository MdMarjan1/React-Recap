interface SizeProps{
    size: number,
    name: string,
}

const Size = (props:SizeProps) => {
  return (
    <article className="text-7xl">
      <h1>{props.size}</h1>
      <h1>{props.name}</h1>
    </article>
  )
}

export default Size;
