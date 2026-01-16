import "./styles/App.css";
import { useState } from "react";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { Select } from "./components/UI/select/Select";

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
  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (postId) => {
    setPosts(posts.filter((postItem) => postItem.id !== postId));
  };

  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm createPost={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <Select
          value={selectedSort}
          defaultValue="Сортировка"
          onChange={sortPost}
          options={[
            { value: "title", name: "По названию" },
            { value: "description", name: "По описанию" },
          ]}
        />
      </div>
      {posts.length > 0 ? (
        <PostList posts={posts} title="Список постов" removePost={removePost} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
