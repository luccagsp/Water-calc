import React from "react";
import { useProgressStore } from "../store/progressStore";
import "../styles/Progress.css"

export function Progress() {
  const {progress} = useProgressStore(state => state)

  const progressConverted = (progress / 2000) * 100

  return(
    <div id="totalBar" className={`h-[450px] w-[50px] bg-[#52AEFF] relative overflow-hidden`}>
      <div 
        id="subBar" 
        className={`w-full bg-[#0063B9] absolute z-50 bottom-0 overflow-hidden`}
        style={{ height: `${progressConverted}%` }}
      />
    </div>
  )
}

