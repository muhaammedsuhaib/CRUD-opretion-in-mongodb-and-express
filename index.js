const express = require('express');
const app=express();
const port=3000;
const mongoose = require('mongoose')
const productsRouter = require("./routes/productRoute")


mongoose.connect(`mongodb://localhost:27017/store`)
.then(() => console.log("DB connected"))
.catch((error) => console.log(error))

app.use(express.json());
app.use("/api/users", productsRouter)


app.listen(port,()=>{
    console.log(`lisstern port http://localhost:${port}`);
})