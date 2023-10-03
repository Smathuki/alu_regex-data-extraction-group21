const apiResponse = "ingredient1, ingredient2, ingredient3, ingredient4";

// Regular expression pattern to match comma-separated ingredients
const ingredientPattern = /([\w\s]+(?:,\s[\w\s]+)*)/g;

const ingredients = apiResponse.match(ingredientPattern);

if (ingredients) {
    for (const ingredient of ingredients) {
        console.log(`Ingredient: ${ingredient.trim()}`);
    }
}
