import mongoose from "mongoose";

const toDoSchema = mongoose.Schema({
    userid:{type:String,required:true},
    todolist:[{type:String}]
})
const ToDo =mongoose.model("ToDo",toDoSchema);
export default ToDo;