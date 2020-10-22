const searchForm = document.querySelector('form');
const searchOutcomeDiv = document.querySelector('.search-outcome');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID = '72dfbd62';
const APP_key = 'd0ec890c12b422a408b0562a3572d6d4';
const baseURL = `https://api.edamam.com/search?q=cake&app_id=${APP_ID}&app_key=${APP_key}`;

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
});

async function fetchAPI(){
const baseURL = `https://api.edamam.com/search?q=cake&app_id=${APP_ID}&app_key=${APP_key}&to=20`;
const response = await fetch(baseURL);
const data = await response.json();
generateHTML(data.hits);
console.log(data);
};
function generateHTML(results){
    let generatedHTML = '';
    results.map(result => {
        generatedHTML +=
        ` <div class="item">
            <img src="${result.recipe.image}" alt="">
             <div class="flex-container">
              <h2 class="recipe-name">${result.recipe.label}</h2>
             <a href="#">See Recipe</a>
          </div>
         <p class="item-info">Estimated Cal:${result.recipe.calories.toFixed(0)}</p>
         <p class="item-info">Makronutrients:${result.recipe.totalNutrients}
          <ul>
           <li class="item-info-data">Carbohydrates:</li>
           <li class="item-info-data">Protein:</li>
           <li class="item-info-data">Fats:</li>
          </ul>
         </p>
        </div>
        `
    })
   searchOutcomeDiv.innerHTML = generatedHTML; 
}