

const apiId = 'a4effe10';
const apiKey = 'f944412b3011c0f498d615d4abf9bcf6';
let submitButton = document.getElementById("search");

const imageSize = 1;


submitButton.addEventListener('click', async function(event) {
    event.preventDefault();
    let diet = document.getElementById("diet").value;
    let health = document.getElementById("health").value;
    let cuisineType = document.getElementById("cuisineType").value;
    let mealType = document.getElementById("mealType").value;
    let calories = document.getElementById("calories").value;
    let keyword = document.getElementById("keyword").value;

    let apiURL = [`https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=${apiId}&app_key=${apiKey}`];
   

    if (diet !== ""){
        apiURL.push(`&diet=${diet}`)
    }
    if(health !== ""){
        apiURL.push(`&health=${health}`)
    }
    if(cuisineType !== ""){
        apiURL.push(`&cuisineType=${cuisineType}`)
    }
    if(mealType !== ""){
        apiURL.push(`&mealType=${mealType}`)
    }
    if(calories !== ""){
        apiURL.push(`&calories=${calories}`)
    }
    if(imageSize !== ""){
        apiURL.push(`&imageSize=THUMBNAIL`)
    }

    // console.log(apiURL.join(''));
    
    const apiResponse = await (await (fetch(apiURL.join('')))).json();
    const hits = apiResponse.hits;

    const recipies = [];
    //loop through array and descructure array 
    hits.forEach(hit => {
        const recipeData = hit.recipe;
        const recipe = {};
        recipe.calories = recipeData.calories,
        recipe.cuisineType = recipeData.cuisineType,
        recipe.healthLabels = recipeData.healthLabels,
        recipe.image = recipeData.image,
        recipe.ingredients = recipeData.ingredientLines,
        recipe.label = recipeData.label,
        recipe.mealType = recipeData.mealType,
        recipe.totalTime = recipeData.totalTime,
        recipe.url = recipeData.url,
        recipe.yield = recipeData.yield
        recipies.push(recipe);
    });
    console.log(recipies)



    // const strRecipies = JSON.stringify({recipies: recipies});
    // const response = await fetch('/api/recipies/create_seeds',{
    //     method: 'POST',
    //     body: strRecipies,
    //     headers: { 'Content-Type': 'application/json' },
    // });

  });

