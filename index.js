var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views","./views");
app.listen(3000);
console.log('Server started');

app.get("/",function(req,res){
  res.render("home");
});
