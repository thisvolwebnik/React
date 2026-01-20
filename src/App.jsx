import "./styles/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/About";
import Posts from "./pages/Posts";
import { Navigation } from "./components/UI/navigation/Navigation";
import { ErrorPage } from "./pages/ErrorPage";
import { Post } from "./pages/Post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route exact path="/posts" element={<Posts />} />
          <Route exact path="/posts/:id" element={<Post />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
