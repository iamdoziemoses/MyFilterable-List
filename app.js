//Get Input element
let filterInput = document.getElementById('filterInput');

//Add Event listener
filterInput.addEventListener('input', filterNames);

function filterNames() {
    //get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    // Get names Ul
    let ul = document.getElementById('names');

    //get items from Ul
    let li = ul.querySelectorAll('.list-group-item');

    //loop through collection items
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        //if matched
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }

}
