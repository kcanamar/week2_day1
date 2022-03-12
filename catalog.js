// sku: price
const catalog = {
    '1234-jdje-1203': 5.99,
    '1334-oeur-1203': 6.99,
    '1233-5830-fnur': 10.00,
    '1244-n8tu-a3jm': 2.99,
  };
  
  let name = prompt("What is your name?") // prompt is a function, return the text input from the prompt
  console.log(name)
  
  let sku;
  while (sku !== "quit") {
    sku = prompt("Enter SKU or Enter 'quit' to Exit: ");
  
    if (sku in catalog) {
      let price = catalog[sku];   
      // alert("The price of the " + sku + " is " + price) - concatenation
      alert(`The price of the ${sku} is ${price}`);
      // ^^template literal string or string interpolation - much clearer then the above concatenation syntax
     } else if (sku !== "quit") {
      alert(`Invalid SKU - try again`)
     }
  };
  /// comment
  ///////////////////////
  // Deleting or Removing objects
  ///////////////////////
  
  delete catalog['1244-n8tu-a3jm']
  
  
  ///////////////////////
  // Looping through and Object
  ///////////////////////
  
  for (let key in catalog) {
    //console.log(key);
    //console.log(obj.key); // cannot use .dotNotaion when trying to access a key using a for in loop 
    console.log(catalog[key]);
    //console.log(`${key}: ${catalog[key]}`);
  ;}
  
  
  console.log(catalog)