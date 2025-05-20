// ==== MAIN DATA STRUCTURE ==== //

// Defining the product
let products = {
  "Mango Graham Float": {
    ingredients: [
      { name: "Mango", available: 30, unit: "pc(s)", cost: 25, recipe: 4, recipeUnit: "pc(s)" },
      { name: "Graham Crackers", available: 1000, unit: "g", cost: 0.90, recipe: 200, recipeUnit: "g" },
      { name: "Crushed Graham", available: 500, unit: "g", cost: 1.00, recipe: 50, recipeUnit: "g" },
      { name: "All Purpose Cream", available: 5000, unit: "ml", cost: 0.45, recipe: 400, recipeUnit: "ml" },
      { name: "Condensed Milk", available: 3000, unit: "ml", cost: 0.60, recipe: 300, recipeUnit: "ml" },
    ],
    sellingPrice: 950,
    fixedCost: 5000
  }
};

let currentProduct = "Mango Graham Float";
const units = ["g", "kg", "ml", "L", "tsp", "tbsp", "cup", "fl oz", "pc(s)", "pack(s)"];

// ==== INITIALIZATION ==== //
function init() {
  document.getElementById("addIngredientBtn").addEventListener("click", addIngredient);
  document.getElementById("addProductBtn").addEventListener("click", addProduct);
  document.getElementById("deleteProductBtn").addEventListener("click", deleteProduct);
  document.getElementById("productSelect").addEventListener("change", loadProduct);
  document.getElementById("productionForm").addEventListener("submit", handleSubmit);
  initProductSelector();
}

// Populate the product dropdown
function initProductSelector() {
  const select = document.getElementById("productSelect");
  select.innerHTML = Object.keys(products)
    .map(p => `<option value="${p}">${p}</option>`)
    .join("");
  select.value = currentProduct;
  loadProduct();
}

// ==== PRODUCT OPERATIONS ==== //

// Add a new product
function addProduct() {
  const name = document.getElementById("newProductName").value.trim();
  if (!name) return alert("Product name cannot be empty.");
  if (products[name]) return alert("Product already exists.");
  products[name] = { ingredients: [], sellingPrice: 0, fixedCost: 0 };
  currentProduct = name;
  document.getElementById("newProductName").value = "";
  initProductSelector();
}

// Delete the current product
function deleteProduct() {
  const confirmation = confirm(`Are you sure you want to delete the product "${currentProduct}"? This action cannot be undone.`);
  if (confirmation) {
    delete products[currentProduct];
    currentProduct = Object.keys(products)[0] || "";
    initProductSelector();
    loadProduct();
  }
}

// Load product data and ingredients into the form
function loadProduct() {
  const select = document.getElementById("productSelect");
  currentProduct = select.value;
  const container = document.getElementById("ingredientsContainer");

  container.innerHTML = `
    <h2>Ingredients</h2>
    <div class="ingredient-header">
      <div>Ingredient Name</div>
      <div>Available Quantity</div>
      <div>Unit</div>
      <div>Cost per Unit</div>
      <div>Quantity per Product</div>
      <div>Recipe Unit</div>
      <div>Action</div>
    </div>
  `;

  products[currentProduct].ingredients.forEach(ing => {
    const div = createIngredientRow(ing);
    container.appendChild(div);
  });

  document.getElementById("sellingPrice").value = products[currentProduct].sellingPrice || "";
  document.getElementById("fixedCost").value = products[currentProduct].fixedCost || "";
}

// ==== INGREDIENT OPERATIONS ==== //

// Create an editable row for an ingredient
function createIngredientRow(ing = {}) {
  const div = document.createElement("div");
  div.className = "ingredient-row";

  div.innerHTML = `
    <div><input type="text" name="name" value="${ing.name || ""}" required /></div>
    <div><input type="number" name="available" min="0.01" step="any" value="${ing.available || ""}" required /></div>
    <div>
      <select name="availableUnit" required>
        ${createUnitDropdown(ing.unit)}
      </select>
    </div>
    <div><input type="number" name="cost" min="0.01" step="any" value="${ing.cost || ""}" required /></div>
    <div><input type="number" name="recipe" min="0.01" step="any" value="${ing.recipe || ""}" required /></div>
    <div>
      <select name="recipeUnit" required>
        ${createUnitDropdown(ing.recipeUnit)}
      </select>
    </div>
    <div><button type="button" class="delete-btn">🗑️</button></div>
  `;

  div.querySelector(".delete-btn").addEventListener("click", () => div.remove());
  return div;
}

// Populate unit dropdown with selected unit
function createUnitDropdown(selectedUnit) {
  return units
    .map(unit => `<option value="${unit}" ${unit === selectedUnit ? 'selected' : ''}>${unit}</option>`)
    .join('');
}

