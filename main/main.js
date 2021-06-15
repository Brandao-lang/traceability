const addForm = document.querySelector("form");
const itemInput = document.querySelector("input");

axios
    .post('/api/grocery', {item: itemInput.value})
        .then(res => {console.log(res.data)})