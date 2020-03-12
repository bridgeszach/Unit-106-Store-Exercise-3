// Admin password protect
function password() {
    var password = "password";
    var passCheck = prompt("Please enter the password:");
    if (passCheck == null || passCheck == "") {
        alert("User has cancelled the prompt.");
        window.location = "index.html";
    } else if (passCheck == password) {
        alert("Welcome.");
        window.location = "admin.html";
    } else {
        while (passCheck != password) {
            alert("Wrong. Please try again.");
            passCheck = prompt("Please enter the password:");
        }

    }
}
window.onload = password();


var items = [];

function init() {
    console.log('Admin Page');
}

// initialization

window.load = init();

//object constructor
class Item {
    constructor(code, title, price, description, category, image) {
        this.code = code;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
    }
}

function register() {
    console.log("Current Items" + items.length);

    var code = $("#code").val();
    var title = $("#title").val();
    var price = $('#price').val();
    var description = $('#description').val();
    var category = $('#category').val();
    var image = $('#image').val();

    if (code != "" && title != "" && price != "" && description != "" && category != "" && image != "") {
        //create an object
        var newItem = new Item(code, title, price, description, category, image);
        //passing the var to the attribute
        items.push(newItem);

        console.log(newItem);
        console.log("New item:" + items.length);
        alert('New Item Registered');
    }
}

$("#register-btn").on('click', function () {
    register();
});