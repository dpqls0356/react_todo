import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
function Join(){
    const [succeedJoin,setSucceedJoin] = useState(false);
    const [res,setRes] = useState("");
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
    useEffect(()=>{                
            if(String(res)==="fail"){
                console.log(res);
                setIdError(true);
            }
            else if(String(res)==="succeed"){
                setSucceedJoin(true);
            }
    },[res]);

    const postJoin = (e)=>{
        e.preventDefault();
        setPasswordError(false);
        setIdError(false);
        if(values.password===values.checkpassword){
            axios.post(`http://localhost:8080/join`,values)
            .then((response) => { 
                setRes(response.data.res);
            }); 
        }
        else{
            setPasswordError(true);
        }
    }
    return (
        <div>
            {succeedJoin?
                <div>
                    <h3>Succeed Join!</h3>
                    <Link to="/">Login</Link>
                </div>
            :
                <form onSubmit={postJoin}>
                    <label htmlFor="username">UserName</label>
                    <input value={values.username}required onChange={handleChange} name="username" id="username" type="text" placeholder="Write Your Name"></input>
                    {idError?<div>이미 존재하는 아이디입니다.</div>:null}
                    <label htmlFor="id">ID</label>
                    <input value={values.userid}required onChange={handleChange} name="userid" id="id" type="text" placeholder="Write Your ID"></input>
                    {passwordError?<div>비밀번호가 일치하지않습니다.</div>:null}
                    <label htmlFor="pw">Password</label>
                    <input value={values.password}required onChange={handleChange} name="password" id="pw" type="password" placeholder="Write Your Password"></input>
                    <label htmlFor="check-pw">Check Password</label>
                    <input value={values.checkpassword}required onChange={handleChange} name="checkpassword" id="check-pw" type="password" placeholder="ReWrite Your Password"></input>
                    <input type="submit" value="Join"></input>
                </form>
            }
        </div>
    )
}
export default Join;