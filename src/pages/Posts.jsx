// import "./styles/App.css";
import { useEffect, useState } from "react";
import { Button } from "../components/UI/button/Button";
import { Modal } from "../components/UI/Modal/Modal";
import { PostForm } from "../components/PostForm";
import { PostFilter } from "../components/PostFilter";
import { Loader } from "../components/UI/Loader/Loader";
import { PostList } from "../components/PostList";
import { Pagination } from "../components/UI/pagination/Pagination";
import { getPageCount, getPagesArray } from "../utils/pages";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modalVisible, setModalVisible] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [isLoadedPost, setIsLoadedPost] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const pagesArray = getPagesArray(totalPage);

  useEffect(() => {
    getPosts();
  }, [page]);

  async function getPosts() {
    setIsLoadedPost(true);

    const response = await PostService.getAll(limit, page);
    const totalCount = response.headers["x-total-count"];

    setPosts(response.data);
    setTotalPage(getPageCount(totalCount, limit));
    setIsLoadedPost(false);
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModalVisible(false);
  };

  const removePost = (postId) => {
    setPosts(posts.filter((postItem) => postItem.id !== postId));
  };

  const changePage = (page) => {
    setPage(page);
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
      <Pagination totalPage={totalPage} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;
