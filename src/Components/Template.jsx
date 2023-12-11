import React from "react";
import  Header  from "../Components/Header";
import  {Footer}  from "../Components/Footer";
const Template = (props) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex justify-between">
        <div className="h-[100vh] w-[50-vh] bg-slate-500">Aside</div>
        {props.children}
        <div className="h-[100vh] w-[50-vh] bg-slate-500">Ads</div>
      </div>
      <Footer />
    </div>
  );
};
export default Template;
