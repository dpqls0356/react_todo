import { Link,useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from 'axios'
function Loign({getUser}){
    const [res,setRes] = useState({});
    const navigate = useNavigate();
    const [idError,setIdError] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [values,setValues] = useState({
        userid:"",
        password:"",
    });
    const handleChange = (e)=>{
        setValues({
            ...values,[e.target.name] : e.target.value
        })
    }
    useEffect(()=>{
        setIdError(false);
        setPasswordError(false);
        if(res.res==='succeed'){
            getUser(true);
        }
        else if(res.reason==='password'){
            setPasswordError(true);
        }
        else if(res.reason==='userid'){
            setIdError(true);
        }
    },[res]);
    async function PostJoin(e){
        e.preventDefault();
        axios.post(`http://localhost:8080/login`,values)
        .then((response) => { setRes(response.data) }); 

    }
    return (
        <div>
            <form onSubmit={PostJoin}>
                {idError?<div>잘못된 아이디입니다.</div>:null}
                <label htmlFor="id">ID</label>
                <input value={values.userid} required name="userid" onChange={handleChange} id="id" type="text" placeholder="Write Your ID"></input>
                {passwordError?<div>잘못된 비밀번호입니다.</div>:null}
                <label htmlFor="pw">Password</label>
                <input value={values.password} required name="password" onChange={handleChange} id="pw" type="password" placeholder="Write Your Password" value={values.password}></input>
                <input type="submit" value="Join"></input>
            </form>
            <Link to={process.env.PUBLIC_URL+`/join`}>Create Accout</Link>
        </div>
    )
 
}
export default Loign;