import fetchCocktails from "./Modules/fetchCocktails.js"
import displayCocktailInfo from "./Modules/displayCocktailInfo.js"


const cocktailInfo = async () => {

    const id = localStorage.getItem("drink")

    if(!id) {
        window.location.replace("./Index.html")
    }

    const drinks = await fetchCocktails("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
    displayCocktailInfo(drinks)
    
}


window.addEventListener("DOMContentLoaded", cocktailInfo)