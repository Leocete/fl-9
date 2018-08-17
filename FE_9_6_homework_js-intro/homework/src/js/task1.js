let price = prompt('Please, enter the price:');
let discount = prompt('Please, enter the discount amount:');

function discountPrice(price, discount) {
  return [price, discount].every(num => num > 0)
  ? price - price * discount / 100
  : null
}

let newPrice = discountPrice(price, discount);
let savedMoney = price - newPrice;

let answer = newPrice === null
? 'Invalid Data'
: `New price is: ${newPrice}
Price without discount: ${price}
Discount: ${discount}%'
Price with discount:: ${newPrice}
Saved: ${savedMoney}
`;

console.log(answer);