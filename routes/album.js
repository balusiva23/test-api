const router = require('express').Router();
const Album = require("../data/album");

router.get("/",(req,res)=>{
    res.json(Album);
})

module.exports = router;