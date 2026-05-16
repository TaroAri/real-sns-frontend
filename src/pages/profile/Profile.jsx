import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Timeline from "../../components/timeline/Timeline";
import "./Profile.css";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <div className="profileContainer">
        <Topbar />
        <div className="profileMain">
          <Sidebar />
          <div className="profileContents">
            <div className="profileInformations">
              <img
                src="assets/post/3.jpeg"
                alt=""
                className="profileBackground"
              />
              <img src="assets/person/1.jpeg" alt="" className="profileIcon" />
              <h3 className="profileName">Shin code</h3>
              <p className="profileDesc">Udemy講師をしています。</p>
              <hr className="profileInformationBottom" />
            </div>
            <div className="profileContentsBottom">
              <Timeline />
              <Rightbar profile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
