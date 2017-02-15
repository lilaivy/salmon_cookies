'use strict';



var Store = function(storeName, storeLocation, minCookiesPerCustomer, maxCookiesPerCustomer, avgCookiesPurchased){
  this.name = storeName;
  this.location = storeLocation;
  this.hours = ['','6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ', '1pm: ', '2pm: ','3pm: ','4pm: ','5pm: ','6pm: ', '7pm: ','8pm: '];
  this.minCookies = minCookiesPerCustomer;
  this.maxCookies = maxCookiesPerCustomer;
  this.avgCookiesPurchased = avgCookiesPurchased;
  this.cookiesArray = [];
};


Store.prototype.customersPerHour = function(){
  return Math.floor(Math.random() * (this.maxCookies - this.minCookies) + this.minCookies);
};

Store.prototype.cookiesPerHour = function(){ //avg number of cookies sold per hour
  return this.avgCookiesPurchased * this.customersPerHour();
};


Store.prototype.dailyProjection = function(){   //change the name to projections.
  for(var i = 0; i < (this.hours.length - 1); i++){  //looping through cookies sold per hour and storing it in the empty array called cookiesArray
    this.cookiesArray.push(this.cookiesPerHour());
  };
};
Store.prototype.renderTableData = function(){
  var tableElement = document.getElementById('dailyProjections');
  var tableDataRow = document.createElement('tr');
  var storeNameRow = document.createElement('th');
  storeNameRow.textContent = this.name;
  tableElement.appendChild(tableDataRow);
  tableDataRow.appendChild(storeNameRow);

  for(var i = 0; i < this.cookiesArray.length; i++){
    var newTableData = document.createElement('td');
    newTableData.textContent = parseInt(this.cookiesArray[i]); //surround something with parseInt it rounds the number up.
    tableDataRow.appendChild(newTableData);
  };

};
// var total = 0;
// for(var i = 0; i < this.cookiesArray.length; i++){
//   total = total + this.cookiesArray[i];
// }




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

//Calls the constructor function
pike.dailyProjection();
seatac.dailyProjection();
seattleCenter.dailyProjection();
capitolHill.dailyProjection();
alki.dailyProjection();





var hours = ['','6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ', '1pm: ', '2pm: ','3pm: ','4pm: ','5pm: ','6pm: ', '7pm: ','8pm: ', 'Daily Total'];
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



