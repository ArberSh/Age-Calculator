import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  const MonthArr = ["Nothing","January","February","March","April","May","June","July","August","September","Octomber","November","December"]

  const [DataUser,SetDataUser] = useState(0)
  const [MonthUser,SetMonthUser] = useState(0)
  const [YearUser,SetYearUser] = useState(0)

  const today = new Date()
  

  const Data = today.getDate()
  const Month = today.getMonth()
  const Year = today.getFullYear()

  


  function Clicked(){
    const ChoosenDate = new Date(DataUser + " " + MonthArr[MonthUser] + " " + YearUser)
    console.log(ChoosenDate)
  }

  return (
    <>
      <div className=" bg-slate-100 h-screen ">
        <div className="flex justify-around"> 
          <div className=" flex justify-center items-start flex-col">
            <label htmlFor="">Data</label>
            <input type="number" onChange={e => SetDataUser(e.target.value)} name="" id="" min={1} max={31} />
          </div>
          <div className=" flex justify-center items-start flex-col">
            <label htmlFor="">Month</label>
            <input type="number" name="" id="" min={1} max={12} onChange={e => SetMonthUser(e.target.value)}/>
          </div>
          <div className=" flex justify-center items-start flex-col">
            <label htmlFor="">Year</label>
            <input type="number" name="" id="" max={2024} onChange={e => SetYearUser(e.target.value)}/>
          </div>
        </div>
        <button onClick={Clicked}>Click here</button>
        <div>
          <div>
            <h1>-- Number</h1>
          </div>
          <div>
            <h1>-- Number</h1>
          </div>
          <div>
            <h1>-- Number</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
