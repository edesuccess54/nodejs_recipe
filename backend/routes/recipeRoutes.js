const express = require('express');
const { getRecipes, createRecipe } = require("../controllers/recipesControllers")

const router = express.Router();

router.get("/recipes", getRecipes)
router.post("/create", createRecipe)


module.exports = router