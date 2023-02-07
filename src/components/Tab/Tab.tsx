import React, { FC } from 'react';
import {Company} from "../../experienceData";


interface TabIconProps {
  company: Company;
  onClick: (selected: string) => void
  hidden: boolean;
  selected: boolean;
}

const Tab: FC<TabIconProps> = ({ company, onClick, hidden, selected}) => {
  let width = "w-1/4";

  if(selected) width="w-full";
  if(hidden) width="w-0";

  return (
    <div className={`flex flex-row ${width} h-52 justify-center duration-1000`} >
      <div className={`flex flex-col items-center justify-between ${hidden && "opacity-0"} duration-500`} onClick={() => onClick(company.name)}>
        <img className={"w-48 h-36 object-scale-down m-2"} alt={company.name} src={company.src} />
        <div className={"flex flex-col h-12 justify-end items-center"}>
          <div className={"prose font-black mt-1"}>{company.name}</div>
          <div className={"prose"}>{company.time}</div>
        </div>
      </div>
      <div
        className={`${selected ? 'w-4/5 opacity-100' : 'w-0 opacity-0'} duration-1000 bg-amber-500`} >
        <button onClick={() => onClick("")}>X</button>
      </div>
    </div>
  );
}

export default Tab;
