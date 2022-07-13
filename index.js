let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const savetabBtn = document.getElementById("savetab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

//Stores data over refresh
if(leadsFromLocalStorage)
{
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

//Button to save the current opened tab URL to the list
savetabBtn.addEventListener("click", function(){
    //Chrome extension API to get URL from current window
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myleads))
    render(myLeads)
    })
})

//Print out the input into a html list using string literal
function render(leads){
    let listItems = ""
    for(let i = 0; i < leads.length; i++){
        listItems += `
        <li>
        <a href='${leads[i]}' target='_blank'> 
        ${leads[i]}
        </a> 
        </li>`
    }
    ulEl.innerHTML = listItems
}

//Delete btn to clear all data from localstorage, array and DOM
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

//Btn to save data to myLeads array in local storage
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})