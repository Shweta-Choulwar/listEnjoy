// import axios from "axios";
import express from "express"
const app = express();

app.post("/post",(req, res)=>{
    console.log("Connected to React");
    res.redirect('/src/Components/Browse.js');
})

const PORT = process.env.PORT || 8080;

app.listen(PORT,console.log(`Server attended on port ${PORT}`));