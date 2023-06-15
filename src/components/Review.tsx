import React, { FC } from 'react';
import {ReviewData} from "../experienceData";


interface ReviewProps {
  review: ReviewData;
}

const Review: FC<ReviewProps> = ({review}) => (
  <div className={`flex flex-col justify-center items-center text-center w-full m-auto`}>
    <p>{review.name}, {review.role}</p>
    <p>{review.time}</p>
    <div className={"text-center"}>{review.review}</div>
  </div>
);
export default Review;
