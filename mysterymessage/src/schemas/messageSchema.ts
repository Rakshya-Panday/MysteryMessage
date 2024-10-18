import {z} from 'zod' 

export const messageSchema = z.object({
   content :z.string().min(10,"Content must be atleast 10 charcter")
   .max(300,"content must be longer than 300 charcter")
})