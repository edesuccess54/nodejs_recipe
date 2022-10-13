const express = require('express');
const bodyParser = require('body-parser')
const { getRecipes, createRecipe, getSingleRecipe } = require("../controllers/recipesControllers")

const router = express.Router();

const urlencodedparser = bodyParser.urlencoded({extended: false})

router.get("/recipes", getRecipes)
router.get("/recipes/:id", getSingleRecipe)
router.post("/create", urlencodedparser, createRecipe)

module.exports = router