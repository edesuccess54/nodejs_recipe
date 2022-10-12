const express = require('express');
const bodyParser = require('body-parser')
const { getRecipes, createRecipe } = require("../controllers/recipesControllers")

const router = express.Router();

const urlencodedparser = bodyParser.urlencoded({extended: false})

router.get("/recipes", getRecipes)
router.post("/create", urlencodedparser, createRecipe)

module.exports = router