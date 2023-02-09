const apiId = 'a4effe10';
const apiKey = 'f944412b3011c0f498d615d4abf9bcf6';
let submitButton = document.getElementById("search");
const imageSize = 1;

submitButton.addEventListener('click', function(event) {
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

    console.log(apiURL.join(''));
    
    fetch(apiURL.join(''))
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
  });

