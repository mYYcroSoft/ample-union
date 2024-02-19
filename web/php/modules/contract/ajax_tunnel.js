array = {
    [1]: {id: 1, name: "Zakázka", type: "TZ", customer: "0525"},
    [2]: {id: 2, name: "FiveM Dev", type: "TZ", customer: "0625"},
}

var table = document.getElementById("contract_table");
for (let arr in array){
    var data = array[arr];
    var table = document.getElementById("contract_data");
    var newRow = table.insertRow(table.rows.length);

    var table = document.getElementById("contract_data");
    var newRow = table.insertRow(table.rows.length);

    var rowData = [
        data.id, 
        data.name, 
        data.type, 
        data.customer, 
        "<button class='uk-button uk-button-primary'>Edit</button>",
        "<button class='uk-button uk-button-danger'>Remove</button>",
        
        
    ];

    
    for (var i = 0; i < rowData.length; i++) {
        var cell = newRow.insertCell(i);
        cell.innerHTML = "<input type='text' value='" + rowData[i] + "'>";

        if (typeof rowData[i] === "string" && rowData[i].includes("<button")) {
  
            cell.innerHTML = rowData[i];
            console.log("Button found");
        } else {
        
            cell.innerHTML = "<input type='text' value='" + rowData[i] + "'>";
        }
    }

  
}





