"use client";
import { useState } from "react";

export default function Calculatecomponent() {
  const [number1, setNumber1] = useState<number | null>(null);
  const [number2, setNumber2] = useState<number | null>(null);
  const [result, setResult] = useState<string>("");
  

const handelClick = (operation:string) =>{
  if (number1 !== null && number2 !== null) {
    let calcResult: number;
    switch (operation) {
      case "+":
        calcResult = number1 + number2;
        break;
      case "-":
        calcResult = number1 - number2;
        break;
      case "*":
        calcResult = number1 * number2;
        break;
      case "/":
        calcResult = number2 !== 0 ? number1 / number2 : NaN;
        break;
      default:
        return;
    }
    setResult(calcResult.toString());
  }
    
  }
  const clearFields = () => {
    setNumber1(null);
    setNumber2(null);
    setResult("");
  };
  return (
    
   <div>
    <div className='flex justify-center md:mt-[100px] mt-[30px] '><h1 className='text-white md:text-4xl text-2xl '>simple Calculator</h1></div>
    <div className='flex justify-center items-center'>
<div  className='bg-white h-[300px]  md:h-[400px] md:w-[400px] w-[300px] mt-[20px] mb-[50px] rounded-xl'>
    <div className='flex justify-center items-center mt-[30px]'>
      <div className="flex-col ml-[20px]">
      <label className="ml-[30px] mb-[5px] font-semibold">Number1</label>
    <input type="number"
    value={number1 ?? ""}
    onChange={(e) => setNumber1(Number(e.target.value))}
     placeholder="enter number"
     className='md:w-[150px] w-[100px] p-2 bg-white text-start text-sm font-medium text-black rounded-xl outline-none border-2  '/>
      </div>
      
      <div className="flex-col">
      <label className="ml-[30px] mb-[5px] font-semibold">Number1</label>
    <input type="number"
     value={number2 ?? ""}
     onChange={(e) => setNumber2(Number(e.target.value))}
     placeholder="enter number"
     className='md:w-[150px] w-[100px] p-2 bg-white text-start text-sm font-medium text-black rounded-xl outline-none border-2  '/>
      </div>
    </div>
    <div className="ml-[30px] mt-[10px] text-2xl font-bold">
    <button   onClick ={ () => handelClick("+")} className="p-4 bg-white rounded-xl ml-[10px] mt-[20px] w-[70px] border-2">+</button>
    <button      onClick ={ () => handelClick("-")} className="p-4 bg-white rounded-xl ml-[10px] mt-[20px] w-[70px] border-2">-</button>
    <button      onClick ={ () => handelClick("*")} className="p-4 bg-white rounded-xl ml-[10px] mt-[20px] w-[70px] border-2">*</button>
    <button     onClick ={ () => handelClick("/")} className="p-4 bg-white  rounded-xl ml-[10px] mt-[20px] w-[70px] border-2">/</button>
   </div>
   <div className='flex justify-center items-center mt-[30px] flex-col'>
   <label className=" mb-[5px] font-semibold">Result</label>
    <input type="text"
     value={result}
     readOnly
    placeholder=""
     className='md:w-[350px] w-[250px] p-1 bg-white text-start text-xl font-medium text-black rounded-xl outline-none border-2  '/>
    </div>
      <div className="flex justify-center items-center mt-[30px]"><button  onClick={clearFields}  className="md:w-[350px] w-[250px] p-1   bg-white rounded-xl outline-none border-2  font-semibold text-xl ">clear</button></div>
  </div>
  </div>
  </div>
  )
}
