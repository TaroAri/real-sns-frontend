import React from "react";
import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  return (
    <div className="postContainer">
      <img
        src={Users.filter((User) => User.id === post.id)[0].profilePicture}
        className="postHeaderIcon"
        alt=""
      />
      <div className="postMain">
        <div className="postHeader">
          <div className="postHeaderRight">
            <p className="postHeaderUser">
              {Users.filter((User) => User.id === post.id)[0].username}
            </p>
            <p className="relativeTimeContainer">{post.date}</p>
          </div>
          <div className="postHeaderLeft">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postContents">{post.desc}</div>
        {post.photo && <img src={post.photo} className="postImg" />}
        <div className="reactionContainer">
          <div className="likeContainer">
            <FavoriteIcon htmlColor="red" />
            <p className="likeText">{post.like}人がいいねを押しました</p>
          </div>
          <div className="commentContainer">
            <p className="commentText">{post.comment}：コメント</p>
          </div>
        </div>
      </div>
    </div>
  );
}
