import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import Login from "./Login.js";
import Todo from "./Todo.js";
function Home(){

    const [user,setUser] = useState(false);
    const getUser = (x) =>{
        setUser(x);
    }

    return(
        <div>
            {user?<Todo getUser={getUser}/>:<Login getUser={getUser}/>}
        </div>
    )
 
}
export default Home;