import React, {FC, useEffect, useState} from 'react';
import Tab from "../Tab/Tab";
import {employerData, reviewData} from "../../experienceData";
import Review from "../Review/Review";
import Dot from "../Dot/Dot";


interface WorkProps {}

const WorkSection: FC<WorkProps> = () => {
  const [companySelected, setCompanySelected] = useState<string>("");
  const [reviewSelected, setReviewSelected] = useState<number>(0);

  useEffect(() => {
    console.log(companySelected);
  }, [companySelected])

  const handleClick = (selected: string) => {
    console.log("clicked!");
    setCompanySelected(selected);
  }
  return (
    <div>
      <div className={'flex flex-col h-screen'}>
        <div className={"h-1/2 py-8 px-28 bg-white"}>
          <h1 className={"prose text-4xl h-20 mb-8"}>But you probably care more about my work...</h1>
          <div className={`flex flex-row w-full mx-auto justify-between mb-24 h-56`}>
            {employerData.map(company => (<Tab
              company={company}
              onClick={handleClick}
              hidden={companySelected !== "" && companySelected !== company.name}
              selected={companySelected === company.name}
            />))}
          </div>
        </div>
        <div className={"flex flex-col h-1/2 text-white p-8 px-28 bg-[#4F5A44]"}>
          <h1 className={"prose text-white text-4xl h-1/5"}>Or what people are saying about me...</h1>
          <div className={"flex flex-col justify-center w-4/5 h-4/5 m-auto"}>
            <Review review={reviewData[reviewSelected]}/>
            <div className={"flex flex-row w-full justify-center mt-8"}>
              {reviewData.map((review, index) => {
                return (<Dot filled={index === reviewSelected} onClick={setReviewSelected} index={index}/>)
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkSection;
