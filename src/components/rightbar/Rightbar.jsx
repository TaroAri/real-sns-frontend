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

  const promotions = [
    {
      title: "ショッピング",
      img: "assets/promotion/promotion1.jpeg",
    },
    {
      title: "カーショップ",
      img: "assets/promotion/promotion2.jpeg",
    },
    {
      title: "shincode株式会社",
      img: "assets/promotion/promotion3.jpeg",
    },
  ];
  return (
    <div className="rightbarContainer">
      <div className="eventConttainer">
        <div className="eventTitle">
          <img src="assets/star.png" alt="star" className="eventStar" />
          <p className="eventText">
            <span className="eventTextStrong">フォロワー限定</span>
            イベント開催中！
          </p>
        </div>
        <img src="assets/ad.jpeg" alt="" className="eventImg" />
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
      <div className="promotionContainer">
        <p className="promotionTitle">プロモーション広告</p>
        {promotions.map((promotion) => (
          <div className="promotionWrapper">
            <img src={promotion.img} alt="" className="promotionImg" />
            <p className="promotionText">{promotion.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
