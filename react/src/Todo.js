import axios from "axios";
import { useEffect, useState } from "react";

function Todo({getLoginStatue,userid}){
    const logout = () =>{
        getLoginStatue(false);
    }
  
    const [todoList,setTodoList] = useState([]);
    const [todo,setTodo] = useState("");
    const [todoIndex,setTodoIndex]= useState("");
  
    // 로그인 성공시 가지고 있던 투두 데이터 가져오기
    useEffect(()=>{
        axios.get(`http://localhost:8080/todo/${userid}`)
        .then((response)=>{setTodoList(response.data.todolist)});
    },[]);

    const addTodo = (e)=>{
        e.preventDefault();
        axios.post(`http://localhost:8080/todo/${userid}`,{todo})
        .then((response)=>{
            setTodoList(response.data.todoList);
            setTodo("");
        })
    }
    const writeTodo = (e)=>{
        setTodo(e.target.value);
    }

    useEffect(()=>{
        if(todoIndex!==""){
            console.log('index:'+todoIndex);
            axios.delete(`http://localhost:8080/todo/${userid}/${todoIndex}`)
            .then((response)=>{
                setTodoList(response.data.todoList);
                setTodoIndex("");
        })
    }
    },[todoIndex]);
    const deleteTodo = (index) =>{
        setTodoIndex(index);
    }
    return (
        <div>
            <header>
                <h2>TODO LIST {userid}</h2>
                <button onClick={logout}>Logout</button>
            </header>
            <form onSubmit={addTodo}>
                <input value={todo} onChange={writeTodo} type="text"></input>
                <input type="submit" value="Add"></input>
            </form>
            <ul>
                {todoList.map((item,index)=><li key={index}>{index}:{item}<button onClick={()=>deleteTodo(index)}>x</button></li>)}

            </ul>
        </div>
    )
}

export default Todo;