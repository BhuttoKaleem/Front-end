import React, { useState } from "react";
import Header from "../Components/Header";
import { Footer } from "../Components/Footer";
import SideMenu from "./SideMenu";

const Template = (props) => {

  return (
    <div className="">
      <Header />
      <div className="flex">
      <section className="w-[10%]">
      <SideMenu/>
      </section>
      <section className="px-4 py-2 w-[90%]">
      {props.children}
      </section>
      </div>
      <Footer />

    </div>
  );
};

export default Template;