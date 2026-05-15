import {
  Home,
  Search,
  Notifications,
  Message,
  Bookmark,
  Person,
  Settings,
} from "@mui/icons-material";
import React from "react";
import "./Sidebar.css";
import { Users } from "../../dummyData";

export default function Sidebar() {
  const loginUsers = [
    { userId: 1, name: "shincode", icon: "1.jpeg" },
    { userId: 2, name: "Yamaki", icon: "2.jpeg" },
    { userId: 3, name: "Koga", icon: "3.jpeg" },
    { userId: 4, name: "Matukubo", icon: "4.jpeg" },
    { userId: 5, name: "Kukukawa", icon: "5.jpeg" },
  ];

  return (
    <div className="sidebarContainer">
      <ul className="sidebarButtonItems">
        <li className="sidebarButton">
          <Home />
          <span className="sidebarButtonText">ホーム</span>
        </li>
        <li className="sidebarButton">
          <Search />
          <span className="sidebarButtonText">検索</span>
        </li>
        <li className="sidebarButton">
          <Notifications />
          <span className="sidebarButtonText">通知</span>
        </li>
        <li className="sidebarButton">
          <Message />
          <span className="sidebarButtonText">メッセージ</span>
        </li>
        <li className="sidebarButton">
          <Bookmark />
          <span className="sidebarButtonText">ブックマーク</span>
        </li>
        <li className="sidebarButton">
          <Person />
          <span className="sidebarButtonText">プロフィール</span>
        </li>
        <li className="sidebarButton">
          <Settings />
          <span className="sidebarButtonText">設定</span>
        </li>
      </ul>

      <hr className="sidebarLine" />

      <ul className="sidebarUsers">
        {Users.map((user) => (
          <li key={user.id} className="loginUserItem">
            <img src={user.profilePicture} alt="" className="loginUserIcon" />
            <span className="loginUserName">{user.username}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
