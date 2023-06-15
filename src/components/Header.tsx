import React, { FC } from 'react';
import Logo from "../images/Logo.svg";
import LinkedInIcon from "../images/icons8-linkedin-circled-50.png";
import GitHubIcon from "../images/icons8-github-50.png";
import CVIcon from "../images/icons8-download-cv-48.png";


interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={"absolute top-0 left-0 flex flex-row w-screen px-8 text-white w-full justify-between items-center"}>
    <div className={"w-48"}>
      <img className={"w-16 h-16"} src={Logo} alt={"logo"}></img>
    </div>
    <div className={"w-fit"}>
      <p className={"text-3xl typewriter delay0"}>My Name Is Alex Richards</p>
    </div>
    <div className={"flex flex-row gap-8 w-48"}>
      <a href='https://www.linkedin.com/in/alexrichards9595/' target="_blank">
        <img className={"w-8 max-w-lg h-8"} src={LinkedInIcon} alt={"LinkedIn"}></img>
      </a>
      <a href='https://github.com/AlexRichards9595' target="_blank">
        <img className={"w-8 h-8 max-w-lg"} src={GitHubIcon} alt={"Github"}></img>
      </a>
      <a download="Alex_Richards_Resume.pdf" href='/Alex_Richards_Resume.pdf'>
        <img className={"w-8 h-8 max-w-lg"} src={CVIcon} alt={"Download Resume"}></img>
      </a>
      
    </div>
  </div>
);

export default Header;
