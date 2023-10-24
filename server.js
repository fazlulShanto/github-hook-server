const express  = require('express');
const app = express();
const port = process.env.PORT || 3456;
app.use(express.json());
app.get('/',(req ,res)=>{
  console.log(new Date().toString(),req.method , '/');
  res.send("Good!");
});

app.post('/',(req,res)=>{
  console.log(new Date().toString(),'body',req.body);
  res.send("good");
})


app.listen(port,()=>{
  console.log(`server running at : ${port}`);
})
