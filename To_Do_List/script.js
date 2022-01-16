const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;


loadItems();


eventListeners();

function eventListeners() {
    form.addEventListener('submit', addNewItem);
    taskList.addEventListener('click', deleteItem);
    btnDeleteAll.addEventListener('click', deleteAllItems);
}

function loadItems() {
    items = getItemFromLs();
    items.forEach(function(item) {
        createItem(item);
    })
}

function getItemFromLs() {
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'))
    }
    return items;
}

function setItemToLS(text) {
    items = getItemFromLs();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
}

function deleteItemLS(text) {
    items = getItemFromLs();
    items.forEach(function(item, index) {
        if (item === text) {
            items.splice(index, 1)
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
}

function createItem(text) {

    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);
    taskList.appendChild(li);

}

function addNewItem(e) {
    if (input.value === '') {
        alert('Lütfen Yapacaklarınızı Ekleyiniz');
    }

    createItem(input.value);
    setItemToLS(input.value);

    input.value = '';

    e.preventDefault();

}


function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        if (confirm('Silmek İstediğinizden Emin misiniz?')) {
            e.target.parentElement.parentElement.remove();

            e.target.parentElement.parentElement.textContent;
        }
    }
    e.preventDefault();
}


function deleteAllItems(e) {

    if (confirm('Silmek İstediğinizden Emin misiniz?')) {

        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        localStorage.clear();
    }
    e.preventDefault();
}