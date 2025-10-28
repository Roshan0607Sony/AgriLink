const roleSelection = document.getElementById("roleSelection");
const authBox = document.getElementById("authBox");
const roleTitle = document.getElementById("roleTitle");

const customerBtn = document.getElementById("customerBtn");
const farmerBtn = document.getElementById("farmerBtn");

const loginBox = document.getElementById("login-box");
const signupBox = document.getElementById("signup-box");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

let selectedRole = "";

// Role selection
customerBtn.addEventListener("click", () => {
  selectedRole = "Customer";
  startAuth();
});

farmerBtn.addEventListener("click", () => {
  selectedRole = "Farmer";
  startAuth();
});

function startAuth() {
  roleSelection.classList.add("hidden");
  authBox.classList.remove("hidden");
  roleTitle.textContent = `Login / Sign Up (${selectedRole})`;
}

// Switch between login and signup
showSignup.addEventListener("click", () => {
  loginBox.classList.remove("active");
  signupBox.classList.add("active");
});

showLogin.addEventListener("click", () => {
  signupBox.classList.remove("active");
  loginBox.classList.add("active");
});

// Validation
function validateEmail(email) {
  return  email.endsWith("@gmail.com");
}

function validatePassword(password) {
  const special = /[!@#$%^&*(),.?":{}|<>]/;
  return password.length >= 8 && special.test(password);
}

// Login and signup actions
loginBtn.addEventListener("click", () => {
  const email = loginBox.querySelector("input[type='email']").value.trim();
  const pass = loginBox.querySelector("input[type='password']").value.trim();

  if (!validateEmail(email)) {
    alert("Email must include @gmail.com");
    return;
  }

  if (!validatePassword(pass)) {
    alert("Password must be at least 8 chars and have one special symbol");
    return;
  }

  alert(`${selectedRole} login successful!`);
  window.location.href = selectedRole === "Farmer" ? "farmer.html" : "customer.html";
});

signupBtn.addEventListener("click", () => {
  const email = signupBox.querySelector("input[type='email']").value.trim();
  const pass = signupBox.querySelector("input[type='password']").value.trim();

  if (!validateEmail(email)) {
    alert("Email must include @gmail.com");
    return;
  }

  if (!validatePassword(pass)) {
    alert("Password must be at least 8 chars and have one special symbol");
    return;
  }

  alert(`Account created for ${selectedRole}! Please login now.`);
  signupBox.classList.remove("active");
  loginBox.classList.add("active");
});
