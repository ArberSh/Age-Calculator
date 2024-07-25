import { useState } from "react";
import "./App.css";
import Arrow from "../src/assets/arrows.svg";

function App() {
  const MonthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octomber",
    "November",
    "December",
  ];

  const [DataUser, SetDataUser] = useState<number>(0);
  const [MonthUser, SetMonthUser] = useState<number>(0);
  const [YearUser, SetYearUser] = useState<number>(0);
  const [RESULTDAY, SetRESULTDAY] = useState<number>(0);
  const [RESULTMONTH, SetRESULTMONTH] = useState<number>(0);
  const [RESULTYEAR, SetRESULTYEAR] = useState<number>(0);
  const [Click, setClick] = useState<Boolean>(true);
  const [Mistake, setMistake] = useState<Boolean>(false);

  const today = new Date();

  const Data = today.getDate();
  const Month = today.getMonth();
  const Year = today.getFullYear();

  let ResultDay;
  let ResultMonth;
  let ResultYear;

  function Clicked() {
    const ChoosenDate = new Date(
      DataUser + " " + MonthArr[MonthUser - 1] + " " + YearUser
    );
    let NewDataUser = ChoosenDate.getDate();
    let NewMonthUser = ChoosenDate.getMonth();
    let NewYearUser = ChoosenDate.getFullYear();

    if (
      Number.isNaN(NewDataUser) ||
      NewDataUser !== DataUser ||
      Number.isNaN(NewMonthUser) ||
      MonthUser > 12 ||
      Number.isNaN(NewYearUser) ||
      YearUser > 2024
    ) {
      setMistake(true);
      SetRESULTMONTH(MonthUser)
    } else {
      setMistake(false);
      ResultDay = Data - NewDataUser;
      ResultMonth = Month - NewMonthUser;
      ResultYear = Year - NewYearUser;

      if (ResultDay < 0) {
        ResultDay = Math.abs(ResultDay);
        ResultMonth = ResultMonth - 1;
      }
      if (ResultMonth < 0) {
        ResultMonth = Math.abs(ResultMonth);
        ResultMonth = 12 - ResultMonth;
        ResultYear = ResultYear - 1;
      }

      SetRESULTDAY(ResultDay);
      SetRESULTMONTH(ResultMonth);
      SetRESULTYEAR(ResultYear);
      setClick(false);
    }
  }
  return (
    <>
      <div className=" bg-slate-200 h-screen flex justify-center items-center flex-col ">
        <div className="p-4 flex justify-start items-start flex-col bg-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-3xl">
          <div className="max-[500px]:w-full max-[500px]:p-0 px-4 py-2 w-128 flex flex-row justify-start items-start">
            {Mistake ? (
              <div className="flex justify-center items-start flex-col mr-4">
                <label
                  className=" max-[500px]:text-xs text-red-400 mb-1 text-sm font-bold line"
                  htmlFor=""
                >
                  D A Y
                </label>
                <input
                  className=" max-[500px]:w-20 max-[500px]:h-10 max-[500px]:text-lg w-28 h-12 border-2 border-red-400 rounded-md text-2xl p-2 font-bold outline-none"
                  placeholder="DD"
                  type="number"
                  onChange={(e) => SetDataUser(parseInt(e.target.value))}
                  name=""
                  id=""
                  min={1}
                  max={31}
                />
                {Number.isNaN(RESULTDAY) ||
                  (ResultDay !== RESULTDAY && (
                    <h2 className="max-[500px]:text-xs text-red-400 italic text-sm">
                      Must be a valid day
                    </h2>
                  ))}
              </div>
            ) : (
              <div className="flex justify-center items-start flex-col mr-4">
                <label className=" max-[500px]:text-xs mb-1 text-sm font-bold line" htmlFor="">
                  D A Y
                </label>
                <input
                  className="max-[500px]:w-20 max-[500px]:h-10 max-[500px]:text-lg w-28 h-12 border-2 border-gray-300 rounded-md text-2xl p-2 font-bold outline-none"
                  placeholder="DD"
                  type="number"
                  onChange={(e) => SetDataUser(parseInt(e.target.value))}
                  name=""
                  id=""
                  min={1}
                  max={31}
                />
              </div>
            )}

            {Mistake ? (
              <div className=" flex justify-center items-start flex-col mr-4">
                <label
                  className=" max-[500px]:text-xs text-red-400 mb-1 text-sm font-bold line "
                  htmlFor=""
                >
                  M O N T H
                </label>
                <input
                  className=" max-[500px]:w-20 max-[500px]:h-10 max-[500px]:text-lg border-red-400 w-28 h-12 border-2 rounded-md text-2xl p-2 font-bold outline-none"
                  placeholder="MM"
                  type="number"
                  name=""
                  id=""
                  min={1}
                  max={12}
                  onChange={(e) => SetMonthUser(parseInt(e.target.value))}
                />
                {(Number.isNaN(RESULTMONTH) || RESULTMONTH > 12) && (
                  <h2 className="max-[500px]:text-xs text-red-400 italic text-sm">
                    Must be a valid month
                  </h2>
                )}
              </div>
            ) : (
              <div className=" flex justify-center items-start flex-col mr-4">
                <label className=" max-[500px]:text-xs mb-1 text-sm font-bold line " htmlFor="">
                  M O N T H
                </label>
                <input
                  className="max-[500px]:w-20 max-[500px]:h-10 max-[500px]:text-lg w-28 h-12 border-2 rounded-md text-2xl p-2 font-bold outline-none"
                  placeholder="MM"
                  type="number"
                  name=""
                  id=""
                  min={1}
                  max={12}
                  onChange={(e) => SetMonthUser(parseInt(e.target.value))}
                />
              </div>
            )}

            {Mistake ? (
              <div className=" flex justify-center items-start flex-col">
              <label className=" max-[500px]:text-xs text-red-400 mb-1 text-sm font-bold line" htmlFor="">
                Y E A R S
              </label>
              <input
                className= " max-[500px]:w-20 max-[500px]:h-10 max-[500px]:text-lg border-red-400 w-28 h-12 border-2 rounded-md text-2xl p-2 font-bold outline-none"
                placeholder="YYYY"
                type="number"
                name=""
                id=""
                max={2024}
                onChange={(e) => SetYearUser(parseInt(e.target.value))}
              />
              {Number.isNaN(RESULTYEAR) || YearUser > 2024 && <h2 className="max-[500px]:text-xs text-red-400 italic text-sm">Must be a valid Year</h2>}
              
            </div>
            ): (
            <div className=" flex justify-center items-start flex-col">
              <label className="max-[500px]:text-xs mb-1 text-sm font-bold line" htmlFor="">
                Y E A R S
              </label>
              <input
                className=" max-[500px]:w-20 max-[500px]:h-10 max-[500px]:text-lg w-28 h-12 border-2 rounded-md text-2xl p-2 font-bold outline-none"
                placeholder="YYYY"
                type="number"
                name=""
                id=""
                max={2024}
                onChange={(e) => SetYearUser(parseInt(e.target.value))}
              />
            </div>
            )}
          </div>
          <div className="max-[640px]:mt-4 flex w-full justify-center items-center">
            <hr className="border-b-2 w-3/4" />
            <button
              className=" bg-violet-600 rounded-full p-2"
              onClick={Clicked}
            >
              <img className="max-[500px]:w-6 w-10" src={Arrow} alt="" />
            </button>
          </div>
          <div className=" flex justify-start flex-col items-start p-4">
            <div>
              {RESULTYEAR === undefined ||
              Number.isNaN(RESULTYEAR) ||
              Mistake ||
              Click ? (
                <h1 className="max-[500px]:text-5xl text-7xl font-extrabold italic font-poppins">
                  <span className="text-purple-500">--</span> years
                </h1>
              ) : (
                <h1 className="max-[500px]:text-5xl text-7xl font-extrabold italic font-poppins">
                  <span className="text-violet-600">{RESULTYEAR}</span> years
                </h1>
              )}
            </div>
            <div>
              {RESULTMONTH === undefined ||
              Number.isNaN(RESULTMONTH) ||
              Mistake ||
              Click ? (
                <h1 className="max-[500px]:text-5xl text-7xl font-extrabold italic font-poppins">
                  <span className="text-purple-500">--</span> months
                </h1>
              ) : (
                <h1 className="max-[500px]:text-5xl text-7xl font-extrabold italic font-poppins">
                  <span className="text-violet-600">{RESULTMONTH}</span> months
                </h1>
              )}
            </div>
            <div>
              {RESULTDAY === undefined ||
              Number.isNaN(RESULTDAY) ||
              Mistake ||
              Click ? (
                <h1 className="max-[500px]:text-5xl text-7xl font-extrabold italic font-poppins">
                  <span className="text-purple-500">--</span> days
                </h1>
              ) : (
                <h1 className="max-[500px]:text-5xl text-7xl font-extrabold italic font-poppins">
                  <span className="text-violet-600">{RESULTDAY}</span> days
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
