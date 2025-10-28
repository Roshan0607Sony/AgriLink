document.addEventListener("DOMContentLoaded", () => {
  const productInfo = document.getElementById("productInfo");
  const index = localStorage.getItem("selectedProduct");
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const product = products[index];

  if (product) {
    productInfo.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <p><b>₹${product.price}</b></p>
    `;
  }

  const buyForm = document.getElementById("buyForm");
  const backBtn = document.getElementById("backBtn");

  buyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("custName").value.trim();
    const address = document.getElementById("custAddress").value.trim();
    const qty = document.getElementById("custQty").value.trim();

    if (!name || !address || !qty) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    const purchaseData = {
      product,
      customer: { name, address, qty },
    };

    localStorage.setItem("selectedForPayment", JSON.stringify(purchaseData));
    window.location.href = "payment.html";
  });

  backBtn.addEventListener("click", () => {
    window.location.href = "customer.html";
  });
});
