const searchForm = document.querySelector('form'),
  searchOutcomeDiv = document.querySelector('.search-outcome'),
  container = document.querySelector('.container'),
  resultHeading = document.querySelector('.result-heading');
      
let searchQuery = '';
const APP_ID = '72dfbd62';
const APP_key = 'd0ec890c12b422a408b0562a3572d6d4';
const baseURL = `https://api.edamam.com/search?q=cake&app_id=${APP_ID}&app_key=${APP_key}`;

const title = searchForm.value;

function searchMeal(e){
e.preventDefault();  

searchQuery = e.target.querySelector('input').value;
fetchAPI(); 
 
}

searchForm.addEventListener('submit', searchMeal);



async function fetchAPI(){
const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&to=40`;
const response = await fetch(baseURL);
const data = await response.json();
if(data.hits.length === 0){
    alert('No data found');
}else{
generateHTML(data.hits);
console.log(data);
resultHeading.innerHTML = `<h2>Search result for '${title}'</h2>`;
}
};


function generateHTML(results){
    container.classList.remove('intro')
    let generatedHTML = '';
    results.map(result => {
        generatedHTML +=
        `
       
        <div class="item">
            <img src="${result.recipe.image}" alt="">
             <div class="flex-container">
              <h2 class="recipe-name">${result.recipe.label}</h2>
             <a class="see-recipe" href="${result.recipe.url}" target="_blank">See Recipe</a>
          </div>
             <p class="item-info">Allergens: ${result.recipe.cautions}</p>
             <p class="item-info">Source: ${result.recipe.source}</p>
             <p class="item-info">Estimated Cal: ${result.recipe.calories.toFixed(0)}</p>
             <p class="item-info">Macronutrients:
            <button type="button" class="btn btn-primary" onclick="saveData('${result.recipe.url}','${result.recipe.label}','${result.recipe.totalNutrients.quantity}') ">Vie all</button>
              <ul>
               <li class="item-info-data">Carbohydrates: ${result.recipe.totalNutrients.CHOCDF.quantity.toFixed(1)}</li>
               <li class="item-info-data">Proteins: ${result.recipe.totalNutrients.PROCNT.quantity.toFixed(1)}</li>
               <li class="item-info-data">Fats: ${result.recipe.totalNutrients.FAT.quantity.toFixed(1)}</li>
              </ul>
             </p>
        </div>
        `
    })
   searchOutcomeDiv.innerHTML = generatedHTML; 
}

function saveData(recipeUrl, recipeName, Macronutrients){

    var data = {
        recipeurl: recipeUrl,
        recipename: recipeName,
        macro: Macronutrients
    }

    localStorage.setItem("recipe-url", JSON.stringify(data));
}

