


const form = document.getElementById("addProductForm");
const list = document.getElementById("productList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("pname").value;
  const desc = document.getElementById("pdesc").value;
  const price = document.getElementById("pprice").value;
  const qrFile = document.getElementById("qrUpload").files[0];

  if (!qrFile) {
    alert("Please upload a QR code image!");
    return;
  }

  const reader = new FileReader();
  reader.onload = function () {
    const qrData = reader.result; // Base64 image data

    const product = { name, desc, price, qr: qrData };
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));

    alert("✅ Product added successfully!");
    form.reset();
    displayProducts();
  };
  reader.readAsDataURL(qrFile);
});

function displayProducts() {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  list.innerHTML = "<h2>Your Products</h2>";

  if (products.length === 0) {
    list.innerHTML += "<p>No products added yet.</p>";
    return;
  }

  products.forEach((p, index) => {
    list.innerHTML += `
      <div class="product">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <p>₹${p.price}</p>
        <img src="${p.qr}" alt="QR Code">
      </div>
    `;
  });
}

// Load products on page open
displayProducts();

// Logout Button
document.getElementById("logoutBtn").addEventListener("click", () => {
  window.location.href = "start up page.html"; // Go to main selection page
});
