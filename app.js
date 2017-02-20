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
  return Math.floor(this.avgCookiesPurchased * this.customersPerHour());
};

Store.prototype.dailyProjection = function(){
  this.total = 0;
  var hourlyCookies;
  for(var i = 0; i < (this.hours.length - 1); i++){  //loops through cookies sold per hour and storing it in the empty array called cookiesArray
    hourlyCookies = this.cookiesPerHour();
    this.cookiesArray.push(hourlyCookies);
    this.total = this.total + hourlyCookies;
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

function submitHandler(event){
  event.preventDefault();
  var storeName = event.target.new_storeName.value;
  var minCookiesPerCustomer = parseInt(event.target.new_minCookiesPerCustomer.value);
  var maxCookiesPerCustomer = parseInt(event.target.max_CookiesPerCustomer.value);
  var avgCookiesPurchased = parseInt(event.target.new_avgCookiesPerCustomer.value);

  var newStoreInstance = new Store(storeName, storeName, minCookiesPerCustomer, maxCookiesPerCustomer, avgCookiesPurchased) ;
  newStoreInstance.dailyProjection(); //you must call the function in the for loop so it runs with every new instance
  newStoreInstance.renderTableData();
};

var renderHeader = function(){
  var headerRow = document.createElement('tr');
  tableElement.appendChild(headerRow);
  for(var i = 0; i < hours.length; i++){
    var headerTh = document.createElement('th');
    headerTh.textContent = hours[i]; //surround something with parseInt it rounds the number up.
    headerRow.appendChild(headerTh);
  }
};

var renderFooter = function(){
  var hourlyProjectionsArray = hourlyProjections();
  var footerRow = document.createElement('tr');
  tableElement.appendChild(footerRow);

  var footerTh = document.createElement('th');
  footerTh.textContent = 'Hourly Total';
  footerRow.appendChild(footerTh);

  var totalOfTotals = 0;

  for(var i = 0; i < hourlyProjectionsArray.length; i++){
    footerTh = document.createElement('th');
    footerTh.textContent = hourlyProjectionsArray[i];
    footerRow.appendChild(footerTh);

    totalOfTotals += hourlyProjectionsArray[i];
  }

  footerTh = document.createElement('th');
  footerTh.textContent = totalOfTotals;
  footerRow.appendChild(footerTh);
};

var hourlyProjections = function(){
  var hourlyProjectionsArray = [];

  for(var i = 0; i < pike.cookiesArray.length; i++){
    var hourlyTotal = 0;
    for (var j = 0; j < storeLocations.length; j++){
      hourlyTotal += storeLocations[j].cookiesArray[i];
    }
    hourlyProjectionsArray.push(hourlyTotal);
  }

  return hourlyProjectionsArray;
};



//using keyword NEW to construct new objects.
var pike = new Store ('Pike', '1st and Pike', 23, 65, 6.3);
var seatac = new Store ('SeaTac', 'SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store ('Seattle Center', 'Seattle Center', 11, 38, 3.7);
var capitolHill = new Store ('Capitol Hill', 'Capitol Hill', 20, 38, 2.3);
var alki = new Store ('Alki', 'Alki', 2, 16, 4.6);
var storeLocations = [pike, seatac, seattleCenter, capitolHill, alki];

var userForm  = document.getElementById('new_store');
userForm.addEventListener('submit',submitHandler);
this.newStoreFormArray = [];

//Calls the constructor function
pike.dailyProjection();
seatac.dailyProjection();
seattleCenter.dailyProjection();
capitolHill.dailyProjection();
alki.dailyProjection();




//creats new row in table to insert cookies per hour header
var hours = ['','6am ','7am ','8am ','9am ','10am ','11am ','12pm ', '1pm ', '2pm ','3pm ','4pm ','5pm ','6pm ', '7pm ','8pm ', 'Daily Totals'];
var tableElement = document.getElementById('dailyProjections');

renderHeader();

pike.renderTableData();
seatac.renderTableData();
seattleCenter.renderTableData();
capitolHill.renderTableData();
alki.renderTableData();

renderFooter();
