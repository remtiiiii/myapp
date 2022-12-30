var express = require('express');
var router = express.Router();

router.get('/' , function(req,res){

res.render('test',{des:'hii', boody:'lool'})

})

module.exports = router;