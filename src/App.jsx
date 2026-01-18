import "./styles/App.css";
import { useMemo, useState } from "react";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";
import { Modal } from "./components/UI/Modal/Modal";
import { Button } from "./components/UI/button/Button";
import { usePosts } from "./hooks/usePosts";

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
  const [modalVisible, setModalVisible] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModalVisible(false);
  };

  const removePost = (postId) => {
    setPosts(posts.filter((postItem) => postItem.id !== postId));
  };

  return (
    <div className="App">
      <Button style={{ marginTop: 30 }} onClick={() => setModalVisible(true)}>
        Создать пост
      </Button>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <PostForm createPost={createPost} />
      </Modal>
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
