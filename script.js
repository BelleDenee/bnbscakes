// Cart array to hold orders
let cart = [];

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
  document.getElementById('step4'),
  document.getElementById('step5')
];

function showStep(step) {
  steps.forEach((s, index) => {
    s.style.display = (index === step) ? 'block' : 'none';
  });
}

function selectBase(value) {
  cakeOrder.base = value;
  currentStep = 1;
  showStep(currentStep);
}

function selectFrosting(value) {
  cakeOrder.frosting = value;
  currentStep = 2;
  showStep(currentStep);
}

function enterWording() {
  const wordingInput = document.getElementById('wording').value;
  const wordingColorInput = document.getElementById('wordingColor').value;

  cakeOrder.wording = wordingInput;
  cakeOrder.wordingColor = wordingColorInput;

  currentStep = 3;
  showStep(currentStep);
}

function skipWording() {
  cakeOrder.wording = "";
  cakeOrder.wordingColor = "";
  currentStep = 3;
  showStep(currentStep);
}

function reviewOrder() {
  const reviewBox = document.getElementById('reviewBox');
  reviewBox.innerHTML = `
    <h3>Your Cake:</h3>
    <p><strong>Base:</strong> ${cakeOrder.base}</p>
    <p><strong>Frosting:</strong> ${cakeOrder.frosting}</p>
    ${cakeOrder.wording ? `<p><strong>Wording:</strong> ${cakeOrder.wording} in ${cakeOrder.wordingColor}</p>` : ""}
  `;
  currentStep = 4;
  showStep(currentStep);
}

function addToCart() {
  cart.push({ ...cakeOrder });
  alert("Cake added to cart!");
  window.location.href = "index.html"; // Redirect to homepage after adding
}

// POPULAR CAKES SELECTION
function addPopularCake(cakeName) {
  cart.push({ name: cakeName });
  alert(`${cakeName} added to cart!`);
}

// Initial display setup
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('buildFlow')) {
    showStep(0);
  }
});
