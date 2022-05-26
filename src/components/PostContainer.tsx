import React from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(10);
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [uptadePost, {}] = postAPI.useUptadePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUptade = (post: IPost) => {
    uptadePost(post);
  };

  return (
    <div className="post__list">
      <button onClick={handleCreate}>Add new Post</button>
      {isLoading && <h1>Loading</h1>}
      {error && <h1>Error</h1>}
      {posts &&
        posts.map((post) => (
          <PostItem
            remove={handleRemove}
            uptade={handleUptade}
            key={post.id}
            post={post}
          />
        ))}
    </div>
  );
};

export default PostContainer;
