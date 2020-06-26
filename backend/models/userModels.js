import mongoose from 'mongoose';

const userDetailSchema=new mongoose.Schema({
  name: { type: String, required: true },
  email: {type: String, required: true, unique: true,dropDups:true},
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false }
})

const userModel=mongoose.model('User',userDetailSchema);

export default userModel;
