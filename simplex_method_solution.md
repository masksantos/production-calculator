# Simplex Method Solution for Mango Graham Float Production

## Problem Formulation

### Decision Variable
- x = Number of Mango Graham Float units to produce

### Objective Function
- Maximize Z = x (maximize production units)

### Constraints
1. Mango: 4x ≤ 30
2. Graham Crackers: 200x ≤ 1000
3. Crushed Graham: 50x ≤ 500
4. All Purpose Cream: 400x ≤ 5000
5. Condensed Milk: 300x ≤ 3000
6. Non-negativity: x ≥ 0

## Convert to Standard Form

To use the Simplex Method, we need to convert all inequalities to equations by introducing slack variables:

1. 4x + s1 = 30 (where s1 = unused mangoes)
2. 200x + s2 = 1000 (where s2 = unused graham crackers)
3. 50x + s3 = 500 (where s3 = unused crushed graham)
4. 400x + s4 = 5000 (where s4 = unused all purpose cream)
5. 300x + s5 = 3000 (where s5 = unused condensed milk)

The objective function becomes:
- Maximize Z - x = 0 or equivalently: Z - x = 0

## Initial Simplex Tableau

We set up the initial tableau with the objective function coefficients in the first row (with signs reversed), constraint coefficients in the body, and the constants on the right side:

| Basic Variables | Z | x | s1 | s2 | s3 | s4 | s5 | RHS |
|----------------|-----|-----|-------|-------|-------|-------|-------|-----|
| Z              | 1   | -1  | 0     | 0     | 0     | 0     | 0     | 0   |
| s1             | 0   | 4   | 1     | 0     | 0     | 0     | 0     | 30  |
| s2             | 0   | 200 | 0     | 1     | 0     | 0     | 0     | 1000 |
| s3             | 0   | 50  | 0     | 0     | 1     | 0     | 0     | 500 |
| s4             | 0   | 400 | 0     | 0     | 0     | 1     | 0     | 5000 |
| s5             | 0   | 300 | 0     | 0     | 0     | 0     | 1     | 3000 |

## First Iteration

### Step 1: Select the entering variable
- The entering variable is the one with the most negative coefficient in the objective row.
- In this case, x has a coefficient of -1, so x enters the basis.

### Step 2: Select the leaving variable
- Compute the ratio of RHS to the corresponding positive coefficients in the entering variable's column:
  - s1: 30 ÷ 4 = 7.5
  - s2: 1000 ÷ 200 = 5 ← Minimum ratio
  - s3: 500 ÷ 50 = 10
  - s4: 5000 ÷ 400 = 12.5
  - s5: 3000 ÷ 300 = 10
- The minimum ratio is 5 for s2, so s2 leaves the basis.

### Step 3: Perform row operations
- Pivot on the intersection of the entering column (x) and the leaving row (s2).
- Divide the s2 row by 200 to make the pivot element 1:

| Basic Variables | Z | x | s1 | s2 | s3 | s4 | s5 | RHS |
|----------------|-----|-----|-------|-------|-------|-------|-------|-----|
| Z              | 1   | -1  | 0     | 0     | 0     | 0     | 0     | 0   |
| s1             | 0   | 4   | 1     | 0     | 0     | 0     | 0     | 30  |
| x              | 0   | 1   | 0     | 1/200 | 0     | 0     | 0     | 5   |
| s3             | 0   | 50  | 0     | 0     | 1     | 0     | 0     | 500 |
| s4             | 0   | 400 | 0     | 0     | 0     | 1     | 0     | 5000 |
| s5             | 0   | 300 | 0     | 0     | 0     | 0     | 1     | 3000 |

- Use row operations to eliminate x from all other rows:

1. Row Z = Row Z + 1 × Row x
2. Row s1 = Row s1 - 4 × Row x
3. Row s3 = Row s3 - 50 × Row x
4. Row s4 = Row s4 - 400 × Row x
5. Row s5 = Row s5 - 300 × Row x

This gives the new tableau:

| Basic Variables | Z | x | s1 | s2 | s3 | s4 | s5 | RHS |
|----------------|-----|-----|-------|-------|-------|-------|-------|-----|
| Z              | 1   | 0   | 0     | 1/200 | 0     | 0     | 0     | 5   |
| s1             | 0   | 0   | 1     | -4/200| 0     | 0     | 0     | 10  |
| x              | 0   | 1   | 0     | 1/200 | 0     | 0     | 0     | 5   |
| s3             | 0   | 0   | 0     | -50/200| 1    | 0     | 0     | 250 |
| s4             | 0   | 0   | 0     | -400/200| 0   | 1     | 0     | 3000|
| s5             | 0   | 0   | 0     | -300/200| 0   | 0     | 1     | 1500|

