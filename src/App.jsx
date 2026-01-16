import "./styles/App.css";
import {PostItem} from "./components/PostItem";

function App() {

  return (
    <div className="App">
      <PostItem post={{id: 1, title: "JavaScript", description: "JavaScript - Это язык программирования"}}/>
    </div>
  )
}

export default App
