'use strict';



var Store = function(storeName, storeLocation, minCookiesPerCustomer, maxCookiesPerCustomer, avgCookiesPurchased){
  this.name = storeName;
  this.location = storeLocation;
  this.hours = ['','6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ', '1pm: ', '2pm: ','3pm: ','4pm: ','5pm: ','6pm: ', '7pm: ','8pm: '];
  this.minCookies = minCookiesPerCustomer;
  this.maxCookies = maxCookiesPerCustomer;
  this.avgCookiesPurchased = avgCookiesPurchased;
  this.cookiesArray = [];
  this.dailyTotalsArray = [];
};

//calculates random customers per hour at each store
Store.prototype.customersPerHour = function(){
  return Math.floor(Math.random() * (this.maxCookies - this.minCookies) + this.minCookies);
};

//calculates the avg number of cookies sold in the store per hour
Store.prototype.cookiesPerHour = function(){
  return this.avgCookiesPurchased * this.customersPerHour();
};


Store.prototype.dailyProjection = function(){
  this.total = 0;
  var hourlyCookies;
  for(var i = 0; i < (this.hours.length - 1); i++){  //loops through cookies sold per hour and storing it in the empty array called cookiesArray
    hourlyCookies = this.cookiesPerHour();
    this.cookiesArray.push(hourlyCookies);
    this.total = this.total + hourlyCookies;
    console.log('total', this.total);
    console.log(hourlyCookies);
  }

};

//fetches table element in html, creates text for new node, and appends new node onto table element for store name.
Store.prototype.renderTableData = function(){
  var tableElement = document.getElementById('dailyProjections');
  var tableDataRow = document.createElement('tr');
  var storeNameRow = document.createElement('th');
  storeNameRow.textContent = this.name;
  tableElement.appendChild(tableDataRow);
  tableDataRow.appendChild(storeNameRow);

  //incorporates store sales data into table
  for(var i = 0; i < this.cookiesArray.length; i++){
    var newTableData = document.createElement('td');
    newTableData.textContent = parseInt(this.cookiesArray[i]); //surround something with parseInt it rounds the number up.
    tableDataRow.appendChild(newTableData);
  };
  var storeTotalsColumn = document.createElement ('td');
  storeTotalsColumn.textContent = parseInt(this.total);
  tableDataRow.appendChild(storeTotalsColumn);
};

//using keyword NEW to construct new objects.
var pike = new Store ('Pike', '1st and Pike', 23, 65, 6.3);
console.log(pike);
var seatac = new Store ('SeaTac', 'SeaTac Airport', 3, 24, 1.2);
console.log(seatac);
var seattleCenter = new Store ('Seattle Center', 'Seattle Center', 11, 38, 3.7);
console.log(seattleCenter);
var capitolHill = new Store ('Capitol Hill', 'Capitol Hill', 20, 38, 2.3);
console.log (capitolHill);
var alki = new Store ('Alki', 'Alki', 2, 16, 4.6);
console.log (alki);

var userForm  = document.getElementById('new_store');
userForm.addEventListener('submit',submitHandler);
this.newStoreFormArray = [];

function submitHandler(event){
  event.preventDefault();
  var storeName = event.target.new_storeName.value;
  var minCookiesPerCustomer = parseInt(event.target.new_minCookiesPerCustomer.value);
  var maxCookiesPerCustomer = parseInt(event.target.max_CookiesPerCustomer.value);
  var avgCookiesPurchased = parseInt(event.target.new_avgCookiesPerCustomer.value);
  console.log(storeName);
  console.log(minCookiesPerCustomer);
  console.log(maxCookiesPerCustomer);
  console.log(avgCookiesPurchased);

  var newStoreInstance = new Store(storeName, storeName, minCookiesPerCustomer, maxCookiesPerCustomer, avgCookiesPurchased) ;
  newStoreInstance.dailyProjection(); //you must call the function in the for loop so it runs with every new instance
  newStoreInstance.renderTableData();
  console.log(newStoreInstance);
};

//Calls the constructor function
pike.dailyProjection();
seatac.dailyProjection();
seattleCenter.dailyProjection();
capitolHill.dailyProjection();
alki.dailyProjection();




//creats new row in table to insert cookies per hour header
var hours = ['','6am ','7am: ','8am ','9am ','10am: ','11am: ','12pm ', '1pm ', '2pm ','3pm ','4pm ','5pm ','6pm ', '7pm ','8pm ', 'Daily Totals'];
var tableElement = document.getElementById('dailyProjections');

var renderHeader = function(){
  var headerRow = document.createElement('tr');
  tableElement.appendChild(headerRow);
  for(var i = 0; i < hours.length; i++){
    var headerTh = document.createElement('th');
    headerTh.textContent = hours[i]; //surround something with parseInt it rounds the number up.
    headerRow.appendChild(headerTh);
  }
};
renderHeader();
pike.renderTableData();
seatac.renderTableData();
seattleCenter.renderTableData();
capitolHill.renderTableData();
alki.renderTableData();

var footerHours = ['Daily Total','',' ',' ',' ',' ',' ',' ', ' ', ' ',' ','','',' ', ' ',' ', ''];
var renderFooter = function(){
  var footerRow = document.createElement('tr');
  tableElement.appendChild(footerRow);
  for(var i = 0; i < footerHours.length; i++){
    var footerTh = document.createElement('th');
    footerTh.textContent = footerHours[i]; //surround something with parseInt it rounds the number up.
    footerRow.appendChild(footerTh);
  }
};
renderFooter();
