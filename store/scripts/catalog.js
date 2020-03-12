/* global variables */
var items = [{
        // first item
        code: '1tvs',
        title: 'TV',
        price: 1000,
        description: 'Long description of the item',
        category: 'Electronics',
        image: 'img/tv.jpg'
    },
    // second item
    {
        code: '1ph10',
        title: 'Phone',
        price: 10000,
        description: "Long description of item",
        category: 'Mobile devices',
        image: 'img/iPhone.jpg'
    },
    {
        // third item
        code: '2spk',
        title: 'Speakers',
        price: 100,
        description: "Long description of item",
        category: 'Sound',
        image: 'img/sound.jpg'
    },
    {
        code: '1pcu',
        title: 'Computer',
        price: 500,
        description: "Long description of item",
        category: 'Computers',
        image: 'img/pc.jpg'
    }
];
// functions
function displayCatalog() {
    // travel the array, get element from the array, display in the DOM
    for (var i = 0; i < items.length; i++) {
        var product = items[i];
        var layout = `<div class = "item" id = "${product.code}">
            <img src = "${product.image}">
            <h4>${product.title}</h4>
            <h6 class = "item-price">$${product.price}.00</h6>
            <p>${product.description}</p>
            <div class = "button-div">
                <button class = "btn btn-primary mb-2">Add to Cart</button>
            </div>
        </div>`;
        console.log(i, layout);

        $('#catalog').append(layout);


    }

}

function init() {
    console.log('Catalog Page');
    displayCatalog();
}



function register() {
    console.log("Current items: " + items.length);
    var code = $('#code').val();
    var title = $('#title').val();
    var price = $('#price').val();
    var description = $('#description').val();
    var category = $('#category').val();
    var image = $('#image').val();

    items.push({
        code: code,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
    });

    console.log("New item: " + items.length);

}



//Register function
$('#register-btn').on('click', function () {
    register();
});

//Search Function
$('#search-btn').on('click', function () {
    var searchString = $('#search-txt').val();
    for (var i = 0; i < items.length; i++) {
        if (searchString.toUpperCase() != items[i].title.toUpperCase()) {
            $('#' + items[i].code).hide();
        } else {
            $('#' + items[i].code).show();
        }

        if (searchString == "") {
            $('#' + items[i].code).show();
        }
    }
    s
});

// initialization

window.load = init();