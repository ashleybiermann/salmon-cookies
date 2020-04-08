
'use strict';

// ======= Display the Title of the Page - Salmon Cookie Sales======
// 1 Need target
var h1Target = document.getElementById('pageTitle');
// 2 Create content
var newText = 'Salmon Cookie Sales';
// 3. add content to the target
h1Target.textContent = newText;
//==============================================================

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
  picture : 'https://upload.wikimedia.org/wikipedia/commons/2/23/Space_Needle_2011-07-04.jpg',

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
};

//groups all of the functions together, in one function call, and links them together
seattleLocation.calculateStoreInfo = function() {
  var numCustPerHour = this.calculateNumCustPerHour();

  //uses numCustPerHour to calculate how many cookies were sold each hour
  this.cookiesSoldPerHour = this.calculateCookiesSoldPerHour(numCustPerHour);

  //uses the cookies sold per hour to calc how many cookies were sold each day
  this.totalCookiesSoldPerDay = this.calculateTotalCookiesSoldPerDay(this.cookiesSoldPerHour);
};

// //======== Direction to use document.getElementById ===========
// 1 Need target
// having a targetable element in the HTML, an id
// referring to it in the JS with <document.getElementById()>
// 2 Create content
// 3 add the content to the target
//=============================End==============================

// =====Places each Hour of Operation into its own List Item =======
// for(var i = 0; i < seattleLocation.hoursOpen.length; i++){
//   // 1 Need a target - retrieving targetable id from HTML
//   var unOrderedListEl = document.getElementById('hourOfOperation');
//   // 2 creating content - document.createElement() MAKES a DOM element
//   //DOES NOT put it on the PAGE
//   var newListItemEl = document.createElement('li');
//   newListItemEl.textContent = seattleLocation.hoursOpen[i];
//   // 3 add content to target
//   //append the new li to the unordered list
//   unOrderedListEl.appendChild(newListItemEl);
// }
//=================End=========================================

//=============== Render Seatle to Page using DOM ================
seattleLocation.renderToPage = function() {
  // 1. Find target
  var targetUlEl = document.getElementById('seattleCookieStore');
  // i. src link for image
  var newImageEl = document.createElement('img');
  newImageEl.src = this.picture;
  targetUlEl.appendChild(newImageEl);
  // forloop to create list items elements for all hours open and cookies sold per hour
  for(var i = 0; i < this.hoursOpen.length; i++) {
    // 2. Create Content
    // a. li
    var newLiEl = document.createElement('li');
    // b. text
    var liText = this.hoursOpen[i] + ': ' + Math.ceil(this.cookiesSoldPerHour[i]) + ' cookies';
    newLiEl.textContent = liText;

    // 3. Add content to the target
    targetUlEl.appendChild(newLiEl);
  }
};

//======================End of render function ==================

// FUNCTION CALLS for Seattle location
seattleLocation.calculateStoreInfo();
seattleLocation.renderToPage();

// ====above here is all Seattle Location object ============

// ==== Constructor function for city loctions =============
function storeLocation (city, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer, hoursOpen, picture) {
  this.storeLocation = city;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hoursOpen = hoursOpen;
  this.picture = picture;
  this.cookiesSoldPerHour = [];
  this.totalCookiesSoldPerDay = 0;
  // this.calculateRandNumOfCust = 
}

// =============Tokyo Location=========================
//
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
  picture : 'https://lp-cms-production.imgix.net/image_browser/The%20best%20free%20things%20to%20do%20in%20Tokyo.jpg?auto=format&fit=crop&q=40&sharp=10&vib=20&ixlib=react-8.6.4&w=926',

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
};

//groups all of the functions together, in one function call, and links them together
tokyoLocation.calculateStoreInfo = function() {
  var numCustPerHour = this.calculateNumCustPerHour();

  //uses numCustPerHour to calculate how many cookies were sold each hour
  this.cookiesSoldPerHour = this.calculateCookiesSoldPerHour(numCustPerHour);

  //uses the cookies sold per hour to calc how many cookies were sold each day
  this.totalCookiesSoldPerDay = this.calculateTotalCookiesSoldPerDay(this.cookiesSoldPerHour);
};

//====================== Render to Page using DOM ================
tokyoLocation.renderToPage = function() {
  // 1. Find target
  var targetUlEl = document.getElementById('tokyoCookieStore');
  // i. src link for image
  var newImageEl = document.createElement('img');
  newImageEl.src = this.picture;
  targetUlEl.appendChild(newImageEl);
  // forloop to create list items elements for all hours open and cookies sold per hour
  for(var i = 0; i < this.hoursOpen.length; i++) {
    // 2. Create Content
    // a. li
    var newLiEl = document.createElement('li');
    // b. text
    var liText = this.hoursOpen[i] + ': ' + Math.ceil(this.cookiesSoldPerHour[i]) + ' cookies';
    newLiEl.textContent = liText;

    // 3. Add content to the target
    targetUlEl.appendChild(newLiEl);
  }
};

//======================End of render function ==================

// FUNCTION CALLS for Seattle location
tokyoLocation.calculateStoreInfo();
tokyoLocation.renderToPage();

// ====above here is all Tokyo Location object ============


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
  picture : 'https://www.burjkhalifa.ae/en/Images/BurjKhalifa-02982_new_tcm290-85702.jpg',

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
};

//groups all of the functions together, in one function call, and links them together
dubaiLocation.calculateStoreInfo = function() {
  var numCustPerHour = this.calculateNumCustPerHour();

  //uses numCustPerHour to calculate how many cookies were sold each hour
  this.cookiesSoldPerHour = this.calculateCookiesSoldPerHour(numCustPerHour);

  //uses the cookies sold per hour to calc how many cookies were sold each day
  this.totalCookiesSoldPerDay = this.calculateTotalCookiesSoldPerDay(this.cookiesSoldPerHour);
};

//====================== Render to Page using DOM ================
dubaiLocation.renderToPage = function() {
  // 1. Find target
  var targetUlEl = document.getElementById('dubaiCookieStore');
  // i. src link for image
  var newImageEl = document.createElement('img');
  newImageEl.src = this.picture;
  targetUlEl.appendChild(newImageEl);
  // forloop to create list items elements for all hours open and cookies sold per hour
  for(var i = 0; i < this.hoursOpen.length; i++) {
    // 2. Create Content
    // a. li
    var newLiEl = document.createElement('li');
    // b. text
    var liText = this.hoursOpen[i] + ': ' + Math.ceil(this.cookiesSoldPerHour[i]) + ' cookies';
    newLiEl.textContent = liText;

    // 3. Add content to the target
    targetUlEl.appendChild(newLiEl);
  }
};

//======================End of render function ==================

// FUNCTION CALLS for Seattle location
dubaiLocation.calculateStoreInfo();
dubaiLocation.renderToPage();

// ====above here is all Seattle Location object ============