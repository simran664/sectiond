const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const timestamps= require('mongoose-timestamps');
const StudentSchema= new Schema (
    {
        name: {type:String, default: ''},
        age:{type:Number, default:18},
        subject: {type:String, default: ''},
        marks:{type:Number, default:10}

    }
);
StudentSchema.pre('save',(next)=>{   //middleware
    this.updated_at=Date.now();      //timestamp
    next();
});
StudentSchema.plugin(timestamps,{index:true});
module.exports=mongoose.model('Student',StudentSchema); // as local scope