Simplifying the fractions:

| Basic Variables | Z | x | s1 | s2 | s3 | s4 | s5 | RHS |
|----------------|-----|-----|-------|-------|-------|-------|-------|-----|
| Z              | 1   | 0   | 0     | 0.005 | 0     | 0     | 0     | 5   |
| s1             | 0   | 0   | 1     | -0.02 | 0     | 0     | 0     | 10  |
| x              | 0   | 1   | 0     | 0.005 | 0     | 0     | 0     | 5   |
| s3             | 0   | 0   | 0     | -0.25 | 1     | 0     | 0     | 250 |
| s4             | 0   | 0   | 0     | -2    | 0     | 1     | 0     | 3000|
| s5             | 0   | 0   | 0     | -1.5  | 0     | 0     | 1     | 1500|

### Step 4: Check for optimality
- Since there are no more negative coefficients in the objective row, we have reached an optimal solution.
- The optimal value is Z = 5 units of Mango Graham Float.

## Optimal Solution
- x = 5 (Produce 5 units of Mango Graham Float)
- s1 = 10 (10 mangoes remain unused)
- s2 = 0 (All graham crackers are used - binding constraint)
- s3 = 250 (250g of crushed graham remains unused)
- s4 = 3000 (3000ml of all purpose cream remains unused)
- s5 = 1500 (1500ml of condensed milk remains unused)

## Verification
We can verify that this solution satisfies all constraints:
1. Mango: 4 × 5 = 20 ≤ 30 ✓
2. Graham Crackers: 200 × 5 = 1000 ≤ 1000 ✓ (Binding)
3. Crushed Graham: 50 × 5 = 250 ≤ 500 ✓
4. All Purpose Cream: 400 × 5 = 2000 ≤ 5000 ✓
5. Condensed Milk: 300 × 5 = 1500 ≤ 3000 ✓


## Economic Analysis Based on Simplex Solution

Using the optimal solution x = 5:

### Resource Utilization
- Mango: 20 out of 30 used (66.7% utilization)
- Graham Crackers: 1000 out of 1000 used (100% utilization) - Binding constraint
- Crushed Graham: 250 out of 500 used (50% utilization)
- All Purpose Cream: 2000 out of 5000 used (40% utilization)
- Condensed Milk: 1500 out of 3000 used (50% utilization)

### Cost Calculation
1. Ingredient costs:
   - Mango: 20 × ₱25.00 = ₱500.00
   - Graham Crackers: 1000 × ₱0.90 = ₱900.00
   - Crushed Graham: 250 × ₱1.00 = ₱250.00
   - All Purpose Cream: 2000 × ₱0.45 = ₱900.00
   - Condensed Milk: 1500 × ₱0.60 = ₱900.00
   - Total variable cost: ₱3,450.00

2. Unit cost: ₱3,450.00 ÷ 5 = ₱690.00 per unit

### Revenue and Profit
- Revenue: 5 × ₱950.00 = ₱4,750.00
- Profit (excluding fixed costs): ₱4,750.00 - ₱3,450.00 = ₱1,300.00
- Net profit (including fixed costs): ₱1,300.00 - ₱5,000.00 = -₱3,700.00

### Break-even Analysis
- Contribution margin: ₱950.00 - ₱690.00 = ₱260.00 per unit
- Break-even units: ₱5,000.00 ÷ ₱260.00 = 19.23 ≈ 20 units

## Comparison with Program's Output

| Metric | Simplex Solution | Program Output | Match? |
|--------|------------|---------------|--------|
| Maximum units | 5 | 5 | ✓ |
| Limiting factor | Graham Crackers | Graham Crackers | ✓ |
| Total cost | ₱3,450.00 | ₱3,450.00 | ✓ |
| Cost per unit | ₱690.00 | ₱690.00 | ✓ |
| Revenue | ₱4,750.00 | ₱4,750.00 | ✓ |
| Profit | ₱1,300.00 | ₱1,300.00 | ✓ |
| Break-even units | 20 | 20 | ✓ |

## Conclusion

The Simplex Method solution confirms that the maximum production capacity is 5 units of Mango Graham Float, with Graham Crackers as the binding constraint. This matches exactly with the program's calculations.

Despite the more complex solution procedure, the Simplex Method yields identical results to the program's simpler approach for this single-product scenario. This validates the program's algorithm as an efficient way to solve this particular type of production planning problem.