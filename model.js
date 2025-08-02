const mongoose=require('mongoose');

const schemaModel1=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    message:{
        type:String,
        require:true
    }
});
const schemaModel2=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:Number,
        reuire:true
    },
    password:{
        type:String,
        reqire:true
    },
    cpassword:{
        type:String,
        require:true
    }
})
const contactuserData=new mongoose.model('contactusdata',schemaModel1);
const signupData=new mongoose.model('signupdata',schemaModel2);
module.exports={
    collection1:contactuserData,
    collection2:signupData
};
