import { Suspense } from "react";
import And from "./components/and";
import Button from "./components/button";
import Car from "./components/car";
import IfRen from "./components/if";
import Profile from "./components/name";
import Logicalor from "./components/or";
import Players from "./components/players";
import HPrice from "./components/price";
import Size from "./components/size";
import Count from "./components/state";
import ONTerner from "./components/terner";
import Use from "./components/use";
import Users from "./components/Users";
import StudentInfo from "./components/studentInfo";


   const UsersData = async() => {
      const res = await fetch ("https://jsonplaceholder.typicode.com/users")
      const data = await res.json()
      return data
  }

  // another cart 
  const StudentInfoData = async() =>{
    const res = await fetch ("https://jsonplaceholder.typicode.com/users");
    const data = await res.json()
    return data
  } 

const App = () => {
  return (
    <div>
      <Suspense fallback ={<p>Loading...........</p>}>
            <Users UsersData = {UsersData()}></Users>
      </Suspense>
      {/* another suspence  */}
      <Suspense fallback ={<p>Waiting BRO.............</p>}>
          <StudentInfo StudentInfoData = {StudentInfoData()}/>
      </Suspense>














      <h1 className="text-4xl">HI I am Marjan</h1>
      <Price />
      {/* -------- */}
      <Profile name="Marjan" role={69} status={false} permit="user" />
      <Car name="BMW M4" model={2028} color="red" />
      <Size size={568} name="Suny" />
      {/* ---- conditional rendering ---- */}
      <IfRen isLog={true} />
      <HPrice price1={55} />
      <ONTerner isterner={100} />
      <And isAnd={false} />
      <And isAnd={true} />
      <Logicalor name="" />
      <Players/>
      {/* button */}
      <Button/>
      {/* state */}
      <Count/>
      <Use/>

    </div>
  );
};

// component
const Price = () => {
  return (
    <div className="text-amber-700 text-3xl">
      <h1>sum: {65 + 5}</h1>
      <h1>subtraction: {55 - 10}</h1>
    </div>
  );
};
export default App;



