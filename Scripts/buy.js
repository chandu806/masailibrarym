function buySectionData () {

    let tBody = document.getElementById("tBody");

    let myBooks = JSON.parse( localStorage.getItem("my-books"));

    if(myBooks == null){
        infoDiv.innerHTML = "No bookmarks"
        infoDiv.style.color = "aquamarine" 
        infoDiv.style.fontSize = "25px"
        
    }
    else{

    for (const obj of myBooks) {
        const row = document.createElement("tr");
        for (const val of Object.values(obj)) {
          const col = document.createElement("td");
          col.textContent = val;
          col.style.width = "10%"
          col.style.textAlign = "center"
          col.style.border = "1px solid black"
          col.style.background = "blue"
          col.style.color = "white"
          col.style.padding = "10px"
          row.appendChild(col);
        }
    
        tBody.appendChild(row);
      }
    console.log(myBooks)
}

}