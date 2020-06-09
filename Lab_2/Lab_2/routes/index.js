'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    let result = "Result: "; //declare variables
    let method = req.query.method;
    let x = parseFloat(req.query.x);
    let y = parseFloat(req.query.y);

    if (!isNaN(x) && !isNaN(y)) //check if x and y are numbers
    {
        switch (method) //switch to the required method
        {
            case "add":
                result += x + y;
                break;
            case "subtract":
                result += x - y;
                break;
            case "divide":
                result += x / y;
                break;
            case "multiply":
                result += x * y;
                break;
            default:
                result = "Please submit a valid method.";
        }
    }
    else //not numbers
    {
        result = "Please submit numbers for x and y";
    }
    console.log("Method " + method); //log the method type
    console.log(result); //log the result
    res.render('index', { title: "Express" });
});

module.exports = router;
