//Task 1 and 2:

let shoppingList = [
    { name: "Apples", quantity: 3, purchased: false, pricePerUnit: 1.5 },
    { name: "Bananas", quantity: 1, purchased: true, pricePerUnit: 0.5 },
    { name: "Pears", quantity: 2, purchased: false, pricePerUnit: 2.0 },
    { name: "Watermelon", quantity: 1, purchased: true, pricePerUnit: 3.0 },
  ];
  
  function displayShoppingList(list) {
    const notPurchasedItems = list.filter(item => !item.purchased);
    
    const purchasedItems = list.filter(item => item.purchased);
    
    const finalList = [...notPurchasedItems, ...purchasedItems];
    
    finalList.forEach(item => {
      console.log(`${item.name} - Quantity: ${item.quantity}, Price Per Unit: ${item.pricePerUnit}, Amount: ${item.quantity * item.pricePerUnit}, Purchased: ${item.purchased}`);
    });
  }
  
  function purchaseProduct(list, productName) {
    const product = list.find(item => item.name === productName);

    if (product) {
      product.purchased = true;
      console.log(`Product '${productName}' has been purchased.`);
    } else {
      console.log(`Product '${productName}' not found in the list.`);
    }
  }
  
  function removeProduct(list, productName) {
    const updatedList = list.filter(item => item.name !== productName);
    
    if (updatedList.length === list.length) {
      console.log(`Product '${productName}' not found in the list.`);
    } else {
      console.log(`Product '${productName}' has been removed from the list.`);
      shoppingList = updatedList;
    }
  }
  
  function addPurchase(list, productName, quantity, pricePerUnit) {
    const product = list.find(item => item.name === productName);
    
    if (product) {
      product.quantity += quantity;
      product.amount = product.quantity * pricePerUnit;
      console.log(`Purchase added for product '${productName}'. New quantity: ${product.quantity}, New amount: ${product.amount}.`);
    } else {
      const newPurchase = {
        name: productName,
        quantity: quantity,
        purchased: false,
        pricePerUnit: pricePerUnit,
        amount: quantity * pricePerUnit,
      };
      list.push(newPurchase);
      console.log(`New purchase added for product '${productName}'. Quantity: ${quantity}, Amount: ${quantity * pricePerUnit}.`);
    }
  }

displayShoppingList(shoppingList);

purchaseProduct(shoppingList, "Bread");

displayShoppingList(shoppingList);

removeProduct(shoppingList, "Watermelon");
removeProduct(shoppingList, "Pears");

displayShoppingList(shoppingList);

addPurchase(shoppingList, "Apples", 2, 1.5);

displayShoppingList(shoppingList);