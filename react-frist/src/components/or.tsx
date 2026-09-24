interface OrProps {
    name: string;
}



const Logicalor = ({name}:OrProps) => {
  return (
    <div>
      Welcome {name || "Guest"}
    </div>
  )
}

export default Logicalor
