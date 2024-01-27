import React from "react";
import { useProgressStore } from "../store/progressStore";


export function Arrow({source, ammount}) {
  const {progress, setProgress} = useProgressStore(state => state)
  const click = () => {
    if (progress + ammount < 0) {
      setProgress(0)
    } else {
      setProgress(progress+ammount)
      console.log(progress)
    }
    
  }
  return(
    <button onClick={click} className="w-1/3" >
      <img src={source.src} alt="arrow"></img>
    </button>
  )
}