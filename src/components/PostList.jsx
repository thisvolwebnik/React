import { PostItem } from "./PostItem";

export const PostList = (props) => {
  const { posts, title, removePost } = props;

  return (
    <div className="post__list">
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          number={index + 1}
          {...post}
          key={post.id}
          removePost={removePost}
        />
      ))}
    </div>
  );
};
