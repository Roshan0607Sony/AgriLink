



// // Wait for the page to fully load
// document.addEventListener("DOMContentLoaded", () => {
//   const productInfo = document.getElementById("productInfo");
//   const buyForm = document.getElementById("buyForm");
//   const backBtn = document.getElementById("backBtn");

//   // Get selected product info from localStorage
//   const index = localStorage.getItem("selectedProduct");
//   const products = JSON.parse(localStorage.getItem("products")) || [];
//   const product = products[index];
//   const proceedBtn = document.getElementById("proceedBtn");

//   // Show selected product details on buy page
//   if (product) {
//     productInfo.innerHTML = `
//       <h3>${product.name}</h3>
//       <p>${product.desc}</p>
//       <p><b>₹${product.price}</b></p>
//     `;
//   } else {
//     productInfo.innerHTML = "<p>⚠️ No product selected. Please go back and try again.</p>";
//   }

//   // When the user submits the form (clicks Proceed to Payment)
//   buyForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     // Get customer input values
//     const name = document.getElementById("custName").value.trim();
//     const address = document.getElementById("custAddress").value.trim();
//     const qty = document.getElementById("custQty").value.trim();

//     // Validation
//     if (!name || !address || !qty) {
//       alert("⚠️ Please fill all fields before proceeding!");
//       return;
//     }

//     // Save the data temporarily in localStorage for payment page
//     const purchaseData = {
//       product,
//       customer: { name, address, qty }
//     };

//     localStorage.setItem("selectedForPayment", JSON.stringify(purchaseData));

//     // Go to payment page
//     window.location.href = "payment.html";
//   });

//   // Go back button event
//   backBtn.addEventListener("click", () => {
//     window.location.href = "customer.html";
//   });
//   {
//   proceedBtn.addEventListener("click", () => {
//     window.location.href = "payment.html";
//   });}
// });

document.addEventListener("DOMContentLoaded", () => {
  const productInfo = document.getElementById("productInfo");
  const buyForm = document.getElementById("buyForm");
  const backBtn = document.getElementById("backBtn");
  const proceedBtn = document.getElementById("proceedBtn");

  // Get selected product info from localStorage
  const index = localStorage.getItem("selectedProduct");
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const product = products[index];

  // Show selected product details on buy page
  if (product) {
    productInfo.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <p><b>₹${product.price}</b></p>
    `;
  } else {
    productInfo.innerHTML = "<p>⚠️ No product selected. Please go back and try again.</p>";
  }

  // When the user submits the form (clicks Proceed to Payment)
  buyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("custName").value.trim();
    const address = document.getElementById("custAddress").value.trim();
    const qty = document.getElementById("custQty").value.trim();

    if (!name || !address || !qty) {
      alert("⚠️ Please fill all fields before proceeding!");
      return;
    }

    const purchaseData = {
      product,
      customer: { name, address, qty }
    };

    localStorage.setItem("selectedForPayment", JSON.stringify(purchaseData));
    window.location.href = "payment.html";
  });

  // Go back button event
  backBtn.addEventListener("click", () => {
    window.location.href = "customer.html";
  });

  // Proceed button validation (same check as form)
  proceedBtn.addEventListener("click", () => {
    const name = document.getElementById("custName").value.trim();
    const address = document.getElementById("custAddress").value.trim();
    const qty = document.getElementById("custQty").value.trim();

    if (!name || !address || !qty) {
      alert("⚠️ Please fill all fields before proceeding!");
      return;
    }

    const purchaseData = {
      product,
      customer: { name, address, qty }
    };

    localStorage.setItem("selectedForPayment", JSON.stringify(purchaseData));
    window.location.href = "payment.html";
  });
});
