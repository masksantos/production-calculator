# Project Overview

## Maximizing Profit: Analyzing Cost Efficiency in Mango Graham Float Production

This calculator helps determine the maximum number of mango graham float units you can produce based on ingredient availability, cost analysis, and recipe requirements. It computes essential metrics such as unit cost, total profit, and break-even analysis, empowering you to make informed decisions and optimize your production process effectively.

## Product Chosen: Mango Graham Float
Mango Graham Float is a classic Filipino dessert featuring layers of ripe mangoes, crushed graham crackers, and a smooth, creamy milk blend. This sophisticated treat expertly balances sweetness and texture, delivering a rich yet refreshing flavor profile that exemplifies Filipino culinary artistry.

## Ingredient List, Unit Costs, and Recipe Requirements
Below is the detailed breakdown of ingredients used in the recipe, including their total available quantity, cost per unit, and the quantity required per product unit:

| Ingredient | Total Quantity Available | Unit Cost | Quantity Required per Product |
| :---: | :---: | :---: | :---: |
| Mango | 30 pcs | 25.00 Php | 4pcs |
| Graham Crackers | 1000 g | 0.90 Php | 200 g |
| Crushed Grahams | 500 g | 1.00 Php | 50 g |
| All Purpose Cream | 5000 ml | 0.45 Php | 400 ml |
| Condensed Milk | 3000 ml | 0.60 Php | 300 ml |

### Recipe Requirements
Each product unit requires specific quantities of each ingredient as detailed above.
The selling price per unit is set at **950.00 Php**.
A fixed overhead cost of **5000 applies** to the total production.

## Program usage (inputs, outputs)
### Inputs
The program requires the following inputs to perform calculations:
1. **Ingredient Quantities**: 
   - The total available quantities of each ingredient (e.g., mango, graham crackers, etc.) as specified in the ingredient list.
  
2. **Unit Costs**: 
   - The cost per unit for each ingredient (e.g., cost of mango per piece, cost of graham crackers per gram, etc.).
3. **Quantity Requirements**: 
   - The amount of each ingredient required to produce one unit of the product (e.g., how many pieces of mango are needed for one product).
4. **Selling Price per Unit**: 
   - The price at which each unit of the product will be sold.
5. **Fixed Overhead Cost**: 
   - The total fixed costs associated with production that do not vary with the number of units produced (e.g., rent, utilities).

### Outputs
The program generates the following outputs based on the inputs provided:

1. **Maximum Units Producible**: 
   - The maximum number of product units that can be produced based on the available ingredient quantities and their respective requirements.
2. **Unit Cost Calculation**: 
   - The total cost incurred to produce one unit of the product, calculated from the ingredient costs and quantities required.
3. **Total Production Cost**: 
   - The overall cost of producing the calculated maximum number of units, including both variable ingredient costs and fixed overhead costs.
4. **Total Revenue**: 
   - The total income generated from selling the maximum number of units, calculated as the selling price per unit multiplied by the number of units produced.
5. **Total Profit**: 
   - The profit earned from the production, calculated as the total revenue minus the total production cost.
6. **Break-even Analysis**: 
   - The number of units that must be sold to cover all costs (fixed and variable), calculated using the formula:
   $$
   \text{Break-even Units} = \frac{\text{Fixed Overhead}}{\text{Selling Price per Unit} - \text{Unit Cost}}
   $$

This structured input and output format allows users to easily understand the requirements and results of the production calculations, facilitating better decision-making in their production processes.

## Sample Run
To illustrate how the program works, here is a sample run based on the provided ingredient data and recipe requirements.

### Sample Input
- **Ingredient Quantities**:
  - Mango: 30 pcs
  - Graham Crackers: 1000 g
  - Crushed Grahams: 500 g
  - All Purpose Cream: 5000 ml
  - Condensed Milk: 3000 ml
- **Unit Costs**:
  - Mango: 25 per piece
  - Graham Crackers: 0.90 per gram
  - Crushed Grahams: 1.00 per gram
  - All Purpose Cream: 0.45 per ml
  - Condensed Milk: 0.60 per ml
- **Quantity Requirements per Product**:
  - Mango: 4 pcs
  - Graham Crackers: 200 g
  - Crushed Grahams: 50 g
  - All Purpose Cream: 400 ml
  - Condensed Milk: 300 ml
- **Selling Price per Unit**: 950
- **Fixed Overhead Cost**: 5000

### Sample Output
1. **Maximum Units Producible**:
   - Based on the ingredient availability and requirements, the maximum number of units that can be produced is **7 units** (limited by the availability of mango).
2. **Unit Cost Calculation**:
   - Total ingredient cost per unit:
     - Mango: $4 \text{ pcs} \times 25 = 100$
     - Graham Crackers: $200 \text{ g} \times 0.90 = 180$
     - Crushed Grahams: $50 \text{ g} \times 1.00 = 50$
     - All Purpose Cream: $400 \text{ ml} \times 0.45 = 180$
     - Condensed Milk: $300 \text{ ml} \times 0.60 = 180$
   - Total Unit Cost: 
   $$
   100 + 180 + 50 + 180 + 180 = 690
   $$
3. **Total Production Cost**:
   - Total production cost for 7 units:
   $$
   \text{Total Production Cost} = (690 \text{ per unit} \times 7 \text{ units}) + 5000 = 4830 + 5000 = 9830
   $$
4. **Total Revenue**:
   - Total revenue from selling 7 units:
   $$
   \text{Total Revenue} = 950 \text{ per unit} \times 7 \text{ units} = 6650
   $$
5. **Total Profit**:
   - Total profit earned:
   $$
   \text{Total Profit} = \text{Total Revenue} - \text{Total Production Cost} = 6650 - 9830 = -3180
   $$
6. **Break-even Analysis**:
   - Break-even units required:
   $$
   \text{Break-even Units} = \frac{5000}{950 - 690} = \frac{5000}{260} \approx 19.23 \text{ units}
   $$

### Summary

In this sample run, the program calculates that you can produce a maximum of 7 units, but due to the high production costs relative to the selling price, you would incur a loss of 3180. Additionally, you would need to sell approximately 20 units to break even.

This example demonstrates how the calculator can help you assess production feasibility and profitability based on ingredient availability and costs.
