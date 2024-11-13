const menuData = {
  Clásicas: [
    {
      name: "La clásica",
      img: "images/Jamon y tomate grande.png",
      ingredients: ["Tomate", "Jamón serrano", "Aceite", "Sal"],
    },
    {
      name: "Un rapidín",
      img: "",
      ingredients: ["Ingrediente 1", "Ingrediente 2"],
    },
    {
      name: "Hoy me siento pepino",
      img: "",
      ingredients: [
        "Ingrediente 1",
        "Ingrediente 2",
        "Ingrediente 3",
        "Ingrediente 4",
      ],
    },
    // Añade más tostadas aquí
  ],
  Especiales: [
    {
      name: "La 2008",
      img: "ruta/a/la_2008.jpg",
      ingredients: ["Ingrediente A", "Ingrediente B"],
    },
    {
      name: "La 1973",
      img: "ruta/a/la_1973.jpg",
      ingredients: ["Ingrediente X", "Ingrediente Y", "Ingrediente Z"],
    },
    {
      name: "La Interraíl",
      img: "ruta/a/la_interrail.jpg",
      ingredients: ["Ingrediente 1", "Ingrediente 2"],
    },
    // Añade más tostadas aquí
  ],
  Olvidadas: [
    {
      name: "La cardiólogo",
      img: "ruta/a/la_cardiologo.jpg",
      ingredients: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
    },
    {
      name: "La bombastic",
      img: "ruta/a/la_bombastic.jpg",
      ingredients: ["Ingrediente A", "Ingrediente B", "Ingrediente C"],
    },
    {
      name: "La científica loca",
      img: "ruta/a/la_cientifica_loca.jpg",
      ingredients: ["Ingrediente X", "Ingrediente Y"],
    },
    // Añade más tostadas aquí
  ],
};

let lastCategory = "";
let isShown = false;

function showCategory(category) {
  const cartaDiv = document.getElementById("Carta");
  
  if (lastCategory === category && isShown) {
    console.log("Entro aqui");
    cartaDiv.style.display = "none"; 
    isShown = false;
    return;
  }

  const title = document.getElementById("category-title");
  const contentDiv = document.getElementById("category-content");

  title.textContent = category;
  contentDiv.innerHTML = "";
  

  menuData[category].forEach((item) => {
    const tostadaDiv = document.createElement("div");
    tostadaDiv.classList.add("tostada");

    const ingredientsList = item.ingredients
      .map((ingredient) => `<li>${ingredient}</li>`)
      .join("");

    tostadaDiv.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h4>${item.name}</h4>
      <details>
        <summary>Ingredientes</summary>
        <ul>${ingredientsList}</ul>
      </details>
    `;
    contentDiv.appendChild(tostadaDiv);
  });

  cartaDiv.style.display = "block";

  lastCategory = category;
  isShown = true;
}
