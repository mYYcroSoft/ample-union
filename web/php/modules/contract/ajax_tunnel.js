array = {
    [1]: {id: 1, name: "Zakázka", type: "TZ", customer: "0525"},
    [2]: {id: 2, name: "FiveM Dev", type: "TZ", customer: "0625"},
}

var table = document.getElementById("contract_table");
for (let arr in array){
    var data = array[arr];
    var table = document.getElementById("contract_data");
    var newRow = table.insertRow(table.rows.length);

    var rowData = [
        data.id, 
        data.name, 
        data.type, 
        data.customer, 
        "<button class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'>Edit</button>",
        "<button class='btn btn-danger'>Remove</button>",
        
        
    ];

    newRow.addEventListener("click", function() {
        
        var modal = document.getElementById("exampleModal");
        var modalBody = modal.querySelector(".modal-body");
        modalBody.innerHTML = "";
        for (var i = 0; i < rowData.length; i++) {
             var cell = newRow.insertCell(i);
            cell.innerHTML = rowData[i];
        }   
    });


    
    for (var i = 0; i < rowData.length; i++) {
        var cell = newRow.insertCell(i);
       // cell.innerHTML = "<input type='text' value='" + rowData[i] + "'>";
       cell.innerHTML = rowData[i];
        if (typeof rowData[i] === "string" && rowData[i].includes("<button")) {
  
            cell.innerHTML = rowData[i];
            console.log("Button found");
        } else {
        
          //  cell.innerHTML = "<input type='text' value='" + rowData[i] + "'>";

        }
    }

  
}





