const searchBoxDiv = document.querySelector('.search-box');
const searchOutcomeDiv = document.querySelector('.search-outcome');
const container = document.querySelector('.container');
let searchQuery = '';


searchFormDiv.addEventListener('submit', (a) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log(searchQuery)
})