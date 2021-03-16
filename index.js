// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// PROBLEMATIC FUNCTION //

function setBestCustomer() {
  bestCustomer = 'not bob';
}

// seemingly the end of errors... //

function overwriteBestCustomer(newBest) {
  bestCustomer = newBest;
}

const leastFavoriteCustomer = 'betty';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'amir';
}
