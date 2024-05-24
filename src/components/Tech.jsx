import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <img className="aspect-auto transition-transform duration-300 ease-in-out transform hover:scale-110" src={technology.icon}></img>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
