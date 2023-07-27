import ToDo from "../models/TodoModel.js";
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
export const postLogin = async(req,res)=>{
    const {userid,password} = req.body;
    const userExists = await User.findOne({userid:userid});
    if(userExists){ 
        if(await bcrypt.compare(password, userExists.password)){
            res.send({res:"succeed",userid:userid});
        }
        else{
            res.send({res:"fail",reason:"password",message:"틀린 비밀번호입니다."})
        }
    }
    else{
        res.send({res:"fail",reason:"userid",message:"존재하지않는 ID입니다."});
    }
}
export const postJoin = async(req,res)=>{
    const {userid,password,username} = req.body;
    const userExists = await User.findOne({userid:userid});
    if(!userExists){      
        await User.create({
            userid,password,username
        })
        await ToDo.create ({
            userid
        })
        console.log("succeed");
        res.send({res:"succeed"})
    }
    else{
        console.log("fail");
        // 이미 존재하는 id라고 알려주기
        res.send({res:"fail"});
    }
}