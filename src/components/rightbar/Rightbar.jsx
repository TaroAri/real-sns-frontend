import React from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";

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
      id: "1",
      title: "ショッピング",
      img: "assets/promotion/promotion1.jpeg",
    },
    {
      id: "2",
      title: "カーショップ",
      img: "assets/promotion/promotion2.jpeg",
    },
    {
      id: "3",
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
        <ul className="onlineUsers">
          {Users.map((user) => (
            <li key={user.id} className="onlineUserContainer">
              <span className="onlineMark"></span>
              <img src={user.profilePicture} alt="" className="icon" />
              <p className="onlineUserName">{user.username}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="promotionContainer">
        <p className="promotionTitle">プロモーション広告</p>
        {promotions.map((promotion) => (
          <div className="promotionWrapper" key={promotion.id}>
            <img src={promotion.img} alt="" className="promotionImg" />
            <p className="promotionText">{promotion.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
