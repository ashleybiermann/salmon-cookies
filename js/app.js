
'use strict';

// Task: Create object literals for each shop LOCATION that outputs the following:
// 1. Min Customers per Hour
// 2. Max Customers per Hour
// 3. Average Cookies Purchased per Customer
// =============Seattle Location=========================
var seattleLocation = {
  name : 'Seattle',
  minHourlyCustomers : 23,
  maxHourlyCustomers : 65,
  avgCookiesPerCustomer : 6.3,
  hoursOpen : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  //STORE the amount of cookies purchased per hour in an array property of the Location object
  cookiesSoldPerHour : [],
  // per day
  totalCookiesSoldPerDay : 0,

  //TODO: Should these below methods exist outside of the seattleLocation object???

  // 4. Method to generate random number of customers per hour (with Min and Max) - Objects/Math/random
  calculateRandNumOfCust : function() {
    var min = this.minHourlyCustomers;
    var max = this.maxHourlyCustomers;
    return Math.round(Math.random() * (max - min) + min);
  },

  // define another method that uses a for loop and calls calculateRandNumOfCust
  calculateNumCustPerHour : function(){
    // -put into an array from there. var numCustPerHour = []
    var numCustPerHour = [];
    for(var i = 0; i < this.hoursOpen.length; i++) {
      numCustPerHour.push(this.calculateRandNumOfCust());
    }
    return numCustPerHour;
  },

  // NOTE: when using a forloop, the i references the index in the array.length, so that's the same array you use when adding code to the code block { }

  // 5. For each Hour of Operation (6:00AM to 8:00PM all stores), calculate the amount of Cookies Sold

  calculateCookiesSoldPerHour : function(numCustPerHour) {
    var cookiesSoldPerHour = [];
    for(var i = 0; i < numCustPerHour.length; i++) {
      cookiesSoldPerHour.push(numCustPerHour[i] * this.avgCookiesPerCustomer);
    }
    return cookiesSoldPerHour;
  },

  calculateTotalCookiesSoldPerDay : function(cookiesSoldPerHour) {
    var totalCookiesSoldPerDay = 0;
    for(var i = 0; i < cookiesSoldPerHour.length; i++) {
      totalCookiesSoldPerDay += cookiesSoldPerHour[i];
    }
    return totalCookiesSoldPerDay;
  },

  //groups all of the functions together, in one function call, and links them together
  calculateStoreInfo : function() {
    var numCustPerHour = this.calculateNumCustPerHour();

    //uses numCustPerHour to calculate how many cookies were sold each hour
    this.cookiesSoldPerHour = this.calculateCookiesSoldPerHour(numCustPerHour);

    //uses the cookies sold per hour to calc how many cookies were sold each day
    this.totalCookiesSoldPerDay = this.calculateTotalCookiesSoldPerDay(this.cookiesSoldPerHour);
  },
};
// ====================above here is all Seattle Location object =================

// Functions to write store name, hours, and cookies per day sold to document
// TODO: This is still seattle location specific - make dynamic
var renderStoreInfoToPage = function() {
  document.write(seattleLocation.name);
  // Display the values of each array as an UnOrderedLIst in the browser
  for(var i = 0; i < seattleLocation.hoursOpen.length; i++) {
    document.write('<ul>' + seattleLocation.hoursOpen[i] + ': ' + seattleLocation.cookiesSoldPerHour[i] + ' cookies </ul>');
  }
  // Calculate the Sum of these Hourly Totals, Display it, too
  document.write('<ul> Total: ' + seattleLocation.totalCookiesSoldPerDay + 'cookies </ul>');
};

// FUNCTION CALLS for Seattle location
seattleLocation.calculateStoreInfo();
renderStoreInfoToPage();

// =============Tokyo Location=========================
var tokyoLocation = {
  name : 'Tokyo',
  minHourlyCustomers : 3,
  maxHourlyCustomers : 24,
  avgCookiesPerCustomer : 1.2,
  hoursOpen : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  //STORE the amount of cookies purchased per hour in an array property of the Location object
  cookiesSoldPerHour : [],
  // per day
  totalCookiesSoldPerDay : 0,

  //TODO: Should these below methods exist outside of the Tokyo Location object???

  // 4. Method to generate random number of customers per hour (with Min and Max) - Objects/Math/random
  calculateRandNumOfCust : function() {
    var min = this.minHourlyCustomers;
    var max = this.maxHourlyCustomers;
    return Math.round(Math.random() * (max - min) + min);
  },

  // define another method that uses a for loop and calls calculateRandNumOfCust
  calculateNumCustPerHour : function(){
    // -put into an array from there. var numCustPerHour = []
    var numCustPerHour = [];
    for(var i = 0; i < this.hoursOpen.length; i++) {
      numCustPerHour.push(this.calculateRandNumOfCust());
    }
    return numCustPerHour;
  },

  // NOTE: when using a forloop, the i references the index in the array.length, so that's the same array you use when adding code to the code block { }

  // 5. For each Hour of Operation (6:00AM to 8:00PM all stores), calculate the amount of Cookies Sold

  calculateCookiesSoldPerHour : function(numCustPerHour) {
    var cookiesSoldPerHour = [];
    for(var i = 0; i < numCustPerHour.length; i++) {
      cookiesSoldPerHour.push(numCustPerHour[i] * this.avgCookiesPerCustomer);
    }
    return cookiesSoldPerHour;
  },

  calculateTotalCookiesSoldPerDay : function(cookiesSoldPerHour) {
    var totalCookiesSoldPerDay = 0;
    for(var i = 0; i < cookiesSoldPerHour.length; i++) {
      totalCookiesSoldPerDay += cookiesSoldPerHour[i];
    }
    return totalCookiesSoldPerDay;
  },

  //groups all of the functions together, in one function call, and links them together
  calculateStoreInfo : function() {
    var numCustPerHour = this.calculateNumCustPerHour();

    //uses numCustPerHour to calculate how many cookies were sold each hour
    this.cookiesSoldPerHour = this.calculateCookiesSoldPerHour(numCustPerHour);

    //uses the cookies sold per hour to calc how many cookies were sold each day
    this.totalCookiesSoldPerDay = this.calculateTotalCookiesSoldPerDay(this.cookiesSoldPerHour);
  },
};
// ================end Tokyo location object====================

