var form = document.getElementById('addForm');
var itemsList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemsList.addEventListener ('click', removeItem);

// Filter 
filter.addEventListener ('keyup', filterItems);

// Add item
function addItem (e) {
    e.preventDefault();
    
    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add textnode with input vale
    li.appendChild(document.createTextNode(newItem));

    // Create a delete button element
    var deleteButton = document.createElement('button');
    // Add class
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    // Textnode
    deleteButton.appendChild(document.createTextNode('x'));
    // Appen deleteButton
    li.appendChild(deleteButton);

    // Append list
    itemsList.appendChild(li)

};


function removeItem (e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this?')) {
            var li = e.target.parentElement;
            itemsList.removeChild(li);
        }
    }
}


function filterItems (e) {
    // convert to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = itemsList.getElementsByTagName('li');
    // Turn it into array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display= 'none'
        }
    });
}