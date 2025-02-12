import {z} from 'zod' 

export  const usernameValidation  = z
.string()
.min(2,"username must be atleast 2 character")
.max(10,"username must not be more than 10 character")
.regex(/$%^&*/,'username must not contain special charcter')

export const signUpSchema = z.object({
     username:usernameValidation,
     email : z.string().email({message:"Invalid email address"}),
     password :z.string().min(6, {message:"password must be greater than 6 charcter"})
})