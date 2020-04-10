
'use strict';

// ======= Display the Title of the Page - Salmon Cookie Sales======
// 1 Need target
var h1Target = document.getElementById('pageTitle');
// 2 Create content
var newText = 'Salmon Cookie Sales';
// 3. add content to the target
h1Target.textContent = newText;
//==============================================================

// Uses constructor 'Store' to create a new instances of Store for Seattle, Tokyo, Dubai, Paris, Lima

var seattleLocation = new Store('Seattle', 23, 65, 6.3, 'https://upload.wikimedia.org/wikipedia/commons/2/23/Space_Needle_2011-07-04.jpg');

var tokyoLocation = new Store('Tokyo', 3, 24, 1.2,'https://www.gotokyo.org/shared/site_gotokyo/images/visual_img.jpg.pagespeed.ce.F7FElN_QHa.jpg');

var dubaiLocation = new Store('Dubai', 11, 24, 3.7, 'http://www.travelstart.co.za/blog/wp-content/uploads/2018/05/burjkhalifa.jpg');

var parisLocation = new Store('Paris', 20, 38, 2.3, 'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateParis_Heroshutterstock_112137761.jpg');

var limaLocation = new Store('Lima', 2, 16, 4.6, 'https://i.insider.com/570cb304dd08959f7d8b465e?width=1100&format=jpeg&auto=webp');

// ==== Constructor function for city loctions =============

function Store (city, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer, picture) {
  this.id = city;
  this.storeLocation = city;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.picture = picture;
  this.cookiesSoldPerHour = [];
  this.totalCookiesSoldPerDay = 0;
}

// Methods attached to object
Store.prototype.calculateRandNumOfCust = function(){
  var min = this.minHourlyCustomers;
  var max = this.maxHourlyCustomers;

  // console.log('generates random number of customers');
  return Math.round(Math.random() * (max - min) + min);
};

Store.prototype.calculateNumCustPerHour = function(){
  // -put into an array from there. var numCustPerHour = []
  var numCustPerHour = [];
  for(var i = 0; i < this.hoursOpen.length; i++) {
    numCustPerHour.push(this.calculateRandNumOfCust());
  }
  // console.log('calculates number of customers per hour: ' + numCustPerHour);
  return numCustPerHour;
};

Store.prototype.calculateCookiesSoldPerHour = function(numCustPerHour){
  var cookiesSoldPerHour = [];
  for(var i = 0; i < numCustPerHour.length; i++) {
    cookiesSoldPerHour.push(numCustPerHour[i] * this.avgCookiesPerCustomer);
  }
  // console.log('calculates cookies sold per hour: ' + cookiesSoldPerHour);
  return cookiesSoldPerHour;
};

Store.prototype.calculateTotalCookiesSoldPerDay = function(cookiesSoldPerHour) {
  var totalCookiesSoldPerDay = 0;
  for(var i = 0; i < cookiesSoldPerHour.length; i++) {
    totalCookiesSoldPerDay += cookiesSoldPerHour[i];
  }
  // console.log('calculates total cookies sold per day: ' + totalCookiesSoldPerDay);
  return totalCookiesSoldPerDay;
};

Store.prototype.calculateStoreInfo = function(){
  // calls Rand, NumCust, CookiesperHour, totalCookies functions
  var numCustPerHour = this.calculateNumCustPerHour();

  //uses numCustPerHour to calculate how many cookies were sold each hour
  this.cookiesSoldPerHour = this.calculateCookiesSoldPerHour(numCustPerHour);

  //uses the cookies sold per hour to calc how many cookies were sold each day
  this.totalCookiesSoldPerDay = this.calculateTotalCookiesSoldPerDay(this.cookiesSoldPerHour);
  // console.log('calculates store info, by calling RandNum, NumCust, CookiesPerHour, TotalCookies');
};

Store.prototype.renderToPage = function(){
  // Makes the call that calls some other functions to run
  this.calculateStoreInfo();
  // renders to page - only one <ul> and many <li> in it
  // 1. Find target
  var targetUlEl = document.getElementById(this.id);
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
  // console.log('renders to page');
};

var showAllStoreTotals = function(){
  var targetUlEl = document.getElementById('Seattle');
  var newLiEl = document.createElement('li');
  var newText = 'total sales for all stores: ' + totalSalesAllStores;
  newLiEl.textContent = newText;
  newLiEl.id = 'deleteLast';
  targetUlEl.appendChild(newLiEl);
};

var removeFinalRow = function(){
  var toDelete = document.getElementById('deleteLast');
  toDelete.remove();
};

// FUNCTION CALLS to render store locations ====
seattleLocation.renderToPage();
tokyoLocation.renderToPage();
dubaiLocation.renderToPage();
parisLocation.renderToPage();
limaLocation.renderToPage();

// ===Lab09 Form, and rendering it to page =======
// 1 Find a target
var storeSubmitClicked = document.getElementById('cookieStoreForm');

// 3 Attach callback function = renders new store to page
function handleStoreForm(storeSubmitClicked){
  storeSubmitClicked.preventDefault();
  var city = storeSubmitClicked.target.city.value;
  var minHourlyCustomers = storeSubmitClicked.target.minHourlyCustomers.value;
  var maxHourlyCustomers = storeSubmitClicked.target.maxHourlyCustomers.value;
  var avgCookiesPerCustomer = storeSubmitClicked.target.avgCookiesPerCustomer.value;
  var picture = storeSubmitClicked.target.picture.value;

  // create new store with user's information from form
  var userStore = new Store(city, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer, picture);

  userStore.renderToPage();

  totalSalesAllStores = totalSalesAllStores + Math.ceil(userStore.totalCookiesSoldPerDay);
  removeFinalRow();
  showAllStoreTotals();
}

// 2 Add event listener
storeSubmitClicked.addEventListener('submit', handleStoreForm);

//==============
var totalSalesAllStores = Math.ceil(seattleLocation.totalCookiesSoldPerDay + tokyoLocation.totalCookiesSoldPerDay + dubaiLocation.totalCookiesSoldPerDay + parisLocation.totalCookiesSoldPerDay + limaLocation.totalCookiesSoldPerDay);

//=== Function Call for Sales Totals
showAllStoreTotals();
//==============

//TODO: 3) Then - place data in table using comment instructions from line 78
