const addItem = document.querySelector('#add-btn');
const urlLink = document.querySelector('#url-link');
const selectType = document.querySelector('#select-gadget-type');
const displayBox = document.querySelector('#display-box');
const errorMessaage = document.querySelector('.error-msg');
const filterAll = document.querySelector('#all');
const filterMobile = document.querySelector('#mobile');
const filterLaptop = document.querySelector('#laptop');
const filterTab = document.querySelector('#tab');
const filterHeadphone = document.querySelector('#headphone');
const filterCamera = document.querySelector('#camera');
const filterPrinter = document.querySelector('#printer');
const filterSpeaker = document.querySelector('#speaker');
const filterPlayStation = document.querySelector('#play-station');
console.log(filterPlayStation)

let itemId;
// parsing array to local Storage
const arrayOfItems = JSON.parse(localStorage.getItem('data')) ?? []


// function to display data even after refresing the page, retreiving data from local-storage
arrayOfItems.map( objectData => displayDetails(objectData));


// function to display updated item on screen after each action like addition, deletion, filter
function displayDetails(itemObject) {

    displayBox.innerHTML += 
        `<div id="display-section-one-item">
            <img id="" class="image" src="${itemObject.url}" alt="image loading...">
            <button id="" class="delete">Delete</button>
            <p style="display: none;">${itemObject.type}</p>
            <p style="display: none;">${itemObject.id}</p>
        </div>`

}


// function to display error message on screen 
function dispalyErrorMessage(message) {
    errorMessaage.textContent = message;       
    
    setTimeout(() => { 
        errorMessaage.textContent = ''
    }, 1500);
}




// ========================================= Add Operation ==========================================
// ==================================================================================================
// function to add item through image url
function getItemURL(e) {
    e.preventDefault();
    // validations
    if(urlLink.value == "") {
        dispalyErrorMessage('*Please enter item url .....'); 
        return;
    }
    else if(selectType.value == "") {
        dispalyErrorMessage('*Please select gadget type');
        return;
    } 

    // creating object for each item for their url & type
    itemObject = {
        url: urlLink.value,
        type: selectType.value,
        id: Date.now(),
    }
    // pushing each item object to array of items
    arrayOfItems.push(itemObject);

    // setting the updated array(after pushing each object) to local Storage
    localStorage.setItem('data', JSON.stringify(arrayOfItems));

    // calling the dispaly function for displaying items into screen
    displayDetails(itemObject);
    
}


// Event listening when user click on Add button
addItem.addEventListener('click', getItemURL);
// ==================================================================================================





// ======================================= DELETE Operation==========================================
// ==================================================================================================

// function for deleting the particular item
function deleteItem(e) {

    itemId = Number(e.target.parentElement.lastElementChild.textContent);
    console.log(itemId);

    arrayOfItems.forEach((val, index) => {
        if(val.id === itemId) {
            console.log(val.type, index);

            let confirm = window.confirm(`Are you sure want to delete this ${val.type} data ?`);
            if(confirm) arrayOfItems.splice(index, 1)            
        }
    })

    // setting the updated array to local storage after delete operation
    localStorage.setItem('data', JSON.stringify(arrayOfItems));

    displayBox.innerHTML = '';
    arrayOfItems.map(val => displayDetails(val));
}


// Event Listener => when user clicks on delete button
// ---------------------------------------------------
displayBox.addEventListener('click', (e) => {

    if(e.target.classList.contains('delete')) {
        // console.log(e.target);
        // call the deleteItem function & do delete operation
        deleteItem(e);        
    }
  
})
// ==================================================================================================





// ======================================= Filter Operation==========================================
// ==================================================================================================
// function to filterAll
function filterAllItem() {   
    if(arrayOfItems.length > 0) { 
        displayBox.innerHTML = '';
        arrayOfItems.map(val => displayDetails(val));
    }
    else dispalyErrorMessage('No Data Available');
}

// function to filter mobile item
function filterMobileItem() {
    displayBox.innerHTML = '';
    
    arrayOfItems.filter(val => {
        if (val.type == 'mobile') {
            displayDetails(val);
        }

    })
}

// function to filter laptop item
function filterLaptopItem() {
    displayBox.innerHTML = '';

    arrayOfItems.filter(val => {
        if(val.type == 'laptop')
        displayDetails(val);
    })
}

// function to filter laptop item
function filterTabItem() {
    displayBox.innerHTML = '';

    arrayOfItems.filter(val => {
        if(val.type == 'tabs')
        displayDetails(val);
    })
}

// function to filter headphone item
function filterHeadphoneItem() {
    displayBox.innerHTML = '';

    arrayOfItems.filter(val => {
        if(val.type == 'headphone')
        displayDetails(val);
    })
}

// function to filter camera item
function filterCameraItem() {
    displayBox.innerHTML = '';

    arrayOfItems.filter(val => {
        if(val.type == 'cam')
        displayDetails(val);
    })
}

// function to filter printer item
function filterPrinterItem() {
    displayBox.innerHTML = '';

    arrayOfItems.filter(val => {
        if(val.type == 'print')
        displayDetails(val);
    })
}

// function to filter speaker item
function filterSpeakerItem() {
    displayBox.innerHTML = '';

    arrayOfItems.filter(val => {
        if(val.type == 'speaker')
        displayDetails(val);
    })
}

// function to filter playStation item
function filterPlayStationItem() {
    displayBox.innerHTML = '';
    console.log('play.........')

    arrayOfItems.filter(val => {
        if(val.type == 'play-station')
        displayDetails(val);
    })
}







// ---------------- filter by All -----------------
filterAll.addEventListener('click', filterAllItem);
filterMobile.addEventListener('click', filterMobileItem);
filterLaptop.addEventListener('click', filterLaptopItem);
filterTab.addEventListener('click', filterTabItem);
filterHeadphone.addEventListener('click', filterHeadphoneItem);
filterCamera.addEventListener('click', filterCameraItem);
filterPrinter.addEventListener('click', filterPrinterItem);
filterSpeaker.addEventListener('click', filterSpeakerItem);
filterPlayStation.addEventListener('click', filterPlayStationItem);




