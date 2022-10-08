const mongoose = require("mongoose")

const modelSchema = mongoose.Schema(
    {
    title: {
        type: String,
        require: [true, "Please add recipe title"]
    },
    ingredients: {
        type: String,
        require: [true, "Please add atleast one ingredients"]
    },
    method: {
         type: String,
         require: [true, "Please add recipe method"]
    },
    cookingTime: {
        type: String,
        require: [true, "Please add cooking time"]
    }
},
{
    timestamps: true
}
)

const Recipe = mongoose.model("recipe", modelSchema);
module.exports = Recipe