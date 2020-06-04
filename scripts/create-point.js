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
    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true
    fetch(url)
    .then( res => res.json() ) // retornando um valor de forma simples
    .then( cities => {

        for ( city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=state]")
    .addEventListener("change", getCities)

// Itens de coleta

// Pegar todos os li

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

let selectedItems = []

const collectedItems = document.querySelector("input[name=items")

function handleSelectedItem(event) {
    // adicionar o remover classe
    const itemLi = event.target

    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

// Verificar se existem itens selecionados, se sim
// pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId // true ou false
        return itemFound
    })
    
// se já estiver selecionado

    if(alreadySelected >= 0) {
        // tirar da seleção
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
        // se não estiver
        // adicionar a selação
        selectedItems.push(itemId)
    }

    // atualizar o campo escondido com os itens da seleção
    collectedItems.value = selectedItems

}
