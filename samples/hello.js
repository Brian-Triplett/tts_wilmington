var amountRaisedSoFar = 1000;

var newDonation = prompt("Please give me money. How much would you like to donate?");

amountRaisedSoFar = Number(newDonation) + amountRaisedSoFar;

console.log("We've raised $" + amountRaisedSoFar);