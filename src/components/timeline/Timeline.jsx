import React from "react";
import Share from "../../components/share/Share";
import Post from "../../components/post/Post";
import "./Timeline.css";

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

  const posts = [
    {
      _id: "69fbfa81e3c02bbfaa06459f",
      userId: "69eb1e87734f83a2fe696ba0",
      desc: "Taro2です",
      img: "1",
      likes: [],
      createdAt: "2026-05-07T02:35:45.836Z",
      updatedAt: "2026-05-07T02:35:45.836Z",
      __v: 0,
    },
    {
      _id: "69fbe911505a3a0de84ee9ae",
      userId: "69cda9773e1e29e06bff9d6e",
      desc: "2回目の投稿です",
      img: "2",
      likes: ["69eb1e87734f83a2fe696ba0"],
      createdAt: "2026-05-07T01:21:21.293Z",
      updatedAt: "2026-05-07T02:14:50.084Z",
      __v: 0,
    },
    {
      _id: "69fbf937e3c02bbfaa06458c",
      userId: "69cda9773e1e29e06bff9d6e",
      desc: "n回目の投稿です",
      img: "3",
      likes: [],
      createdAt: "2026-05-07T02:30:15.591Z",
      updatedAt: "2026-05-07T02:30:15.591Z",
      __v: 0,
    },
    {
      _id: "69fbf93be3c02bbfaa06458e",
      userId: "69cda9773e1e29e06bff9d6e",
      desc: "n回目の投稿です",
      img: "4",
      likes: [],
      createdAt: "2026-05-07T02:30:19.205Z",
      updatedAt: "2026-05-07T02:30:19.205Z",
      __v: 0,
    },
  ];

  return (
    <div className="timelineContainer">
      <Share _id={user._id} profilePicture={user.profilePicture} />

      {/* 投稿の数だけ繰り返して表示する */}
      {posts.map((post) => (
        <Post
          _id={user._id}
          username={user.username}
          profilePicture={user.profilePicture}
          post={post}
        />
      ))}
    </div>
  );
}
