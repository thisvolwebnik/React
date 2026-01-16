import { Input } from "./UI/input/Input";
import { Button } from "./UI/button/Button";
import { useState } from "react";
import { PostList } from "./PostList";

export const PostForm = (props) => {
  const { createPost } = props;
  const [post, setPost] = useState({ title: "", description: "" });

  const onClickAddNewPost = (event) => {
    event.preventDefault();

    const newPost = {
      id: Date.now(),
      ...post,
    };

    createPost(newPost);
    setPost({ title: "", description: "" });
  };

  return (
    <form>
      <Input
        type="text"
        placeholder="Название поста"
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />
      <Input
        type="text"
        placeholder="Описание поста"
        value={post.description}
        onChange={(event) =>
          setPost({ ...post, description: event.target.value })
        }
      />
      <Button type="submit" onClick={onClickAddNewPost}>
        Добавить пост
      </Button>
    </form>
  );
};
