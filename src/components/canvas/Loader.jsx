import React from "react";
import { useSelector } from "react-redux";
import { CircleLoader } from "react-spinners";

const Loader = () => {
  const theme=useSelector((state)=>state.mode);
  const bool=theme==='dark';
  return (
    <>
      <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] items-center">
        <CircleLoader size={200} color={bool?"#915EFF":"rgb(5,8,22)"} />
      </div>
    </>
  );
};

export default Loader;
