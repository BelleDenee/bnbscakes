// Load or initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('bnbscakes_cart')) || [];

// Save cart to localStorage helper
function saveCart() {
  localStorage.setItem('bnbscakes_cart', JSON.stringify(cart));
}

// BUILD YOUR OWN CAKE FLOW
let currentStep = 0;
let cakeOrder = {
  base: "",
  frosting: "",
  wording: "",
  wordingColor: ""
};

const steps = [
  document.getElementById('step1'),
  document.getElementById('step2'),
  document.getElementById('step3'),
  document.getElementById('step4')
];

// Show the current step only
function showStep(step) {
  steps.forEach((s, index) => {
    if(s) s.style.display = (index === step) ? 'block' : 'none';
  });
}

// Select cake base and move to next step
function selectBase(value) {
  cakeOrder.base = value;
  currentStep = 1;
  showStep(currentStep);
}

// Select frosting and move to next step
function selectFrosting(value) {
  cakeOrder.frosting = value;
  currentStep = 2;
  showStep(currentStep);
}

// Proceed to wording step
function toWordingStep() {
  currentStep = 2;
  showStep(currentStep);
}

// Handle wording submission or skip
function submitWording() {
  const wordingInput = document.getElementById('wording').value.trim();
  const wordingColorInput = document.getElementById('wordingColor').value;

  cakeOrder.wording = wordingInput;
  cakeOrder.wordingColor = wordingColorInput;

  addToCart();
}

function skipWording() {
  cakeOrder.wording = "";
  cakeOrder.wordingColor = "";
  addToCart();
}

// Add current cake order to cart and save
function addToCart() {
  cart.push({ ...cakeOrder });
  saveCart();
  alert("Your cake has been added to the cart!");
  window.location.href = "cart.html";
}

// POPULAR CAKES SELECTION
function addPopularCake(cakeName) {
  cart.push({ name: cakeName });
  saveCart();
  alert(`${cakeName} added to cart!`);
  window.location.href = "cart.html";
}

// On page load, initialize build form steps if they exist
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('step1')) {
    showStep(0);
  }
});
