import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Login from "./Login.js";
import Todo from "./Todo.js";
import Home from "./Home.js";
import Join from './Join.js';
function App() {
 return <Router>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/join" element={<Join/>}/>
  </Routes>
 </Router>
}

export default App;