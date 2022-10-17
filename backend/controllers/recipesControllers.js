const Recipe = require("../models/recipeModel");

const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();

        // console.log(recipes)

        if(recipes) {
            let allRecipes = []
            recipes.forEach((recipe) => {
            allRecipes.push(recipe)

        })

        res.status(201).json(recipes)

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

// getting a single recipe 
const getSingleRecipe = async (req, res) => {

    try {
        const { id } = (req.params)
        const recipe = await Recipe.findById(id);

        if (recipe) {
            const { _id, title, ingredients, method, cookingTime } = recipe

            res.status(201).json({
                _id, 
                title, 
                ingredients, 
                method, 
                cookingTime
            })
        } else {
            res.status(400)
            throw new Error("Recipe not found")
        }
        
    } catch (error) {
        res.status(400).json({message: error.message})
        // throw new Error(error.message)
    }
}

// deleteing a single recipe 
const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params
        const recipe = await Recipe.findByIdAndDelete(id)

        if(recipe) {
            res.status(400).json({message: "recipe deleted"})
        } else {
            res.status(400)
            throw new Error(`No recipe with id -> ${id} found`)
        }
        
    } catch (error) {
        res.status(400).json({message: error.message})
        // throw new Error(error.message)
    }
}

module.exports = {
    getRecipes,
    createRecipe,
    getSingleRecipe,
    deleteRecipe
}