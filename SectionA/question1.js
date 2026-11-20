// Arithmetic & Modulu Operations

let price = 45
let quantity = 4

//Total Cost
totalCost = price * quantity

console.log("************************");
console.log(`Total Cost: ${totalCost}\n`);

//Discounted Cost
discountedCost = totalCost - 15

console.log("************************");
console.log(`Discounted Cost: ${discountedCost}\n`);

// Cost Split Equally Among Three Friends
let numberOfFriends = 3
threeEqualCostSplit = totalCost / numberOfFriends

console.log("************************");
console.log(`Cost Split Per Friend: ${threeEqualCostSplit}\n`);

// Leftover Amount When Total Cost is divided by 7
leftOverAmount = totalCost % 7

console.log("************************");
console.log(`Left Over Amount: ${leftOverAmount}`);
