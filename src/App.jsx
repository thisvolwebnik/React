import "./styles/App.css";
import { useEffect, useState } from "react";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";
import { Modal } from "./components/UI/Modal/Modal";
import { Button } from "./components/UI/button/Button";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import { Loader } from "./components/UI/Loader/Loader";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoadedPost, setIsLoadedPost] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    setIsLoadedPost(true);
    setPosts(await PostService.getAll());
    setIsLoadedPost(false);
  }

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
      {isLoadedPost ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title="Список постов"
          removePost={removePost}
        />
      )}
    </div>
  );
}

export default App;
