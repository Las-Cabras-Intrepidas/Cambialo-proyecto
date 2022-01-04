let listItemsUploaded = [];
const termsConditions = document.querySelector("#terms");
//revisar este prevent default
termsConditions.addEventListener("change", (e) => e.preventDefault());

const btnSubmit = document.querySelector(".btn");
btnSubmit.addEventListener("click", sendForm);

// upload de los productos
function show() {
  const archivo = document.getElementById("file").files[0];
  const reader = new FileReader();
  // eslint-disable-next-line no-undef
  if (file) {
    reader.readAsDataURL(archivo);
    reader.onloadend = function () {
      //console.log(reader.result);
      document.getElementById("img").src = reader.result;
    };
  }
}
class Product {
  constructor(title, description, picture, availability = true) {
    this.title = title;
    this.description = description;
    this.picture = picture;

    this.availability = availability ? "Disponible" : "No Disponible";
  }
}
const saveLocalStorage = (title, product) =>
  localStorage.setItem(title, JSON.stringify(product));
// Item = array de los nombres de los productos que se suben
// Para despues poder pedir el resto de items
function sendForm() {
  const img = document.getElementById("img").src;
  const megaTitle = document.getElementById("product-title").value;
  const megaDescription = document.getElementById("text-upload").value;

  const product = new Product(megaTitle, megaDescription, img);
  listItemsUploaded.push(megaTitle);
  saveLocalStorage("Lista de productos", listItemsUploaded);
  // product.picture = img;
  // product.title = megaTitle;
  // product.description = megaDescription;
  saveLocalStorage(megaTitle, product);
  document.location = "./product.html";
  // addProductToCatalog(product);
}
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("Lista de Productos") != null) {
    let listUploadProduct = JSON.parse(
      localStorage.getItem("Lista de Productos")
    );
    listItemsUploaded = listUploadProduct;
  }
});
