interface CarProps {
    name: string,
    model: number,
    status?: boolean,
    color: "red" | "blue" | "black",
}
const Car = ({name, model, status, color}:CarProps) => {
  return (
    <article className="text-2xl border-amber-500 border-2 m-1 p-2">
        <h1>{name}</h1>
        <h1>{model}</h1>
        <h1>{status}</h1>
        <h1>{color}</h1>
    </article>
  )
}
export default Car


