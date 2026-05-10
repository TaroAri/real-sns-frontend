import React from "react";
import { useState } from "react";
import "./Share.css";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import GifIcon from "@mui/icons-material/Gif";
import FaceIcon from "@mui/icons-material/Face";
import PollIcon from "@mui/icons-material/Poll";

export default function Share({ _id, profilePicture }) {
  const [postContent, setPostContent] = useState("");

  //投稿処理　[[未完成]]
  const handlePostSubmit = (_id) => {
    console.log(postContent);
  };

  return (
    <div className="shareContainer">
      <div className="shareTextContainer">
        <img
          src={"/assets/person/" + profilePicture + ".jpeg"}
          alt=""
          className="userIcon"
        />
        <textarea
          className="shareInput"
          placeholder="今何してる？"
          rows={1}
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </div>
      <hr className="line" />
      <div className="shareActionsContainer">
        <div className="postActions">
          <div className="photo postActionsItem">
            <PhotoSizeSelectActualIcon sx={{ color: "blue" }} />
            <p>写真</p>
          </div>
          <div className="gif postActionsItem">
            <GifIcon sx={{ color: "pink" }} />
            <p>GIF</p>
          </div>
          <div className="feelings postActionsItem">
            <FaceIcon sx={{ color: "green" }} />
            <p>気持ち</p>
          </div>
          <div className="vote postActionsItem">
            <PollIcon sx={{ color: "red" }} />
            <p>投票</p>
          </div>
        </div>
        <button className="postButton" onClick={() => handlePostSubmit(_id)}>
          投稿
        </button>
      </div>
    </div>
  );
}
