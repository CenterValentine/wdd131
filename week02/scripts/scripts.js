
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const li = document.createElement("li");
const deleteButton = document.createElement("button");

console.log("This is on")

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {


        li.textContent = input.value + " ";

        // li.innerHTML = input.value;
        deleteButton.textContent = "❌";
        li.append(deleteButton);

        list.append(li);
        input.value = '';


    }
    else { input.focus() }
});


deleteButton.addEventListener('click', function () {
    list.remove(li);
    input.focus();
    input.value = '';
});