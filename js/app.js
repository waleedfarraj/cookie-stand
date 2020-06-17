"use strict";

var workingHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
var newNum = 0
var finaleSale = 0
var footerTotal = 0 // i will use this one for  footer total
var parentElement = document.getElementById('sales');
var article = document.createElement('article');
parentElement.appendChild(article);
var table = document.createElement('table');
var branchName = [] // to push all the objects we creat to it 
function Branch(location, minmum, maximum, avagrgeSold) {
    this.location = location
    this.minCust = minmum;
    this.maxCust = maximum;
    this.avgSale = avagrgeSold;
    this.custNum = [];
    this.coockiesPerHour = [];
    this.totalCookies = 0;
    branchName.push(this);

}
Branch.prototype.getRandomCustomers = function () {
    for (var i = 0; i < workingHours.length; i++) {
        newNum = generateRandomNumbers(this.maxCust, this.minCust);
        this.custNum.push(newNum)
    }
};
Branch.prototype.coockiesSoldByHour = function () {
    for (var i = 0; i < workingHours.length; i++) {
        var numberOfCookies = Math.floor(this.avgSale * this.custNum[i]);
        this.coockiesPerHour.push(numberOfCookies);
        this.totalCookies = this.totalCookies + numberOfCookies;

    };
}

Branch.prototype.render = function () {

    var tr = document.createElement('tr');
    var td = document.createElement('td')
    td.textContent = this.location
    tr.appendChild(td);
    for (var i = 0; i < workingHours.length; i++) {
        var td = document.createElement('td');
        td.textContent = this.coockiesPerHour[i]
        tr.appendChild(td);
    }
    var td = document.createElement('td')
    td.textContent = this.totalCookies
    tr.appendChild(td);

    table.appendChild(tr);
    article.appendChild(table);




}

function headerMaker() {

    var tr = document.createElement('tr');
    var th = document.createElement('th')
    th.textContent = "___________"
    tr.appendChild(th);
    for (var i = 0; i < workingHours.length; i++) {
        var th = document.createElement('th');
        th.textContent = workingHours[i]
        tr.appendChild(th);
    }
    var th = document.createElement('th')
    th.textContent = "Daily location total"
    tr.appendChild(th);

    table.appendChild(tr);
    article.appendChild(table);



}
var tr1;
function footerMaker() {
    tr1 = tr;
    var parentElement = document.getElementById('sales');



    var tr = document.createElement('tr');
    var th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = "Totals"


    for (var i = 0; i < workingHours.length; i++) {
        var th = document.createElement('th');
        var hourTotal = 0;
        for (var j = 0; j < branchName.length; j++) {
            hourTotal += branchName[j].coockiesPerHour[i];
        }
        footerTotal += hourTotal;
        th.textContent = hourTotal;
        tr.appendChild(th);
    }

    var th = document.createElement('th')
    th.textContent = footerTotal;
    tr.appendChild(th);
    table.appendChild(tr);
    article.appendChild(table);


}

headerMaker();
var Seattle = new Branch("Seattle", 23, 65, 6.3);
var Tokyo = new Branch("Tokyo", 3, 24, 1.2,);
var Dubai = new Branch("Dubai", 11, 38, 3.7);
var Paris = new Branch("Paris", 20, 38, 2.3);
var Lima = new Branch("lima", 2, 16, 4.6);
for( var i =0; i <branchName.length;i++){
     branchName[i].getRandomCustomers();
    branchName[i].coockiesSoldByHour();
    branchName[i].render();
}







function tableMaker() {
    table.innerHTML ="";
    headerMaker();
    for( var i =0; i <branchName.length;i++){
        branchName[i].render();
    }
    footerMaker();
    
}







// this function generate a number randolmy between maxcust and mincust
function generateRandomNumbers(maxCust, minCust) {
    var randomValue = Math.random();
    return Math.floor(randomValue * (maxCust - minCust + 1) + minCust);

};


footerMaker();

function alerting() {
    event.preventDefault();


    var standLocationValue = event.target.s.value;
    console.log(standLocationValue);
    var minCustValue = parseInt(event.target.mincust.value);
    console.log(minCustValue);
    var maxCustValue = parseInt(event.target.maxcust.value);
    console.log(maxCustValue);
    var avagrgeSoldValue = parseFloat(event.target.avarageSold.value);
    console.log(avagrgeSoldValue)


    var newStandLocation = new Branch(standLocationValue, minCustValue, maxCustValue, avagrgeSoldValue)

    newStandLocation.getRandomCustomers();
    newStandLocation.coockiesSoldByHour();
    // var rowCount = table.rows.length
    // table.deleteRow[rowCount]
    
    
    
   tableMaker();
    console.log(branchName)

    // table.removeChild(tr1);
    //  newStandLocation.render(table);
    
    console.log("newStandLocation");

}
var newStand = document.getElementById('new-stand');
newStand.addEventListener("submit", alerting);