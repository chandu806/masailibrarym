function dashboard() {
    event.preventDefault();
  
    let tBody = document.getElementById("tBody");
    let infoDiv = document.getElementById('info')
    let booksCount = document.getElementById("book-count");
    function myFunction(objData) {
      dashBoardBooks = dashBoardBooks.filter(
        (obj) => obj.inputName !== objData.inputName
      );
  
      booksCount.innerHTML = dashBoardBooks.length;
  
      let buySectionData = {
          inputName : objData.inputName,
          inputAuthor : objData.inputAuthor,
          inputDesc : objData.inputDesc,
          inputAdded : objData.inputDate,
          category :objData.category,
          price : objData.price
      
      }
  
      localStorage.setItem(
        "my-books",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("my-books") || "[]"),
          buySectionData,
        ])
      );
  
      localStorage.removeItem("book-list");
      localStorage.setItem("book-list", JSON.stringify(dashBoardBooks));
  
      console.log(buySectionData)
      cleanupCode();
      filteredData();
    }
  
 
  
  function myBookmark(objData) {
      dashBoardBooks = dashBoardBooks.filter(
        (obj) => obj.inputName !== objData.inputName
      );
  
      booksCount.innerHTML = dashBoardBooks.length;
  
      let bookMarkData = {
          inputName : objData.inputName,
          inputAuthor : objData.inputAuthor,
          inputDesc : objData.inputDesc,
          inputAdded : objData.inputDate,
          category :objData.category,
          price : objData.price
      
      }
  
      localStorage.setItem(
        "my-bookMarks",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("my-bookMarks") || "[]"),
          bookMarkData,
        ])
      );
  
      localStorage.removeItem("book-list");
      localStorage.setItem("book-list", JSON.stringify(dashBoardBooks));
  
      cleanupCode();
      filteredData();
    }
  
    let dashBoardBooks = JSON.parse(localStorage.getItem("book-list"));
    booksCount.innerHTML = dashBoardBooks.length;
  
  
  
    function filteredData() {
      for (const obj of dashBoardBooks) {
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
          if (val == "Buy") {
          col.style.background = "pink"
            col.addEventListener("click", () => myFunction(obj));
          }
          else if(val == "BookMark"){
              col.style.background = "purple"
              col.addEventListener("click", () => myBookmark(obj));
      
            }
          
  
          row.appendChild(col);
        }
  
        tBody.appendChild(row);
      }
    }
  
    function cleanupCode() {
      tBody.innerHTML = "";
    }
  
    console.log(dashBoardBooks)
    if(dashBoardBooks.length == 0){
      infoDiv.innerHTML = "No Books ";
      infoDiv.style.color = "aquamarine" 
      infoDiv.style.fontSize = "30px"
    }
  
    else{
  
 
    for (const obj of dashBoardBooks) {
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
        if (val == "Buy") {
          col.style.background = "pink"
  
          col.addEventListener("click", () => myFunction(obj));
        }
  
        else if(val == "BookMark"){
          col.style.background = "purple"
          col.addEventListener("click", () => myBookmark(obj));
  
        }
  
        row.appendChild(col);
      }
  
      tBody.appendChild(row);
    }
  }
  
  }
  