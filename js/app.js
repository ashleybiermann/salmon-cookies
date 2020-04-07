'use strict';

document.write('HellO!');

// Task: Create object literals for each shop LOCATION that outputs the following:
// 1. Min Customers per Hour
// 2. Max Customers per Hour
// 3. Average Cookies Purchased per Customer
// =============Seattle Location=========================
var seattleLocation = {
  minHourlyCustomers : 23,
  maxHourlyCustomers : 65,
  avgCookiesPerCustomer : 6.3,
  // 4. Method to generate random number of customers per hour (with Min and Max) - Objects/Math/random
  calculateRandNumOfCust : function() {
    var min = this.minHourlyCustomers;
    var max = this.maxHourlyCustomers;
    return Math.round(Math.random() * (max - min) + min);
  },

  // define another method that uses a for loop and calls calculateRandNumOfCust
  hoursOpen : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

  calculateNumCustPerHour : function(){
    // -put into an array from there // var numCustPerHour = []
    
    var numCustPerHour = [];
    for(var i = 0; i < this.hoursOpen.length; i++) {
      numCustPerHour.push(this.calculateRandNumOfCust());
    }
    return numCustPerHour;
  },
};

console.log(seattleLocation);


// 5. For each Hour of Operation (6:00AM to 8:00PM all stores), calculate and store the amount of Cookies Purchased - Use 3. and 4. || Store results in an array. Make the array be a property of the Location object it represents

// Display the values of each array as an UnOrderedLIst in the browser
// Calculate the Sum of these Hourly Totals, Display it, too
