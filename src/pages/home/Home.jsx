import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        {/* timeline */}
        {/* righbar */}
      </div>
    </>
  );
}
