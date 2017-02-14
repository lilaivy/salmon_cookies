'use strict';

// var CookiesPerDay = function() //this function will generate a random number to help calulate a random number and customers per hour


// var CookieStore = function(){       //used a constructor so capitilized Cookie
//     var location, min, max, average;
//     return colsole.dir (this);
// };


var pike = {
  location: '1st and Pike',
  min: 23,
  max: 65,
  cookiesPerCustomer: 6.3,
  cookiesArray: [],
  customersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  },
  cookiesPerHour: function () {
    return this.cookiesPerCustomer * this.customersPerHour();
  },
  storeHours:['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ', '1pm: ', '2pm: ','3pm: ','4pm: ','5pm: ','6pm: ', '7pm: ','8pm: '],

  display: function(){
    for(var i = 0; i < this.storeHours.length; i++){
      this.cookiesArray.push(this.cookiesPerHour());

      var ul = document.getElementById('projectionsPike');
      var pikeLi = document.createElement('li');
      pikeLi.textContent = this.storeHours[i] + parseInt(this.cookiesArray[i]) + ' cookies'; //surround something with parseInt it rounds the number up.
      ul.appendChild(pikeLi);

    }
    var total = 0;
    for(i = 0; i < this.cookiesArray.length; i++){
      total = total + this.cookiesArray[i];
    }

      var ul = document.getElementById('projectionsPike');
      var pikeLi = document.createElement('li');
      pikeLi.textContent = 'Total: ' + parseInt(total) + ' cookies'; //surround something with parseInt it rounds the number up.
      ul.appendChild(pikeLi);
    console.log (parseInt(total));
  }
};
pike.display();


var Seatac = {
location: 'Seatac Airport',
  min: 3,
  max: 24,
cookiesPerCustomer: 1.2,
  cookiesArray: [],
  customersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  },
  cookiesPerHour: function () {
    return this.cookiesPerCustomer * this.customersPerHour();
  },
  storeHours:['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ', '1pm: ', '2pm: ','3pm: ','4pm: ','5pm: ','6pm: ', '7pm: ','8pm: '],

  display: function(){
    for(var i = 0; i < this.storeHours.length; i++){
      this.cookiesArray.push(this.cookiesPerHour());

      var ul = document.getElementById('projectionsSeaTac');
      var pikeLi = document.createElement('li');
      pikeLi.textContent = this.storeHours[i] + parseInt(this.cookiesArray[i]) + ' cookies'; //surround something with parseInt it rounds the number up.
      ul.appendChild(pikeLi);

    }
    var total = 0;
    for(i = 0; i < this.cookiesArray.length; i++){
      total = total + this.cookiesArray[i];
    }

      var ul = document.getElementById('projectionsSeaTac');
      var pikeLi = document.createElement('li');
      pikeLi.textContent = 'Total: ' + parseInt(total) + ' cookies'; //surround something with parseInt it rounds the number up.
      ul.appendChild(pikeLi);
    console.log (parseInt(total));
  }
};
Seatac.display();

var seattleCenter= {
  location: 'Seattle Center',
  min: 11,
  max: 38,
  cookiesPerCustomer: 3.7,
  cookiesArray: [],
  customersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  },
  cookiesPerHour: function () {
    return this.cookiesPerCustomer * this.customersPerHour();
  },
  storeHours:['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ', '1pm: ', '2pm: ','3pm: ','4pm: ','5pm: ','6pm: ', '7pm: ','8pm: '],
  

  display: function(){
    for(var i = 0; i < this.storeHours.length; i++){
      this.cookiesArray.push(this.cookiesPerHour());

      var ul = document.getElementById('projectionsSeattleCenter');
      var pikeLi = document.createElement('li');
      pikeLi.textContent = this.storeHours[i] + parseInt(this.cookiesArray[i]) + ' cookies'; //surround something with parseInt it rounds the number up.
      ul.appendChild(pikeLi);

    }
    var total = 0;
    for(i = 0; i < this.cookiesArray.length; i++){
      total = total + this.cookiesArray[i];
    }

      var ul = document.getElementById('projectionsSeattleCenter');
      var pikeLi = document.createElement('li');
      pikeLi.textContent = 'Total: ' + parseInt(total) + ' cookies'; //surround something with parseInt it rounds the number up.
      ul.appendChild(pikeLi);
    console.log (parseInt(total));
  }
};
seattleCenter.display();


var capitolHill= {
  location: 'Capitol Hill',
  min: 20,
  max: 38,
  cookiesPerCustomer: 2.3,
  cookiesArray: [],
  customersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  },
  cookiesPerHour: function () {
    return this.cookiesPerCustomer * this.customersPerHour();
  },
  storeHours:['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ', '1pm: ', '2pm: ','3pm: ','4pm: ','5pm: ','6pm: ', '7pm: ','8pm: '],
  

  display: function(){
    for(var i = 0; i < this.storeHours.length; i++){
      this.cookiesArray.push(this.cookiesPerHour());

      var ul = document.getElementById('projectionsCapitolHill');
      var pikeLi = document.createElement('li');
      pikeLi.textContent = this.storeHours[i] + parseInt(this.cookiesArray[i]) + ' cookies'; //surround something with parseInt it rounds the number up.
      ul.appendChild(pikeLi);

    }
    var total = 0;
    for(i = 0; i < this.cookiesArray.length; i++){
      total = total + this.cookiesArray[i];
    }

      var ul = document.getElementById('projectionsCapitolHill');
      var pikeLi = document.createElement('li');
      pikeLi.textContent = 'Total: ' + parseInt(total) + ' cookies'; //surround something with parseInt it rounds the number up.
      ul.appendChild(pikeLi);
    console.log (parseInt(total));
  }
};
capitolHill.display();


var alki = {
  location: 'Alki',
  min: 2,
  max: 16,
  cookiesPerCustomer: 4.6,
  cookiesArray: [],
  customersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  },
  cookiesPerHour: function () {
    return this.cookiesPerCustomer * this.customersPerHour();
  },
  storeHours:['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ', '1pm: ', '2pm: ','3pm: ','4pm: ','5pm: ','6pm: ', '7pm: ','8pm: '],
  

  display: function(){
    for(var i = 0; i < this.storeHours.length; i++){
      this.cookiesArray.push(this.cookiesPerHour());

      var ul = document.getElementById('projectionsAlki');
      var pikeLi = document.createElement('li');
      pikeLi.textContent = this.storeHours[i] + parseInt(this.cookiesArray[i]) + ' cookies'; //surround something with parseInt it rounds the number up.
      ul.appendChild(pikeLi);

    }
    var total = 0;
    for(i = 0; i < this.cookiesArray.length; i++){
      total = total + this.cookiesArray[i];
    }

      var ul = document.getElementById('projectionsAlki');
      var pikeLi = document.createElement('li');
      pikeLi.textContent = 'Total: ' + parseInt(total) + ' cookies'; //surround something with parseInt it rounds the number up.
      ul.appendChild(pikeLi);
    console.log (parseInt(total));
  }
};
alki.display();
