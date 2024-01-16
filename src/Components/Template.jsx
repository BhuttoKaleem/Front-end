import React, { useState } from "react";
import Header from "../Components/Header";
import { Footer } from "../Components/Footer";
import SideMenu from "./SideMenu";

const Template = (props) => {

  return (
    <div className="">
      <Header />
      <div className="flex">
      <section className="w-[20%]">
      <SideMenu/>
      </section>
      <section className="w-full overflow-hidden">
      {props.children}
      </section>
      </div>
      <Footer />

    </div>
  );
};

export default Template;