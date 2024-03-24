import React from "react";
import Categories from "../../components/RankingComponent/Categories";
import {  Outlet } from "react-router-dom";

function Rankings() {
  return (
    <div>
    <Categories/>
      <Outlet />
    </div>
  );
}

export default Rankings;
