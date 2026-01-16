import {PostItem} from "./PostItem";

export const PostList = (props) => {
  const { posts, title } = props;

  return (
    <div className="post__list">
      <h1 style={{textAlign: "center"}}>{title}</h1>
      {posts.map((post) => (
        <PostItem {...post} key={post.id}/>
      ))}
    </div>
  )
}