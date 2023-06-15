import React, { FC } from 'react';
import LandingImage from '../images/LandingImage.jpg'


interface LandingProps {}

const LandingSection: FC<LandingProps> = () => (
  <div className={"bg-cover bg-fixed bg-left-top w-screen h-screen text-white flex flex-col justify-start items-center pt-24"} style={{backgroundImage: `url(${LandingImage})`}}>
    <div className={"w-fit"}>
      <p className={"text-2xl typewriter delay3"}>
        And I like to travel more than I like to work.
      </p>
    </div>
  </div>
);

export default LandingSection;
