const router = require("express").Router();
const userRoute = require("./users");
const todosRoute = require("./todos")
const postRoute = require("./posts")
const commentsRoute = require("./comments")
const albumRoute = require("./album")
const photosRoute = require("./photos")


router.use("/users",userRoute);
// router.get("/",(req,res)=>{
//     res.json('This is index.js');
//    })
router.use("/todos",todosRoute);
router.use("/posts",postRoute);
router.use("/comments",commentsRoute);
router.use("/album",albumRoute);
router.use("/photos",photosRoute);
   
module.exports = router;