// Functions to write store name, hours, and cookies per day sold to document
// TODO: This is still Tokyo location specific - make dynamic
var renderStoreInfoToPage = function() {
  document.write(tokyoLocation.name);
  // Display the values of each array as an UnOrderedLIst in the browser
  for(var i = 0; i < tokyoLocation.hoursOpen.length; i++) {
    document.write('<ul>' + tokyoLocation.hoursOpen[i] + ': ' + tokyoLocation.cookiesSoldPerHour[i] + ' cookies </ul>');
  }
  // Calculate the Sum of these Hourly Totals, Display it, too
  document.write('<ul> Total: ' + tokyoLocation.totalCookiesSoldPerDay + 'cookies </ul>');
};

// FUNCTION CALLS for Tokyo location
tokyoLocation.calculateStoreInfo();
renderStoreInfoToPage();

// =============Dubai Location=========================
var dubaiLocation = {
  name : 'Dubai',
  minHourlyCustomers : 11,
  maxHourlyCustomers : 38,
  avgCookiesPerCustomer : 3.7,
  hoursOpen : ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  //STORE the amount of cookies purchased per hour in an array property of the Location object
  cookiesSoldPerHour : [],
  // per day
  totalCookiesSoldPerDay : 0,

  //TODO: Should these below methods exist outside of the Dubai Location object???

  // 4. Method to generate random number of customers per hour (with Min and Max) - Objects/Math/random
  calculateRandNumOfCust : function() {
    var min = this.minHourlyCustomers;
    var max = this.maxHourlyCustomers;
    return Math.round(Math.random() * (max - min) + min);
  },

  // define another method that uses a for loop and calls calculateRandNumOfCust
  calculateNumCustPerHour : function(){
    // -put into an array from there. var numCustPerHour = []
    var numCustPerHour = [];
    for(var i = 0; i < this.hoursOpen.length; i++) {
      numCustPerHour.push(this.calculateRandNumOfCust());
    }
    return numCustPerHour;
  },

  // NOTE: when using a forloop, the i references the index in the array.length, so that's the same array you use when adding code to the code block { }

  // 5. For each Hour of Operation (6:00AM to 8:00PM all stores), calculate the amount of Cookies Sold

  calculateCookiesSoldPerHour : function(numCustPerHour) {
    var cookiesSoldPerHour = [];
    for(var i = 0; i < numCustPerHour.length; i++) {
      cookiesSoldPerHour.push(numCustPerHour[i] * this.avgCookiesPerCustomer);
    }
    return cookiesSoldPerHour;
  },

  calculateTotalCookiesSoldPerDay : function(cookiesSoldPerHour) {
    var totalCookiesSoldPerDay = 0;
    for(var i = 0; i < cookiesSoldPerHour.length; i++) {
      totalCookiesSoldPerDay += cookiesSoldPerHour[i];
    }
    return totalCookiesSoldPerDay;
  },

  //groups all of the functions together, in one function call, and links them together
  calculateStoreInfo : function() {
    var numCustPerHour = this.calculateNumCustPerHour();

    //uses numCustPerHour to calculate how many cookies were sold each hour
    this.cookiesSoldPerHour = this.calculateCookiesSoldPerHour(numCustPerHour);

    //uses the cookies sold per hour to calc how many cookies were sold each day
    this.totalCookiesSoldPerDay = this.calculateTotalCookiesSoldPerDay(this.cookiesSoldPerHour);
  },
};
// ================end Dubai location object====================

// Functions to write store name, hours, and cookies per day sold to document
// TODO: This is still Dubai location specific - make dynamic
renderStoreInfoToPage = function() {
  document.write(dubaiLocation.name);
  // Display the values of each array as an UnOrderedLIst in the browser
  for(var i = 0; i < dubaiLocation.hoursOpen.length; i++) {
    document.write('<ul>' + dubaiLocation.hoursOpen[i] + ': ' + dubaiLocation.cookiesSoldPerHour[i] + ' cookies </ul>');
  }
  // Calculate the Sum of these Hourly Totals, Display it, too
  document.write('<ul> Total: ' + dubaiLocation.totalCookiesSoldPerDay + 'cookies </ul>');
};

// FUNCTION CALLS for Tokyo location
dubaiLocation.calculateStoreInfo();
renderStoreInfoToPage();



// TESTING OUT BRANCH
