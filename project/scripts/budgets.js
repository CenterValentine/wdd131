
// Budget table
const budgetTable = document.querySelector(".budget-table");
const monthSelector = document.getElementById("month")
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// updates the month selector
months.forEach(month => {
    const option = document.createElement("option");
    option.value = month;
    option.textContent = month;
    monthSelector.appendChild(option);
});


// updates to the budget table
document.addEventListener('DOMContentLoaded', (event) => {
    const updateButton = document.querySelector('#budget-update');
    const form = document.querySelector("#budget-form");
    console.log('DOMContentLoaded');

    // form click
    updateButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Update Budget button clicked', event);

        const formData = new FormData(form);
        const month = formData.get("budget-month"); const budget = formData.getAll("select-budget"); const amount = formData.get("budget-amount");
        console.log("formData Object: ", month, budget, amount);
        const updatedTable = document.querySelector(`#${month.toLowerCase()}`);
        console.log("updatedTable: ", updatedTable);
        budget.forEach(b => {
            console.log("budget: ", b);
            // console.log("updatedTableQuerySlected: ", updatedTable.querySelector(`#${b}`));
            updatedTable.querySelector(`#${b}`).textContent = "$" + amount;
        });

        const row = updatedTable.querySelectorAll("td");
        const tableTotal = updatedTable.querySelector("#total");
        var updateTotal = 0

        row.forEach((cell, index) => {
            if (index === 0 || cell.id === "total") return;
            total_i = parseInt(cell.textContent.slice(1))
            // console.log("total_i: ", total_i); console.log("Cell: ", cell);
            updateTotal += total_i;
        });
        tableTotal.textContent = "$" + updateTotal;

        console.log('Update Budget button clicked');
    });
});


function updateBudgetTable(formButton) {
    // copy function above
    console.log('Update Budget button clicked', formButton);
    

}



// const budgetTable = document.querySelector(".budget-table");

