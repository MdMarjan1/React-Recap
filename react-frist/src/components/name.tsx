interface ProfileProps {
    name: string,
    role: number,
    status: boolean,
    permit?: "user" | "employe"
}

const Profile = ({name,role,status,permit}:ProfileProps) => {
  return (
    <div>
        <h1>{name}</h1>
        <h1>{role}</h1>
        <h1>{permit}</h1>
        <span>{status ? "Active" : "InActive"}</span>
    </div>
  )
}

export default Profile;
