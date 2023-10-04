const apiResponse = "Restaurant1 - Rwandan, Restaurant2 - Kenyan, Restaurant3 - Nigerian";

// Regular expression pattern to match "Name - Cuisine" format
const restaurantPattern = /([\w\s]+) - ([\w\s]+)/g;

let matches;
while ((matches = restaurantPattern.exec(apiResponse)) !== null) {
    const restaurantName = matches[1].trim();
    const cuisine = matches[2].trim();
    console.log(`Restaurant Name: ${restaurantName}, Cuisine: ${cuisine}`);
}
