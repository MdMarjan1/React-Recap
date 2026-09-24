import { use } from "react"
import StudentCart from "./studentCart"

const StudentInfo = ({StudentInfoData}) => {
    const Students = use(StudentInfoData)
  return (
    <div>
      {
        Students.map( student => <StudentCart student={student}></StudentCart>)
      }
    </div>
  )
}

export default StudentInfo
