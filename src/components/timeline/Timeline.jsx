import React from "react";
import Share from "../../components/share/Share";
import Post from "../../components/post/Post";
import "./Timeline.css";
import { Posts } from "../../dummyData";

export default function Timeline() {
  const user = {
    _id: "69cda9773e1e29e06bff9d6e",
    username: "Taro",
    email: "Taro@gmail.com",
    password: "abcdef",
    profilePicture: "1",
    coverPicture: "",
    followers: ["69eb1e87734f83a2fe696ba0"],
    followings: [],
    idAdmin: false,
    createdAt: "2026-04-01T23:25:43.119Z",
    updatedAt: "2026-05-07T02:34:31.240Z",
    __v: 0,
  };

  return (
    <div className="timelineContainer">
      <Share _id={user._id} profilePicture={user.profilePicture} />

      {/* 投稿の数だけ繰り返して表示する */}
      {Posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
