const express = require('express');
const bodyParser = require('body-parser')
const { getRecipes, createRecipe, getSingleRecipe, deleteRecipe } = require("../controllers/recipesControllers")

const router = express.Router();

const urlencoded_parser = bodyParser.urlencoded({extended: false})

router.get("/recipes", getRecipes)
router.get("/recipes/:id", getSingleRecipe)
router.delete("/recipes/:id", deleteRecipe)
router.post("/create",urlencoded_parser, createRecipe)

module.exports = router