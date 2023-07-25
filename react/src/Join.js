import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
function Join(){
    const [response,SetResponse] = useState("");
    const [idError, setIdError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [values,setValues] = useState({
        username:"",
        userid:"",
        password:"",
        checkpassword:"",
    });
    const handleChange = (e)=>{
        setValues({
            ...values,[e.target.name] : e.target.value
        })
    }
    const PostJoin = (e)=>{
        e.preventDefault();
        if(values.password===values.checkpassword){
            setPasswordError(false);
            setIdError(false);
            axios.post(`http://localhost:8080/join`,values)
            .then((response) => { SetResponse(response.data) });
            if(response.res==="fail"){
                setIdError(true);
                setValues({userid:""});
            } 
        }
        else{
            setValues({password:""});
            setPasswordError(true);
        }
    }
    return (
        <div>
            <div>
                <form onSubmit={PostJoin}>
                    <label htmlFor="username">UserName</label>
                    <input required onChange={handleChange} name="username" id="username" type="text" placeholder="Write Your Name"></input>
                    {idError?<div>이미 존재하는 아이디입니다.</div>:null}
                    <label htmlFor="id">ID</label>
                    <input required onChange={handleChange} name="userid" id="id" type="text" placeholder="Write Your ID"></input>
                    {passwordError?<div>not match password</div>:null}
                    <label htmlFor="pw">Password</label>
                    <input required onChange={handleChange} name="password" id="pw" type="password" placeholder="Write Your Password"></input>
                    <label htmlFor="check-pw">Check Password</label>
                    <input required onChange={handleChange} name="checkpassword" id="check-pw" type="password" placeholder="ReWrite Your Password"></input>
                    <input type="submit" value="Join"></input>
                </form>
            </div>
        </div>
    )
}
export default Join;