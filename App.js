import showCocktails from "./Modules/showCocktails.js"
import "./Modules/searchCocktail.js"
import randomSearch from "./Modules/getRandomSearch.js"


const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + randomSearch()


document.addEventListener("DOMContentLoaded", () => showCocktails(URL))
