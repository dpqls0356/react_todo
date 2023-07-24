import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from 'axios'
function Loign(){
    const [values,setValues] = useState({
        id:"",
        password:"",
    });
    const handleChange = (e)=>{
        setValues({
            ...values,[e.target.name] : e.target.value
        })
    }
    async function PostJoin(e){
        e.preventDefault();
        console.log(values);
        axios.post(`http://localhost:8080/login`,values)
        .then((response) => { console.log(response.data); }) 
        .catch((response) => { console.log('Error!') });
    }
    return (
        <div>
            <form onSubmit={PostJoin}>
                <label htmlFor="id">ID</label>
                <input onChange={handleChange} id="id" name="id" type="text" placeholder="Write Your ID" value={values.id}></input>
                <label htmlFor="pw">Password</label>
                <input onChange={handleChange} id="pw" name="password" type="password" placeholder="Write Your Password" value={values.password}></input>
                <input type="submit" value="Join"></input>
            </form>
            <Link to={process.env.PUBLIC_URL+`/join`}>Create Accout</Link>
        </div>
    )
 
}
export default Loign;