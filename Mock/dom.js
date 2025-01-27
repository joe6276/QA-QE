
export function showError(message){
    let error= document.getElementById("error")
    const errorParagraph= document.createElement('p')
    errorParagraph.textContent= message
    error.innerHTML=''
    error.append(errorParagraph)
}
