import React from "react";
import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Post({ _id, username, profilePicture, post }) {
  //投稿の経過時間の計算
  const formatRelativeTime = (createdAt) => {
    const elapsed = Date.now() - new Date(createdAt).getTime();
    const units = [
      { label: "年", ms: 1000 * 60 * 60 * 24 * 365 },
      { label: "ヶ月", ms: 1000 * 60 * 60 * 24 * 30 },
      { label: "日", ms: 1000 * 60 * 60 * 24 },
      { label: "時間", ms: 1000 * 60 * 60 },
      { label: "分", ms: 1000 * 60 },
      { label: "秒", ms: 1000 },
    ];
    for (const { label, ms } of units) {
      const value = Math.floor(elapsed / ms);
      if (value >= 1) return value + label;
    }
  };

  return (
    <div className="postContainer">
      <img
        src={"assets/person/" + profilePicture + ".jpeg"}
        className="postHeaderIcon"
        alt=""
      />
      <div className="postMain">
        <div className="postHeader">
          <div className="postHeaderRight">
            <p className="postHeaderUser">{username}</p>
            <p className="relativeTimeContainer">
              {formatRelativeTime(post.createdAt) + "前"}
            </p>
          </div>
          <div className="postHeaderLeft">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postContents">{post.desc}</div>
        {post.img && (
          <img src={"/assets/post/" + post.img + ".jpeg"} className="postImg" />
        )}
      </div>
    </div>
  );
}
