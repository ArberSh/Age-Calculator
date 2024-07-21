import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  const MonthArr = ["January","February","March","April","May","June","July","August","September","Octomber","November","December"]

  const [DataUser,SetDataUser] = useState<number>(0)
  const [MonthUser,SetMonthUser] = useState<number>(0)
  const [YearUser,SetYearUser] = useState<number>(0)
  const [RESULTDAY,SetRESULTDAY] = useState<number>(0)
  const [RESULTMONTH,SetRESULTMONTH] = useState<number>(0)
  const [RESULTYEAR,SetRESULTYEAR] = useState<number>(0)
  const [Click,setClick] = useState<Boolean>(true)

  const today = new Date()
  

  const Data = today.getDate()
  const Month = today.getMonth()
  const Year = today.getFullYear()

 

 
    let ResultDay 
    let ResultMonth
    let ResultYear

  function Clicked(){
    const ChoosenDate = new Date(DataUser + " " + MonthArr[MonthUser - 1] + " " + YearUser)
    const NewDataUser = ChoosenDate.getDate()
    const NewMonthUser = ChoosenDate.getMonth()
    const NewYearUser = ChoosenDate.getFullYear()

    ResultDay = Data - NewDataUser
    ResultMonth = Month - NewMonthUser
    ResultYear = Year - NewYearUser

    if(ResultDay < 0){
      ResultDay = Math.abs(ResultDay)
      ResultMonth = ResultMonth - 1 
    }
    if(ResultMonth < 0){
      ResultMonth = Math.abs(ResultMonth)
      ResultMonth = 12 - ResultMonth
      ResultYear = ResultYear - 1 
      }
    SetRESULTDAY(ResultDay)
    SetRESULTMONTH(ResultMonth)
    SetRESULTYEAR(ResultYear)
    setClick(false)
  }
  console.log(Click)
  console.log(RESULTDAY)
  return (
    <>
      <div className=" bg-slate-100 h-screen ">
        <div className="flex justify-around"> 
          <div className=" flex justify-center items-start flex-col">
            <label htmlFor="">Data</label>
            <input required="required" type="number" onChange={e => SetDataUser(parseInt((e.target.value)))} name="" id="" min={1} max={31} />
          </div>
          <div className=" flex justify-center items-start flex-col">
            <label htmlFor="">Month</label>
            <input type="number" name="" id="" min={1} max={12} onChange={e => SetMonthUser(parseInt(e.target.value))}/>
          </div>
          <div className=" flex justify-center items-start flex-col">
            <label htmlFor="">Year</label>
            <input type="number" name="" id="" max={2024} onChange={e => SetYearUser(parseInt(e.target.value))}/>
          </div>
        </div>
        <button onClick={Clicked}>Click here</button>
        <div>
          <div>
            {(RESULTDAY === undefined  || Number.isNaN(RESULTDAY)) || Click ? <h1>-- days</h1>: <h1>{RESULTDAY} days</h1>}
          </div>
          <div>
          {(RESULTMONTH === undefined  || Number.isNaN(RESULTMONTH)) || Click ? <h1>-- months</h1>: <h1>{RESULTDAY} months</h1>}
          </div>
          <div>
          {(RESULTYEAR === undefined  || Number.isNaN(RESULTYEAR)) || Click ? <h1>-- years</h1>: <h1>{RESULTYEAR} years</h1>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
