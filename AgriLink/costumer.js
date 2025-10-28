const searchBox = document.getElementById('searchBox');
const marketList = document.getElementById('marketList');
const logoutBtn = document.getElementById('logoutBtn');

function loadProducts() {
  const products = JSON.parse(localStorage.getItem('farmerProducts')) || [];
  marketList.innerHTML = '';

  if (products.length === 0) {
    marketList.innerHTML = '<li>No products available yet.</li>';
  } else {
    products.forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${p.name}</strong> - ₹${p.price}<br><small>${p.desc}</small>`;
      marketList.appendChild(li);
    });
  }
}

searchBox.addEventListener('input', () => {
  const term = searchBox.value.toLowerCase();
  const items = marketList.getElementsByTagName('li');
  for (let item of items) {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(term) ? '' : 'none';
  }
});

logoutBtn.addEventListener('click', () => {
  alert("Logged out!");
  window.location.href = "start up page.html";
});

loadProducts();
