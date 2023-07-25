import User from "../models/UserModel.js";

export const postLogin = (req,res)=>{

}
export const postJoin = async(req,res)=>{
    const {userid,password,username} = req.body;
    const userExists = await User.findOne({userid:userid});
    if(!userExists){        
        await User.create({
            userid,password,username
        })
        res.send({res:"succeed"})
    }
    else{
        // 이미 존재하는 id라고 알려주기
        res.send({res:"fail"});
    }
}