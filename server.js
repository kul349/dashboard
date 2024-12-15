import connectDB from "./index.js";
import dotenv from 'dotenv';
import {app} from "./app.js"
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 8000;

connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}`);
      });
}).catch((error) => {
    console.log("MONGOOSE CONNECTION FAILD!!",error);
})