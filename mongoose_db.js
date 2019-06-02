var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/IctUsersss',{useNewUrlParser:true}).
then(res=>console.log("Connected to db"))
.catch(err=>console.log(err));
module.exports={
    mongoose:mongoose
}