import React, { FC } from 'react';
import Logo from "../../images/Logo.svg";


interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={"w-screen bg-transparent text-white"}>
    <img className={"w-16 h-16 m-4"} src={Logo} alt={"logo"}></img>
  </div>
);

export default Header;
