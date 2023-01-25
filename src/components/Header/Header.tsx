import React, { FC } from 'react';


interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={"w-screen h-16 bg-transparent fixed text-white"}>
    Header Component
  </div>
);

export default Header;
