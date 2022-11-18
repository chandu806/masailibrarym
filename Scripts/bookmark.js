function myBookMarks () {

    let tBody = document.getElementById("tBody");

    let bookMarksData = JSON.parse( localStorage.getItem("my-bookMarks"));
    let infoDiv = document.getElementById("info")
    console.log(bookMarksData)
    if(bookMarksData == null){
        infoDiv.innerHTML = "No bookmarks"
        infoDiv.style.color = "aquamarine" 
        infoDiv.style.fontSize = "30px"
        
    }
    else{

    for (const obj of bookMarksData) {
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

}

}