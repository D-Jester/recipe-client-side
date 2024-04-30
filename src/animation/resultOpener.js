const resultOpener=async ()=>{
    const resultElement=document.getElementsByClassName('resultBody')[0]
    const resultContainerElement = document.getElementsByClassName('resultContainer')[0]
    resultElement.style.visibility="visible"
    resultContainerElement.style.transform="scale(1)"
}

export default resultOpener