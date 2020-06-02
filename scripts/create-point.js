const stateSelect = document.querySelector("select[name=state]")
const citySelect = document.querySelector("select[name=city]")

function fetchTest(url, select) {
    fetch(url)
    .then( res => res.json() )
    .then( data => {
        for ( d of data ) {
            select.innerHTML += `<option value="${d.id}">${d.nome}</option>`
        }
    })
}

fetchTest(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`, stateSelect)

function getCities(event) {
    const stateInput = document.querySelector("input[name=state]")

    const stateValue = event.target.value

    const indexOfSelectedValue = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedValue].text

    fetchTest(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateValue}/municipios`, citySelect)
    citySelect.disabled = false
}

document
    .querySelector("select[name=state]")
    .addEventListener("change", getCities)
