import "./styles/App.css";
import { useState } from "react";
import { PostList } from "./components/PostList";
import { Button } from "./components/UI/button/Button";
import { Input } from "./components/UI/input/Input";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      description: "JavaScript - Это язык программирования",
    },
    {
      id: 2,
      title: "Python",
      description: "Python - Это язык программирования",
    },
    {
      id: 3,
      title: "Go",
      description: "Go - Это язык программирования",
    },
  ]);
  const [post, setPost] = useState({ title: "", description: "" });

  const onClickAddNewPost = (event) => {
    event.preventDefault();

    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  return (
    <div className="App">
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
      <PostList posts={posts} title="Список постов" />
    </div>
  );
}

export default App;
