// class = (ES6 features) Provides a more structured and cleaner way to
//         work with objects compared to traditional constructor functions

//         ex : static keyword, encapsulation , inheritance

// Create a class

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price before GST : ${this.price.toFixed(2)}`);
    console.log(`Price after GST : ${this.addGST().toFixed(2)}`);
  }

  addGST() {
    return this.price + (this.price * addTax) / 100;
  }
  totalCalculate() {
    return this.addGST();
  }
}

const addTax = 18; // GST Percentage
const Product1 = new Product("Shirt", 500);
const Product2 = new Product("Pant", 1200);
const Product3 = new Product("Shoes", 2500);

Product1.displayProduct();
Product2.displayProduct();
Product3.displayProduct();

const total = Product3.totalCalculate();

console.log(`Total price for ${Product3.name} After GST: ${total.toFixed(2)}`);
