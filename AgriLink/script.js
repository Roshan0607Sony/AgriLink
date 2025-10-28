// Smooth Scroll for Navigation Links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Simple Contact Form Alert
const contactBtn = document.getElementById("contactBtn");
if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    alert("Thank you for showing interest! Our team will contact you soon.");
  });
}

// Example of dynamic card loading (mock data for prototype)
const farmers = [
  { name: "Ravi Kumar", product: "Organic Rice", price: "₹45/kg" },
  { name: "Anita Devi", product: "Fresh Vegetables", price: "₹30/kg" },
  { name: "Vikram Singh", product: "Wheat Grains", price: "₹40/kg" }
];

const farmerList = document.getElementById("farmerList");
if (farmerList) {
  farmers.forEach(farmer => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${farmer.name}</h3>
      <p><strong>Product:</strong> ${farmer.product}</p>
      <p><strong>Price:</strong> ${farmer.price}</p>
      <button>Contact Farmer</button>
    `;
    farmerList.appendChild(card);
  });
}
