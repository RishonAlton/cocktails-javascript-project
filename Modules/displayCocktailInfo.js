import get from "./getElement.js"
import {hideLoading} from "./displayLoading.js"


const displayCocktailInfo = (data) => {

    const drink = data.drinks[0]
    const {strDrinkThumb: image, strDrink: name, strInstructions: instruction, strAlcoholic: category} = drink
    const ingredients = [drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4, drink.strIngredient5, drink.strIngredient6, drink.strIngredient7, drink.strIngredient8, drink.strIngredient9, drink.strIngredient10, drink.strIngredient11, drink.strIngredient12, drink.strIngredient13, drink.strIngredient14, drink.strIngredient15,] 

    const container = get("#cocktail-info-container")
    const cocktailImage = get(".cocktail-image")
    const cocktailName = get("#name")
    const cocktailInstruction = get("#instruction")
    const cocktailIngredients = get("#ingredients")

    hideLoading()
    container.style.display = "block"

    document.title = name
    cocktailImage.src = image
    cocktailName.textContent = name
    cocktailInstruction.textContent = instruction

    cocktailIngredients.innerHTML = ingredients.map(item => {
        if(!item) return
        return (`
            <li>
                <i class="far fa-check-square"></i>
                ${item}
            </li>
        `)
    }).join(" ")

}


export default displayCocktailInfo