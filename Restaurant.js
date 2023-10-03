const apiResponse = "Restaurant1 - Italian, Restaurant2 - Mexican, Restaurant3 - Chinese";

// Regular expression pattern to match "Name - Cuisine" format
const restaurantPattern = /([\w\s]+) - ([\w\s]+)/g;

let matches;
while ((matches = restaurantPattern.exec(apiResponse)) !== null) {
    const restaurantName = matches[1].trim();
    const cuisine = matches[2].trim();
    console.log(`Restaurant Name: ${restaurantName}, Cuisine: ${cuisine}`);
}
