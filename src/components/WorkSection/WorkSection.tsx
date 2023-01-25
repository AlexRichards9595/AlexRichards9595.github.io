import React, {FC, useEffect, useState} from 'react';
import Tab from "../Tab/Tab";
import NetJets from "../../images/netjets-vector-logo.png"
import Accenture from "../../images/Accenture-Logo.png"
import eFuse from "../../images/efuse.png"
import Dwell from "../../images/Dwell_Sunburst_Light.png"


interface WorkProps {}

const WorkSection: FC<WorkProps> = () => {
  const [selected, setSelected] = useState<string>();

  useEffect(() => {
    console.log(selected);
  }, [selected])

  return (
    <div className={'flex flex-col w-screen h-screen p-8'}>
      <h1 className={"prose text-5xl h-24"}>But you probably care more about my work...</h1>
      <div className={`flex flex-row grow w-4/5 mx-auto justify-between items-center ${!!selected && 'opacity-0'} duration-1000`}>
        <Tab src={eFuse} alt={"eFuse"} year={"2022-present"} company={"eFuse"} onClick={setSelected}/>
        <Tab src={Dwell} alt={"Dwell"} year={"2019-present"} company={"Dwell"} onClick={setSelected}/>
        <Tab src={Accenture} alt={"Accenture"} year={"2019-2022"} company={"Accenture"} onClick={setSelected}/>
        <Tab src={NetJets} alt={"NetJets"} year={"2018-2019"} company={"NetJets"} onClick={setSelected}/>
      </div>
    </div>
  );
}

export default WorkSection;
