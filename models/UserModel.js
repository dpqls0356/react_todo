import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = mongoose.Schema({
   userid :{type:String,required:true,unique:true},
   username:{type:String,required:true},
   password:{type:String,required:true},
   todo:{type:mongoose.Schema.Types.ObjectId,ref:"Todo"},
})
userSchema.pre('save',async function(){
   this.password = await bcrypt.hash(this.password,5);
});
const User =  mongoose.model("User",userSchema);
export default User;