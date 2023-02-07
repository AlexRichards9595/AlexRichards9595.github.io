import React, { FC } from 'react';
import LandingImage from '../../images/LandingImage.jpg'


interface LandingProps {}

const LandingSection: FC<LandingProps> = () => (
  <div className={"w-screen h-screen text-white flex flex-col justify-center items-center"}>
    <div className={"bg-black w-1/5 z-0"}>Where is this</div>
  </div>
);

export default LandingSection;
