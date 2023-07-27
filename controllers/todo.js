import ToDo from "../models/TodoModel.js";

export const getTodoList =async(req,res)=>{
    const {userid} = req.params;
    const todo = await ToDo.findOne({userid:userid});
    if(todo.todolist===null){
        res.send({todolist:[]});
    }
    else
        res.send({todolist:todo.todolist});
    
}
export const postTodoList = async(req,res)=>{
    console.log(req.body);
}