

const apiId = 'a4effe10';
const apiKey = 'f944412b3011c0f498d615d4abf9bcf6';
let submitButton = document.getElementById("search");
let htmlpassin = document.getElementById('#showRecipe');
let removeCard = document.getElementById('#allCard');

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

    $("#allCard").remove();
    generateHTML(recipies);
    });
    
    const generateRecipe = function (newRecipes, i) {
        return `
        <div class="card" id="allCard">
            <div class="body">
                <div class="card-header-title">
                Title: ${newRecipes[i].label} </br>
                ${newRecipes[i].calories} </br>
                Cuisine type: ${newRecipes[i].cuisineType}</br>
                Health Label: ${newRecipes[i].healthLabels}</br>
                Ingredients: ${newRecipes[i].ingredients}/br>
                Meal Type: ${newRecipes[i].mealType}</br>
                URL: ${newRecipes[i].url}</br>
                Yield: ${newRecipes[i].yield}</br>
                Image: <img src="${newRecipes[i].image}" /></br>
                </div>
                <button class="button is-primary" type="save">Save</button>
            </div>
        </div>
        `;
    }

    generateHTML = (recipies) => {
        console.log(recipies[0].label);
        let allRecipes = []; 
        
        for (let i = 0; i < recipies.length; i++) {
            const newRecipes = recipies;
            const recipeHtml = generateRecipe(newRecipes, i);
            allRecipes.push(recipeHtml);
    }
    $('#showRecipe').append(allRecipes)
    console.log(allRecipes);
    }

