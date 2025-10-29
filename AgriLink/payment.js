const selected = JSON.parse(localStorage.getItem("selectedForPayment"));

const qrImage = document.getElementById("qrImage");
const qrSection = document.getElementById("qrSection");
const confirmBtn = document.getElementById("confirmBtn");

document.querySelectorAll('input[name="payment"]').forEach((radio) => {
  radio.addEventListener("change", (e) => {
    if (e.target.value === "upi") {
      qrSection.style.display = "block";
      // Load farmer's QR
      qrImage.src = selected.qr || "images/default_qr.png";
    } else {
      qrSection.style.display = "none";
    }
  });
});

confirmBtn.addEventListener("click", () => {
  alert("✅ Payment confirmed! Your order is placed successfully.");
  localStorage.removeItem("selectedForPayment");
  window.location.href = "customer.html";
});

