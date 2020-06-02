function populateStates() {
    const stateSelect = document.querySelector("select[name=state]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() ) // retornando um valor de forma simples
    .then( states => {

        for ( state of states ) {
            stateSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`

        }

    })
}

populateStates()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const stateValue = event.target.value

    const indexOfSelectedValue = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedValue].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateValue}/municipios`
    fetch(url)
    .then( res => res.json() ) // retornando um valor de forma simples
    .then( cities => {

        for ( city of cities ) {
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=state]")
    .addEventListener("change", getCities)