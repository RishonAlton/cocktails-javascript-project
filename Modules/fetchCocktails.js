import {showLoading} from "./displayLoading.js"
import get from "./getElement.js"


const fetchCocktails = async (url) => {

    if(document.title === "Cocktails") {
        const noMatchMessage = get("#no-match-message")
        noMatchMessage.style.display = "none"
    } 
    
    showLoading()

    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } 
    
    catch (error) {
        console.log(error)
    }
    
}


export default fetchCocktails