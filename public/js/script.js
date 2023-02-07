let keyword = document.getElementById("keyword");
const apiId = 'a4effe10';
const apiKey = 'f944412b3011c0f498d615d4abf9bcf6';
let diet = document.getElementById("diet");
let health = document.getElementById("health");
let cuisineType = document.getElementById("cuisineType");
let mealType = document.getElementById("mealType");
let calories = document.getElementById("calories");
const imageSize = document.getElementById("imageSize");

function getApi() {

const url = 'https://api.edamam.com/api/recipes/v2?type=public&q=${Keyword}&app_id=${apiID}&app_key=${apiKey}&diet=${diet}&health=${health}&cuisineType=${cuisineType}&mealType=${mealType}&calories=${calories}&imageSize=&{imageSize}';

    fetch(requestUrl)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })

}

getApi();
console.log(getApi);