import React, { FC } from "react";
import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  uptade: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, uptade }) => {
  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    remove(post);
  };

  const handleUptade = (e: React.MouseEvent) => {
    const title = prompt() || "";
    uptade({ ...post, title });
  };

  return (
    <div className="post" onClick={handleUptade}>
      {post.id}. {post.title}
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default PostItem;
