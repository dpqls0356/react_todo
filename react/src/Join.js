import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
function Join(){
    const PostLogin = ()=>{

    }
    return (
        <div>
            <div>
                <form onSubmit={PostLogin}>
                    <label htmlFor="id">ID</label>
                    <input id="id" type="text" placeholder="Write Your ID"></input>
                    <label htmlFor="pw">Password</label>
                    <input id="pw" type="password" placeholder="Write Your Password"></input>
                    <input type="submit" value="Login"></input>
                </form>
            </div>
        </div>
    )
}
export default Join;