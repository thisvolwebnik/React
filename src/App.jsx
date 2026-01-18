import "./styles/App.css";
import { useMemo, useState } from "react";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";

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
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort]),
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase()),
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (postId) => {
    setPosts(posts.filter((postItem) => postItem.id !== postId));
  };

  return (
    <div className="App">
      <PostForm createPost={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        posts={sortedAndSearchedPosts}
        title="Список постов"
        removePost={removePost}
      />
    </div>
  );
}

export default App;
