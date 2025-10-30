function loadProducts() {
  const container = document.getElementById("productContainer");
  const products = JSON.parse(localStorage.getItem("products")) || [];
  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = "<p>No products available right now.</p>";
    return;
  }

  products.forEach((p, index) => {
    container.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <p><b>₹${p.price}</b></p>
        <button onclick="buyProduct(${index})">Buy Now</button>
      </div>
    `;
  });
}

function buyProduct(index) {
  localStorage.setItem("selectedProduct", index);
  window.location.href = "buy.html";
}

loadProducts();

document.getElementById("logoutBtn").addEventListener("click", () => {
  window.location.href = "index.html";
});
