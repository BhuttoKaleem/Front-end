import React from "react";
import useAuth from "../Components/UseAuth";
import { Outlet } from "react-router-dom";
import  UnAuthorized from '../Pages/UnAuthorized'
export default function Protected() {
  const isAuthorized = useAuth();
  return isAuthorized === true ? <Outlet /> : <UnAuthorized />;
}
