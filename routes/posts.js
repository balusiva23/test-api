const router = require("express").Router();
const Posts = require("../data/posts");

router.get("/",(req,res)=>{
    res.json(Posts);
});

module.exports = router;