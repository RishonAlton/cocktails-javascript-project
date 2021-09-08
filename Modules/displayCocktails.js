import get from "./getElement.js"
import { hideLoading } from "./displayLoading.js"


const displayCocktails = ({drinks}) => {

    const cocktailsContainer = get("#cocktails-container")
    const noMatchMessage = get("#no-match-message")

    if(!drinks) {
        hideLoading()
        noMatchMessage.style.display = "block"
        noMatchMessage.textContent = "Sorry, no drinks matched your search"
        cocktailsContainer.innerHTML = null
        return
    }

    const newDrinks = drinks.map(drink => {
        const {idDrink: id, strDrink: name, strAlcoholic: category, strDrinkThumb: image} = drink
        return (`
            <div class="cocktail">
                <a href="./Cocktail Info.html" class="cocktail-info-link" data-id="${id}">
                    <img 
                        src="${image}" 
                        alt="${name}" 
                        class="cocktail-image"
                    />
                    <h4 class="cocktail-name">${name}</h4>
                </a>
            </div>
        `)
    }).join(" ")

    hideLoading()
    noMatchMessage.textContent = ""
    cocktailsContainer.innerHTML = newDrinks

    return cocktailsContainer

}


export default displayCocktails