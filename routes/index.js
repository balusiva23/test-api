const router = require("express").Router();
const userRoute = require("./users");
const todosRoute = require("./todos")
const postRoute = require("./posts")
const commentsRoute = require("./comments")


router.use("/users",userRoute);
// router.get("/",(req,res)=>{
//     res.json('This is index.js');
//    })
router.use("/todos",todosRoute);
router.use("/posts",postRoute);
router.use("/comments",commentsRoute);
   
module.exports = router;