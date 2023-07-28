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
    const {todo}  = req.body;
    const {userid} = req.params;
    const updateDB = await ToDo.findOne({userid:userid});
    if(updateDB){
        const pushDate = updateDB.todolist.concat(todo);
        await ToDo.updateOne({userid},{$set:{todolist:pushDate}});
        const resDate =  await ToDo.findOne({userid:userid});
        res.send({todoList:resDate.todolist});
    }
    else{
        console.log(".....");
        // 비정상적인 접근 - 유저 아이디와 일치하는 투두 데이터가 없음
    }

}