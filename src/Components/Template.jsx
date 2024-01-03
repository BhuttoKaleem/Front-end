import React, { useState } from "react";
import Header from "../Components/Header";
import { Footer } from "../Components/Footer";
import SideMenu from "./SideMenu";

const Template = (props) => {

  return (
    <div className="">
      <Header />
      <div className="flex">
      <section className="w-[200px]">
      <SideMenu/>
      </section>
      <section className="px-4 py-2">
      {props.children}
      </section>
      </div>
      <Footer />

    </div>
  );
};

export default Template;