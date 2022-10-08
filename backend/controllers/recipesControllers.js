const Recipe = require("../models/recipeModel");
const asyncHandler = require('express-async-handler')


const getRecipes = async (req, res) => {
    try {
        res.send("All recipe");
    } catch (error) {
        console.log(error.message)
    }
}

// creating recipe 
const createRecipe = async(req, res) => {
    try {
        // const { title, ingredients, method, cookingTime } =  req.body
        const title =""
        const ingredients = "pepper, onion, flour"
        const method = "cokking"
        const cookingTime ="15 minutes"

        if(!title || !ingredients || !method || !cookingTime) {
            res.status(400)
            throw new Error("Please fill all fields")
        }

        const recipe = await Recipe.create({
            title, 
            ingredients, 
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
        throw new Error("request failed to execute")
    }
}



module.exports = {
    getRecipes,
    createRecipe
}