const addForm = document.querySelector("form");
const itemInput = document.querySelector("input");
const itemContainer = document.querySelector("section");


function submitHandler (e) {
    e.preventDefault()
    axios
    .post('/api/grocery', {item: itemInput.value})
        .then((res) => {
            itemContainer.innerHTML = "";
            itemInput.value = "";

            res.data.forEach((itemName) => {
                itemContainer.innerHTML += `<p>${itemName}</p>`;
              });
        })
}

addForm.addEventListener("submit", submitHandler);