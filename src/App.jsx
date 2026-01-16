import "./styles/App.css";
import {PostItem} from "./components/PostItem";
import {useState} from "react";
import {PostList} from "./components/PostList";

function App() {

  const [posts, setPosts] = useState([{
    id: 1, title: "JavaScript", description: "JavaScript - Это язык программирования"
  }, {
    id: 2, title: "Python", description: "Python - Это язык программирования"
  }, {
    id: 3, title: "Go", description: "Go - Это язык программирования"
  }])

  return (
    <div className="App">
      <PostList posts={posts} title="Список постов" />
    </div>
  )
}

export default App