// Add a blank ingredient row
function addIngredient() {
  const container = document.getElementById("ingredientsContainer");
  const div = createIngredientRow();
  container.appendChild(div);
}

// ==== FORM SUBMISSION & CALCULATIONS ==== //
function handleSubmit(e) {
  e.preventDefault();

  const ingredientDivs = document.querySelectorAll(".ingredient-row");
  const ingredients = [];

  let hasZeroOrNegativeInput = false;
  let scarceResources = [];
  let adequateResources = [];

  // Collect and validate ingredient data
  for (let div of ingredientDivs) {
    const [name, available, unit, cost, recipe, recipeUnit] = div.querySelectorAll("input, select");

    if (!name.value || !unit.value || isNaN(available.value) || isNaN(cost.value) || available.value <= 0 || cost.value <= 0) {
      hasZeroOrNegativeInput = true;
    } else {
      ingredients.push({
        name: name.value,
        available: parseFloat(available.value),
        unit: unit.value,
        cost: parseFloat(cost.value),
        recipe: parseFloat(recipe.value),
        recipeUnit: recipeUnit.value
      });

      const availableQuantity = parseFloat(available.value);
      const recipeQuantity = parseFloat(recipe.value);

      if (availableQuantity >= recipeQuantity) {
        adequateResources.push(name.value);
      } else if (availableQuantity < recipeQuantity && availableQuantity > 0) {
        scarceResources.push(name.value);
      }
    }
  }

  // Handle invalid inputs
  if (hasZeroOrNegativeInput) {
    alert("❌ There is a 0 or negative input. Please check all fields and enter valid positive values.");
    return;
  }

  // Warn about scarce or adequate resources
  if (scarceResources.length > 0) {
    alert("⚠️ Warning: The following resources are SCARCE:\n" + scarceResources.join(", "));
    return;
  }

  if (adequateResources.length > 0) {
    alert("✅ Note: The following resources are ADEQUATE:\n" + adequateResources.join(", "));
  }

  // Validate selling price and fixed cost
  const sellingPriceInput = document.getElementById("sellingPrice").value;
	 const fixedCostInput = document.getElementById("fixedCost").value;

		const sellingPrice = parseFloat(sellingPriceInput);
		const fixedCost = parseFloat(fixedCostInput);

		if (isNaN(sellingPrice) || sellingPrice <= 0) {
  alert("❌ Selling price must be a number greater than zero.");
  return;
		}
		if (isNaN(fixedCost) || fixedCost < 0) {
  alert("❌ Fixed cost must be a number zero or greater.");
  return;
		}

  // Save data to current product
  products[currentProduct].ingredients = ingredients;
  products[currentProduct].sellingPrice = sellingPrice;
  products[currentProduct].fixedCost = fixedCost;

  // ==== CALCULATIONS ==== //

  // Calculate maximum number of units that can be produced
  let maxUnits = Infinity;
  for (let ing of ingredients) {
    const maxForThisIngredient = Math.floor(ing.available / ing.recipe);
    maxUnits = Math.min(maxUnits, maxForThisIngredient);
  }
  if (maxUnits === Infinity) maxUnits = 0;

  // Calculate total and unit cost computation
  let totalCost = 0;
  for (let ing of ingredients) {
    const used = ing.recipe * maxUnits;
    totalCost += used * ing.cost;
  }
		
  // Calculate per unit cost, revenue, profit, break-even
  const unitCost = maxUnits > 0 ? totalCost / maxUnits : 0;
  const revenue = sellingPrice * maxUnits;
  const profit = revenue - totalCost;
  const breakEvenUnits = sellingPrice > unitCost
    ? Math.ceil(fixedCost / (sellingPrice - unitCost))
    : "Not achievable";

  // Display result summary
  const ingredientSummary = ingredients.map(ing => {
    const used = ing.recipe * maxUnits;
    return `<li><strong>${ing.name}</strong>: ${used} ${ing.recipeUnit} used, @ ₱${ing.cost.toFixed(2)}/unit</li>`;
  }).join("");

  document.getElementById("output").innerHTML = `
    <h2>Results for <em>${currentProduct}</em></h2>
    <ul>${ingredientSummary}</ul>
    <p><strong>Maximum Units:</strong> ${maxUnits}</p>
    <p><strong>Total Cost:</strong> ₱${totalCost.toFixed(2)}</p>
    <p><strong>Cost per Unit:</strong> ₱${unitCost.toFixed(2)}</p>
    <p><strong>Revenue:</strong> ₱${revenue.toFixed(2)}</p>
    <p><strong>Profit:</strong> ₱${profit.toFixed(2)}</p>
    <p><strong>Break-even Units:</strong> ${breakEvenUnits}</p>
  `;
}

// Run init after the DOM has loaded
window.addEventListener("DOMContentLoaded", init);
