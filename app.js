// init
const express = require('express');
var app = module.exports = express();
const cors = require('cors');
const bodyParser = require('body-parser');

//Multer
var multer = require('multer')



var upload = multer({
  dest: 'uploads/'
});

app.use(bodyParser.json());
app.use(cors());

// app.get("/",(req,res,next)=>{
//   res.sendFile(__dirname+"/index.html");
// });

app.use(express.static(__dirname + "/public"));


app.post("/upload", upload.single('file'), (req, res, next) => {
  return res.json({size:req.file.size});
});




const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Everything works fine !!");
})
