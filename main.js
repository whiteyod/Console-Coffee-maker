// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
let input = require('sync-input')
let waterAmount = 400;
let milkAmount = 540;
let beansAmount = 120;
let disposableCups = 9;
let moneyAmount = 550;
let buyAction;
let mainAction;
let fillWater;
let fillMilk;
let fillBeans;
let fillCups;

function remaining() {
console.log(`The coffee machine has:
${waterAmount} ml of water
${milkAmount} ml of milk
${beansAmount} g of coffee beans
${disposableCups} disposable cups
$${moneyAmount} of money`);
}
function makeEspresso() {
  waterAmount = waterAmount - 250;
  beansAmount = beansAmount - 16;
  disposableCups = disposableCups - 1;
  moneyAmount = moneyAmount + 4;
  console.log(`I have enough resources, making you an Espresso!
  Have a nice day!`);
  mainMenu();
}
function makeLatte() {
  waterAmount = waterAmount - 350;
  milkAmount = milkAmount - 75;
  beansAmount = beansAmount - 20;
  disposableCups = disposableCups - 1;
  moneyAmount = moneyAmount + 7;
  console.log(`I have enough resources, making you a Latte!
  Have a nice day!`);
  mainMenu();
}
function makeCappuccino() {
  waterAmount = waterAmount - 200;
  milkAmount = milkAmount - 100;
  beansAmount = beansAmount - 12;
  disposableCups = disposableCups - 1;
  moneyAmount = moneyAmount + 6;
  console.log(`I have enough resources, making you a Cappuccino!
  Have a nice day!`);
  mainMenu();
}
function makeHotMilk() {
  milkAmount = milkAmount - 250;
  console.log(`I have enough resources, making you a Hot Milk!
  Have a nice day!`)
}
function fillResources() {
  fillWater = input(`Write how many ml of water you want to add:`);
  fillMilk = input(`Write how many ml of milk you want to add:`);
  fillBeans = input(`Write how many grams of coffee beans you want to add:`);
  fillCups = input(`Write how many disposable coffee cups you want to add:`);
  waterAmount = waterAmount + Number(fillWater);
  milkAmount = milkAmount + Number(fillMilk);
  beansAmount = beansAmount + Number(fillBeans);
  disposableCups = disposableCups + Number(fillCups);
  mainMenu()
}

function mainMenu() {
  mainAction = input(`Write action (buy, fill, take, remaining, exit):`);
  if (mainAction == `buy`) {
    buying()
  }
  if (mainAction == `fill`) {
    fillResources()
  }
  if (mainAction == `take`) {
    console.log(`I gave you $${moneyAmount}`);
    moneyAmount = moneyAmount - moneyAmount;
    mainMenu();
  }
  if (mainAction == `remaining`) {
    remaining();
    mainMenu();
  }
}
mainMenu()
function buying() {
  buyAction = input(`What do you want to buy? 
  1 - espresso, 2 - latte, 3 - cappuccino, 4 - hot milk, back - to main menu:`);
  switch (buyAction) {
    case 1:
      if (waterAmount < 250) {
        console.log(`Sorry, not enough water!`);
        mainMenu();
      }
      if (beansAmount < 16) {
        console.log(`Sorry, not enough beans!`);
        mainMenu();
      }
      if (disposableCups < 1) {
        console.log(`Sorry, not enough disposable cups!`);
        mainMenu();
      } else makeEspresso();
      break;

    case 2:
      if (waterAmount < 350) {
        console.log(`Sorry, not enough water!`);
        mainMenu();
      }
      if (milkAmount < 75) {
        console.log(`Sorry, not enough milk!`);
      }
      if (beansAmount < 20) {
        console.log(`Sorry, not enough beans!`);
        mainMenu();
      }
      if (disposableCups < 1) {
        console.log(`Sorry, not enough disposable cups!`);
        mainMenu();
      } else makeLatte();
      break;

    case 3:
      if (waterAmount < 200) {
        console.log(`Sorry, not enough water!`);
        mainMenu();
      }
      if (milkAmount < 100) {
        console.log(`Sorry, not enough milk!`);
      }
      if (beansAmount < 12) {
        console.log(`Sorry, not enough beans!`);
        mainMenu();
      }
      if (disposableCups < 1) {
        console.log(`Sorry, not enough disposable cups!`);
        mainMenu();
      } else makeCappuccino();
      break;

    case 4:
      if (milkAmount < 250) {
        console.log(`Sorry, not enough milk!`);
      } else makeHotMilk()
      break;

    case `back`:
      mainMenu()
  }

  }

