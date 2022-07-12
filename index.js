let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

//console.log(leadsFromLocalStorage)

//Stores data over refresh
if(leadsFromLocalStorage)
{
    myLeads = leadsFromLocalStorage
    renderLeads()
}

//Delete btn to clear all data from localstorage, array and DOM
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    renderLeads()
})

//Btn to save data to myLeads array in local storage
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    console.log(localStorage.getItem("myLeads"))
})

//Print out the input into a html list
function renderLeads(){
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){
        listItems += `
        <li>
        <a href='${myLeads[i]}' target='_blank'> 
        ${myLeads[i]}
        </a> 
        </li>`
    }
    ulEl.innerHTML = listItems
}