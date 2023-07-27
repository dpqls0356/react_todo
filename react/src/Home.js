import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import Login from "./Login.js";
import Todo from "./Todo.js";
function Home(){
    const [userid,setUserId] = useState();
    const [loginStatue,setLoginStatue] = useState(false);
    const getLoginStatue = (x) =>{
        setLoginStatue(x);
    }
    const getUserId = (x) =>{
        setUserId(x);
    }

    return(
        <div>
            {loginStatue?<Todo userid={userid} getLoginStatue={getLoginStatue}/>:<Login getUserId={getUserId} getLoginStatue={getLoginStatue}/>}
        </div>
    )
 
}
export default Home;