const Recipe = require("../models/recipeModel");

const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();

        console.log(req.body)

        if(recipes) {
            const {title, ingredients, method, cookingTime} = recipes

            res.status(201).json({
                title,
                ingredients,
                method,
                cookingTime
            })

        } else {
            res.status(400)
            throw new Error("No recipe found!")
        }

    } catch (error) {
        console.log(error.message)
    }
}



// creating recipe 
const createRecipe = async(req,res) => {
    try {
        const { title, ingredients, method, cookingTime } = req.body;

        if(!title || !ingredients || !method || !cookingTime) {
            res.status(400)
            throw new Error("Please fill all fields");
        }

        const recipe = await Recipe.create({
            title, 
            ingredients: ingredients.split(","), 
            method, 
            cookingTime
        })

        if(recipe) {
            const { _id, title, ingredients, method, cookingTime } = recipe
            res.status(201).json({
            _id, title, 
            ingredients, 
            method, 
            cookingTime
            })
        } else {
            res.status(400)
            throw new Error("recipe failed to create")
        }
    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
}

module.exports = {
    getRecipes,
    createRecipe
}