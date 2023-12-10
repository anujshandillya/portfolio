import React from "react";
import { CircleLoader } from "react-spinners";

const Loader = () => {
  return (
    <>
      <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] items-center">
        <CircleLoader size={200} color="#915EFF" />
      </div>
    </>
  );
};

export default Loader;
