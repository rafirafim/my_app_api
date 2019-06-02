var mongoose=require('mongoose');
var IctUsers= mongoose.model('Students',{
    name:
    {
        type:String
    },
    rollno:
    {
        type:Number
    },
    admno:
    {
        type:String
    },
    college:
    {
        type:String
    }
});

module.exports={IctUsers}