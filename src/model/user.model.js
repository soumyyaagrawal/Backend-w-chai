import mongoose, {schema} from mongoose
import jwt from "jsonwebtoken"

const userschema = mongoose.schema({
    username:{type:String, required:true, unique: true, lowercase:true, trim:true, index:true},//index makes searching optimized
    email:{type:String, required:true, unique: true, lowercase:true, trim:true },
    fullname:{type:String, required:true, trim:true, index:true },
    avatar:{type: string, //cloudinary url
        required:true},
    coverimage:{type: string},
    

    watchHistory:[{type:mongoose.Schema.Types.Objectid,
        ref:video, 
        required:true, }],

    password:{type:string,
        required:[true, "please enter the password"]
    },
    refreshtokens:{}
    
},
{timestamps:true})

userschema.pre("save", async function(next){
    if(!this.isModified("password") 
)return next();

this.password= bcrypt.hash(this.password, 10, next());
})

user.schema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
}

user.schema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this.Objectid,
            email: this.email,
            username: this.username,
        },
        process.env.access_token_secret,
        {
        
            expiresIn: process.env.access_token_expire,
        }



    )
}

user.schema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this.Objectid,
             
        },
        process.env.refresh_token_secret,
        {
        
            expiresIn: process.env.refresh_token_expire,
        }



    )
}



        
        
        
        



export const user = mongoose.model("user", userschema )
