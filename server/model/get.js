const mongoose=require("mongoose");
const Dts=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    ten:{
        type:String,
        required:true
    },
    twelve:{
        type:String,
        required:true
    },
    degree:{
        type:String,
        required:true
    },
    stream:{
        type:String,
        required:true
    }

})
const datas=mongoose.model("Stddatas",Dts);
module.exports=datas;


