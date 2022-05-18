// Create local variables to work with it in this file.
const { products, categories } = window;
// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

//function to display to console if user clicks card
function cardClick() {
  console.log(this);
}

//to display product category once selected
function displayCat(product) {
  const categorySelected = document.createElement("h2");
  var selection = document.querySelector("#selected-category");
  var categoryID;
  for (let i = 0; i < categories.length; i++) {
    if (product.categories[0] === categories[i].id) {
      categoryID = categories[i].name;
    }
  }
  var displaySelect = document.createTextNode(categoryID);
  categorySelected.appendChild(displaySelect);
  categorySelected.setAttribute("id", "catHeader");
  selection.appendChild(categorySelected);
}

function createProductCard(product) {
  // Create a <div> to hold the card
  const card = document.createElement("div");
  // Add the .card class to the <div>
  card.classList.add("card");
  // Create a product image, use the .card-image class
  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.classList.add("card-image");
  card.appendChild(productImage);

  // ... rest of your card building code here
  //create product title
  const prodTitle = document.createElement("h2");
  var titleText = document.createTextNode(product.title);
  prodTitle.appendChild(titleText);
  card.appendChild(prodTitle);

  //create product description
  const prodDesc = document.createElement("p");
  var descText = document.createTextNode(product.description);
  prodDesc.appendChild(descText);
  card.appendChild(prodDesc);

  const money = product.price / 100;
  //create price
  let moneyFormat = new Intl.NumberFormat("en-CA", {
    currency: "CAD",
    style: "currency",
    minimumFractionDigits: 2
  }).format(money);
  const prodPrice = document.createElement("span");
  let cost = document.createTextNode(moneyFormat);
  prodPrice.appendChild(cost);
  card.appendChild(prodPrice);
  //after all elements added to card add event listener for click, and console.log if user clicks card
  card.addEventListener("click", cardClick);
  return card;
}

window.addEventListener("load", () => {
  //Loop through categories
  for (let i = 0; i < categories.length; i++) {
    var menuDiv = document.querySelector("#menu");
    //create button element
    var btn = document.createElement("button");
    //change button id to category id
    btn.id = categories[i].id;
    //change button text to name of category
    btn.innerHTML = categories[i].name;
    //append to menu
    menuDiv.appendChild(btn);
  }
  let z;
  //initial display of first category on site load
  for (let i = 0; i < products.length; i++) {
    if (products[i].categories[0] === "c1" && products[i].discontinued !== true) {
      let card = createProductCard(products[i]);
      var productDiv = document.querySelector("#category-products");
      productDiv.appendChild(card);
      //to capture index value to display category title
      z = i;
    }
  }
  //display category title on initial load
  displayCat(products[z]);

  //store all button elements in array
  var btnElems = document.querySelectorAll("button");

  //function to update the cards when new category clicked
  let updateProductCard = function () {
    //Clear current cards
    document.querySelectorAll(".card").forEach((e) => e.remove());
    let x;
    for (let i = 0; i < products.length; i++) {
      if (products[i].categories[0] === this.id && products[i].discontinued !== true) {
        let card = createProductCard(products[i]);
        var productDiv = document.querySelector("#category-products");
        productDiv.appendChild(card);
        x = i;
      }
    }
    //add new category title
    document.querySelector("#catHeader").remove();
    displayCat(products[x]);
  };
  //add event listener to each button element, and call table update function with clicked id
  btnElems.forEach((element) => {
    element.addEventListener("click", updateProductCard);
  });
});
