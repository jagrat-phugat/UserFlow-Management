const mongo = require("mongoose")

mongo.connect("mongodb://127.0.0.1:27017/user-database")
.then(() => {console.log("DB Connected");
})
.catch(err => {console.log("Some error occured");
})


const userSchema =  new mongo.Schema({
    Id : {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    
    age : {
        type : String,
    },
    gender : {
        required : true,
        type : String
    }  
})

const user = mongo.model("UserModel", userSchema)
module.exports = user

