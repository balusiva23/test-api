const router = require("express").Router();
const todos = require("../data/todos");


router.get("/",(rewq,res)=>{
    res.json(todos);
})

module.exports = router;