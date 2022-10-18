import React from "react";
import { CardData } from "../API/Data";
import Variant from "./Variant";


const Variants = () => {
  return (
    <>
      {CardData.map((data, index) => {
        return (
          <Variant 
          key={index}
            name={data.name}
            icon={data.icon}
            value={data.value}
            series={data.series}
          />
        );
      })}
    </>
  );
};

export default Variants;
