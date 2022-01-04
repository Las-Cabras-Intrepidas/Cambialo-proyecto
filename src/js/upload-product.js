/* eslint-disable quote-props */
/* eslint-disable quotes */
//  Json de los productos
let listProduct = [];

// ! const termsConditions = document.querySelector("#terms");
//revisar este prevent default
// ! termsConditions.addEventListener("change", (e) => e.preventDefault());

/* const btnSubmit = document.querySelector(".btn");
btnSubmit.addEventListener("click", sendForm);*/

class Product {
  constructor(title, description, picture, availability = true) {
    this.title = title;
    this.description = description;
    this.picture = picture;

    this.availability = availability ? "Disponible" : "No Disponible";
  }
}

function sendForm() {
  const img = document.getElementById("img").src;
  const megaTitle = document.getElementById("product-title").value;
  const megaDescription = document.getElementById("text-upload").value;

  const product = new Product(megaTitle, megaDescription, img);

  // product.picture = img;
  // product.title = megaTitle;
  // product.description = megaDescription;
  listProduct.push(product);
  // addProductToCatalog(product);

  console.log(product);
}

function addProductToCatalog(product, container) {
  const classes = {
    divCard: "column is-half-touch is-one-quarter-desktop",
    card: "product-card",
    paragraph: "has-text-weight-bold",
    description: "has-text-left",
    availability: "green",
    text: "text-product",
  };
  const template = `
  <div class="${classes.divCard}">
    <div class="${classes.card}">
      <img src="${product.picture}" alt="${product.title}">
      <div class="${classes.text}">
        <p class="${classes.availability}">${product.availability}</p>
        <p class="${classes.paragraph}">${product.title}</p>
        <p class="${classes.description}">${product.description}</p>
      </div>
    </div>
  </div>
  `;
  // const catalog = document.querySelector("#producto");
  container.insertAdjacentHTML("beforeEnd", template);
}
function createProduct() {
  fetch("js/producto.json")
    .then((response) => response.json())
    .catch((error) => console.error("Esto no funciona", error))
    .then((data) => {
      // Array de los productos del JSON

      for (let index in data) {
        listProduct.push(data[index]);
      }
      console.log(listProduct);
      createAllProduct(listProduct);
    });
}
function createAllProduct(ProductList) {
  const containerProduct = document.querySelector(".product-container");
  for (let index in ProductList) {
    const ItemJSON = ProductList[index];
    const Product1 = new Product(
      ItemJSON.title,
      ItemJSON.description,
      ItemJSON.picture,
      ItemJSON.available
    );
    addProductToCatalog(Product1, containerProduct);
  }
}
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("Lista de productos") != null) {
    let listUploadProduct = JSON.parse(
      localStorage.getItem("Lista de productos")
    );
    for (let index in listUploadProduct) {
      const UploadProduct = JSON.parse(
        localStorage.getItem(listUploadProduct[index])
      );
      console.log(UploadProduct);
      listProduct.push(UploadProduct);
    }
  }
  createProduct();
});
