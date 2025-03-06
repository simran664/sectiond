const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/sectiond',{})
.then((data)=>console.log("DATABASE CONNECTED"))
.catch((err)=>console.log("ERROR"+err));