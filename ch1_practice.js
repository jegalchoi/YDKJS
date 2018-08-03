const TAX_RATE = 0.09;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 350;
var bankAccountBalance = prompt("How much money do you have to spend?");
var amount = PHONE_PRICE + (PHONE_PRICE * 0.09) + ACCESSORY_PRICE;
var total = 0;


function prices() {
  console.log("Phone costs $" + PHONE_PRICE);
  console.log("Accessory costs $" + ACCESSORY_PRICE);
  };

function totalPurchasePrice() {
    while(true) {
      if((total + amount < SPENDING_THRESHOLD) === false) {
        console.log("Your cannot afford to buy more phones.");
        break;
      }
      total = total + amount
      console.log("Your total for today comes out to $" + total.toFixed(2));

    }
    var remainingAccountBalance = bankAccountBalance - total.toFixed(2);
    console.log("You have $" + remainingAccountBalance.toFixed(2) + " remaining in your bank account.");
};
