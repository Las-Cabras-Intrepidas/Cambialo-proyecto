/* eslint-disable quote-props */
/* eslint-disable quotes */
function show() {
  const archivo = document.getElementById("file").files[0];
  const reader = new FileReader();
  // eslint-disable-next-line no-undef
  if (file) {
    reader.readAsDataURL(archivo);
    reader.onloadend = function () {
      console.log(reader.result);
      document.getElementById("img").src = reader.result;
    };
  }
}

// como guardar datos recogidos del form y hacer un json con ellos
function sendForm() {
  const photoProduct = document.getElementById("img").src;
  const nameProduct = document.getElementById("product-title").value;
  const descriptionProduct = document.getElementById("text-upload").value;
  const product = {
    productName: nameProduct,
    productDescription: descriptionProduct,
    productPicture: photoProduct,
  };

  addProductToCatalog(product);
  resetForm();
}

// subida del producto a product.html y manz recomienda más bien así:

const addProductToCatalog = (product, classes) => {
  const template = `
    <div class="${classes.card}">
      <img src="${product.picture}" alt="${product.name}">
      <p class="${classes.paragraph}">${product.name}</p>
      <p class="${classes.description}">${product.description}</p>
    </div>
  `;

  const catalog = document.querySelector("#product-catalog");
  catalog.insertAdjacentHTML("beforeEnd", newProduct);
};

// así lo mandamos a llamar
const product = {
  picture: "/image.jpg",
  name: "Product Name",
  description: "Large Description",
};
const classes = {
  card: "product-card",
  paragraph: "has-text-weight-bold",
  description: "has-text-left",
};
addProductToCatalog(product, classes);
