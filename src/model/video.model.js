import mongoose, {schema} from mongoose
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema= new schema({ videofile:{type:String, required:true},
    thumbnail:{type:String, required:true},
    owner:{type:mongoose.schema.types.objectid, ref: user},
    title:{type:String, required:true},
    description:{type:String, required:true},
    duration:{type:number, required:true },
    views:{type:number, default:0, required:true },
    ispublished:{type:Boolean,default:true , required:true },


 
},{timestamps: true});

videoSchema.plugin(mongooseAggregatePaginate); 
export const video= model("video","videoSchema");