import React, { FC } from 'react';


interface TabIconProps {
  onClick: (selected: string) => void
  src: string;
  alt: string;
  company: string;
  year: string;
}

const Tab: FC<TabIconProps> = ({src, alt, company, year, onClick}) => (
  <div className={`flex flex-col items-center`} onClick={() => onClick(company)}>
    <img className={"w-48 h-36 object-scale-down"} alt={alt} src={src} />
    <div className={"prose mt-1"}>{company}</div>
    <div className={"prose"}>{year}</div>
  </div>
);

export default Tab;
