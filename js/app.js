
'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var totalHourlyCookiesAll = new Array(hoursOpen.length).fill(0);

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
  this.storeLocation = city;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hoursOpen = hoursOpen;
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

  var newRow = document.createElement('tr');
  var storeLocationCell = document.createElement('td');
  storeLocationCell.textContent = this.storeLocation;
  newRow.appendChild(storeLocationCell);

  for(var i = 0; i < this.hoursOpen.length; i++) {
    var newCell = document.createElement('td');
    newCell.textContent = Math.ceil(this.cookiesSoldPerHour[i]);
    newRow.appendChild(newCell);
  }
  var targetTable = document.getElementById('salesTable');
  targetTable.appendChild(newRow);
};

// //total cookies per hour row
var addCookieCountToTotal = function(cookiesSoldPerHour){
  for(var i = 0; i < cookiesSoldPerHour.length; i++) {
    totalHourlyCookiesAll[i] += cookiesSoldPerHour[i];
  }
};

// Totals ALL stores sales per day
var showAllStoreTotals = function(){
  var targetTableEl = document.getElementById('salesTable');
  var newRowEl = document.createElement('tr');
  var newText = 'total sales for all stores: ' + totalSalesAllStores;
  newRowEl.textContent = newText;
  newRowEl.id = 'totalSales';
  targetTableEl.appendChild(newRowEl);
};

var removeTotalSales = function(){
  var toDelete = document.getElementById('totalSales');
  toDelete.remove();
};


//writes a table row
var writeTableRow = function(rowData, rowId) {
  var newRow = document.createElement('tr');
  newRow.id = rowId;
  for(var i = 0; i < rowData.length; i++) {
    var newCell = document.createElement('td');
    newCell.textContent = rowData[i];
    newRow.appendChild(newCell);
  }
  var salesTable = document.getElementById('salesTable');
  salesTable.appendChild(newRow);
};

//makes a copy of hoursOpen array for table header
var tableHeaderData = hoursOpen.slice();
tableHeaderData.unshift('');

writeTableRow(tableHeaderData);
// FUNCTION CALLS to render store locations ====

seattleLocation.renderToPage();
tokyoLocation.renderToPage();
dubaiLocation.renderToPage();
parisLocation.renderToPage();
limaLocation.renderToPage();

// adding hourly sales to total
addCookieCountToTotal(seattleLocation.cookiesSoldPerHour);
addCookieCountToTotal(tokyoLocation.cookiesSoldPerHour);
addCookieCountToTotal(dubaiLocation.cookiesSoldPerHour);
addCookieCountToTotal(parisLocation.cookiesSoldPerHour);
addCookieCountToTotal(limaLocation.cookiesSoldPerHour);

// write total hourly sales to footer
var showTotalHourlySales = function(){
  var tableFooterData = totalHourlyCookiesAll.slice();

  for(var i = 0; i < tableFooterData.length; i++) {
    tableFooterData[i] = Math.ceil(tableFooterData[i]);
  }

  tableFooterData.unshift('Total: ');
  var totalsRow = document.getElementById('totalsRow');
  if (totalsRow) {
    totalsRow.remove();
  }
  writeTableRow(tableFooterData, 'totalsRow');
};

showTotalHourlySales();
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
  // var picture = storeSubmitClicked.target.picture.value;

  // create new store with user's information from form
  var userStore = new Store(city, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer);

  userStore.renderToPage();

  showTotalHourlySales();

  //puts total all stores for all day on the bottom
  totalSalesAllStores = totalSalesAllStores + Math.ceil(userStore.totalCookiesSoldPerDay);
  removeTotalSales();
  showAllStoreTotals();
}

// 2 Add event listener
storeSubmitClicked.addEventListener('submit', handleStoreForm);

//==============
var totalSalesAllStores = Math.ceil(seattleLocation.totalCookiesSoldPerDay + tokyoLocation.totalCookiesSoldPerDay + dubaiLocation.totalCookiesSoldPerDay + parisLocation.totalCookiesSoldPerDay + limaLocation.totalCookiesSoldPerDay);

//=== Function Call for Sales Totals
showAllStoreTotals();
//==============
