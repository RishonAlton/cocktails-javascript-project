import get from "./getElement.js"
import showCocktails from "./showCocktails.js"


const form = get("#form")
const inputField = get("#input-field")

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="


form.addEventListener("keyup", (e) => {
    
    e.preventDefault()
    let value = inputField.value

    if(!value) return

    showCocktails(baseURL + value)

})