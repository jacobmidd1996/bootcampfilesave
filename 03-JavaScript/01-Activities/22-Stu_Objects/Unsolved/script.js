const customerDrink = {
    drinkName : 'Latte',
    sugars: 2,
    isReady: true
};
console.log (`drink: ${customerDrink.drinkName}, Sugars: ${customerDrink.sugars}`)
if (customerDrink.isReady) {
    console.log("Ready for pick-up");
  } else {
    console.log("Still in order queue");
  }
