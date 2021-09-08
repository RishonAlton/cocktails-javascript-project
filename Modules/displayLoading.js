import get from "./getElement.js"


const spinner = get(".loading") 


export const showLoading = () => {

    spinner.classList.remove("hide-loading")
    spinner.nextElementSibling.style.display = "none"

}


export const hideLoading = () => {

    spinner.classList.add("hide-loading")

    if(spinner.nextElementSibling.classList.contains("cocktails-container")) {
        spinner.nextElementSibling.style.display = "grid"
    }

    else {
        spinner.nextElementSibling.style.display = "block"
    }
    
}