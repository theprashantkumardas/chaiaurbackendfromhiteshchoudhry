// require('dotenv').config({path: './env'})
// import dotenv from "env"
import 'dotenv/config';

import connectDB from "./db/index.js";

// dotenv.config({
//     path: './env'
// })




// connectDB()











/*  (first approach ka namuna haui ye :)  o.k )
import express from "express"
const app = express()

;(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () => {
            console.log("ERRRR: " , error);
            throw error
        })

        app.listen(process.env.PORT, () =>{
            console.log(`App is listening on port $
            {process.env.PORT}`);
        })        
    } catch (error){
        console.error("ERROR: ", error)
        throw err
    }
})()
*/