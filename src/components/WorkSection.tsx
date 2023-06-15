import React, {FC, useEffect, useState} from 'react';
import Tab from "./Tab";
import {employerData, reviewData} from "../experienceData";
import Review from "./Review";
import Dot from "./Dot";
import PreviousIcon from "../images/icons8-back-50.png";
import NextIcon from "../images/icons8-forward-50.png";


interface WorkProps {
  ref?: any;
}

const WorkSection: FC<WorkProps> = (ref) => {
  const [companySelected, setCompanySelected] = useState<string>("");
  const [reviewSelected, setReviewSelected] = useState<number>(0);


  useEffect(() => {
  }, [companySelected])

  const handleClick = (selected: string) => {
    setCompanySelected(selected);
  }

  const nextReview = () => {
    if(reviewSelected === reviewData.length -1) {
      setReviewSelected(0);
    } else {
      setReviewSelected(prevState => (prevState + 1))
    }
  }

  const previousReview = () => {
    if(reviewSelected === 0) {
      setReviewSelected(reviewData.length - 1);
    } else {
      setReviewSelected(prevState => (prevState - 1))
    }
  }

  return (
    <div id='work-section'>
      <div className={'flex flex-col h-screen'}>
        <div className={"h-1/2 py-8 px-28 bg-white"}>
          <div className={"flex justify-start mb-16 w-fit"}>
            <h1 className={"prose text-4xl typewriter delay6"}>But you probably care more about my work...</h1>
          </div>
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
        <div className={"flex justify-start mb-8 w-fit"}>
          <h1 className={"prose text-white text-4xl typewriter delay8"}>Or what people are saying about me...</h1>
        </div>
          <div className={"flex flex-col justify-center m-auto h-4/5 animate pop"}>
            <div className={"flex flex-row gap-16 h-4/5"}>
              <button onClick={previousReview}>
                <img src={PreviousIcon} alt={"Previous"}></img>
              </button>
              <Review review={reviewData[reviewSelected]}/>
              <button onClick={nextReview}>
                <img src={NextIcon} alt={"Next"}></img>
              </button>
            </div>
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
