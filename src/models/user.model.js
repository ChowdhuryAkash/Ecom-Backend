const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const userSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        phone:{
            type:String,
        },
        password:{
            type:String,
        },
        isEmailVerified:{
            type:Boolean
        },
        isPhoneVerified:{
            type:Boolean
        },
        avatar:{
            type:String
        },
        otp:{
            type:String
        },
        isAccountActive:{
            type:Boolean
        }
    },
    {
        timeStamps:true
    }
)


// Encrypth passwprd before saving to the database...
userSchema.pre('save', async function(next){
    // if password is modified then encrypt this password
    if(this.isModified(password)){
        try{
            const salt=bcrypt.genSalt(10);
            this.password=bcrypt.hash(this.password, salt);
        }
        catch(e){
            console.log(e);
        }
    }
    else{
        return next();
    }
})

// function to check if the password is valid
userSachema.methods.isPasswordValid=async function(){
    return await bcrypt.compare(password, this.password);
}


const User = mongoose.model(userSchema);
module.exports=User;