import mongoose, {schema} from "moongose" ;
const userSchema = newSchema({
    username :{
        type:String,
        required : true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true 
    },
    email : {
        type : String,
        required : true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname : {
        type : String,
        required : true,
        trim : true,
        index : true,
    },
    avatar : {
        type: String, //cloudinary
        required : true,
    
    },
    coverImage :{
        type: String, //cloudinary url

    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"

        }
    ],
    password: {
        type: String,
        required : [true, 'password is required']

    },
    refreshToken: {
        type: String,
    }
},
{
    timestamps: true
}
)


export const User = mongoose.model("User", userSchema)
