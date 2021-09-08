import fetchCocktails from "./fetchCocktails.js"
import displayCocktails from "./displayCocktails.js"
import setCocktail from "./setCocktail.js"


const showCocktails = async (url) => {

    const data = await fetchCocktails(url)
    const drinks = await displayCocktails(data)
    
    if(drinks) {
        setCocktail(drinks)
    }

}


export default showCocktails