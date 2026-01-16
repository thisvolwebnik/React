import "./styles/App.css";
import { useState } from "react";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";

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

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (postId) => {
    setPosts(posts.filter((postItem) => postItem.id !== postId));
  };

  return (
    <div className="App">
      <PostForm createPost={createPost} />
      {posts.length > 0 ? (
        <PostList posts={posts} title="Список постов" removePost={removePost} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
