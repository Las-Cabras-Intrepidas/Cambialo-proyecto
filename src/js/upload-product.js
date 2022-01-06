/* eslint-disable quote-props */
/* eslint-disable quotes */
//  Json de los productos
let listProduct = [];

class Product {
  constructor(title, description, picture, category, availability = true) {
    this.id = title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
    this.title = title;
    this.description = description;
    this.picture = picture;
    this.availability = availability ? "Disponible" : "No Disponible";
    this.category = category;
  }
}

//nos falto el padre para que se viera la info pero solved ya
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
  <div class="${classes.divCard}" id="${product.id}" onclick="showChangeProduct()">
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
  container.insertAdjacentHTML("beforeEnd", template);
}
//filter por categoria

//mostrar la pagina de confirm product en click
function showChangeProduct() {
  return (document.location = "./product_confirm.html");
}

//trae los datos del JSON, si nos aprueba pasamos al sig evento. Sino coge y arroja error.
function createProduct() {
  fetch("js/producto.json")
    .then((response) => response.json())
    .catch((error) => console.error("Esto no funciona", error))
    .then((data) => {
      // Array de los productos del JSON. Con un bucle lo metemos dentro de una variable global para poder trabajar.
      for (let index in data) {
        listProduct.push(data[index]);
      }
      createAllProduct(listProduct);
    });
}

function createAllProduct(ProductList) {
  const containerProduct = document.querySelector(".product-container"); //la section
  for (let index in ProductList) {
    const ItemJSON = ProductList[index];
    const Product1 = new Product(
      ItemJSON.title,
      ItemJSON.description,
      ItemJSON.picture,
      ItemJSON.available,
      ItemJSON.category
    );
    addProductToCatalog(Product1, containerProduct);
  }
}
// la ventana escucha por el DOM
window.addEventListener("DOMContentLoaded", () => {
  //solo obtengo una lista de los titulos de los productos
  if (localStorage.getItem("Lista de productos") != null) {
    let listUploadProduct = JSON.parse(
      localStorage.getItem("Lista de productos")
    ); //SI en el storage, cogeme el item y si es distinto de nulo, procesas el item (un array de titulos).
    for (let index in listUploadProduct) {
      const UploadProduct = JSON.parse(
        localStorage.getItem(listUploadProduct[index])
      ); // y con ese array iteramos dentro de la lista de titulos para coger el resto de items que se han subido (img, description) solo funciona en tu ordenador mientras lo subes, no es un backend real.
      console.log(UploadProduct);
      listProduct.push(UploadProduct); //aqui meto upload product dentro de list product.
    }
  }
  createProduct(); //procesado del json junto con la variable global
});

/// Filtro por categorias

// Reconocer la categoria seleccionada y guardarla en una variable

const container = document.getElementById("main-container");
const btnCategory = container.querySelectorAll(".card-category");

btnCategory.forEach((category) =>
  category.addEventListener("click", (e) => {
    const categoryID = e.currentTarget.id;
    document.querySelector(".product-container").innerHTML = "";
    const listFiltered = listProduct.filter(
      (item) => item.category === categoryID
    );
    createAllProduct(listFiltered);
  })
);

//

function showCategories() {
  const listFiltered = filterList(listProduct, categoryID);
  console.log(listFiltered);
  document.querySelector(".main-container").innerHTML = "";
  createProductsFiltered(listFiltered);
}

// Coger esa variable y usarla para filtrar el array de productos

function filterList(arr, arg) {
  arr.filter((item) => item.category === arg);
}
