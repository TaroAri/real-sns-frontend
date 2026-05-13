import React from "react";
import "./Rightbar.css";

export default function Rightbar() {
  const onlineUsers = [
    {
      userId: "1",
      username: "shincode",
      icon: "1.jpeg",
    },
    {
      userId: "2",
      username: "shincode",
      icon: "1.jpeg",
    },
    {
      userId: "3",
      username: "shincode",
      icon: "1.jpeg",
    },
  ];
  return (
    <div className="rightbarContainer">
      <div className="promorionConttainer">
        <div className="promotionTitle">
          <img src="assets/star.png" alt="star" className="promotionStar" />
          <p className="promotionText">
            <span className="promotionTextStrong">フォロワー限定</span>
            イベント開催中！
          </p>
        </div>
        <img src="assets/ad.jpeg" alt="" className="promotionImg" />
      </div>
      <div className="onlineContainer">
        <p className="onlineTitle">オンラインの友達</p>
        <div className="onlineUsers">
          {onlineUsers.map((onlineUser) => (
            <div key={onlineUser.userId} className="onlineUserContainer">
              <span className="onlineMark"></span>
              <img
                src={"assets/person/" + onlineUser.icon}
                alt=""
                className="icon"
              />
              <p className="onlineUserName">{onlineUser.username}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
