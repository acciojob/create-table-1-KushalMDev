let count=3
function insert_Row() {
    //Write your code here
  
  let table=document.getElementById("sampleTable")
    let newRow=document.createElement("tr")
    let newCell1=document.createElement("td")
    newCell1.textContent=`Row${count} cell1`
    let newCell2=document.createElement("td")
    newCell2.textContent=`Row${count++} cell2`
    
    newRow.appendChild(newCell1)
    newRow.appendChild(newCell2)
    table.appendChild(newRow)
}
