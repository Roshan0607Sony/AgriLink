const addBtn = document.getElementById('addBtn');
const productList = document.getElementById('productList');
const logoutBtn = document.getElementById('logoutBtn');

function displayProducts() {
  const saved = JSON.parse(localStorage.getItem('farmerProducts')) || [];
  productList.innerHTML = '';
  saved.forEach(p => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${p.name}</strong> - ₹${p.price}<br><small>${p.desc}</small>`;
    productList.appendChild(li);
  });
}

addBtn.addEventListener('click', () => {
  const name = document.getElementById('productName').value.trim();
  const price = document.getElementById('productPrice').value.trim();
  const desc = document.getElementById('productDesc').value.trim();

  if (!name || !price || !desc) {
    alert("Please fill all fields.");
    return;
  }

  const product = { name, price, desc };
  const products = JSON.parse(localStorage.getItem('farmerProducts')) || [];
  products.push(product);
  localStorage.setItem('farmerProducts', JSON.stringify(products));

  displayProducts();

  document.getElementById('productName').value = '';
  document.getElementById('productPrice').value = '';
  document.getElementById('productDesc').value = '';
});

logoutBtn.addEventListener('click', () => {
  alert("Logged out!");
  window.location.href = "start up page.html";
});

displayProducts();
