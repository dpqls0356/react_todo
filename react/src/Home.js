import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import Login from "./Login.js";
import Todo from "./Todo.js";
function Home(){

    const [user,setUser] = useState(false);

    return(
        <div>
            {user?<Todo/>:<Login/>}
        </div>
    )
 
}
export default Home;