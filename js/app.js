"use strict";

var workingHours =["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"]
var newNum =0
var finaleSale=0
var Seattle = {
    minCust:23,
    maxCust:65,
    avgSale:6.3,
    custNum: [1],
    // coockieNum:90,
    getRandomCustomers: function(maxCust,minCust) {
       
        for (var i=0;i < workingHours.length;i++){
        newNum = generateRandomNumbers(maxCust,minCust);
        this.custNum.push(newNum)
        console.log(workingHours[i]+":"+Seattle.custNum+"cookies")

    }
    

    },
    render: function(){
        var parentElement = document.getElementById('sales');

        var article = document.createElement('article');
        parentElement.appendChild(article);

        var h2 =document.createElement('h2');
         h2.textContent ="Seattle"

    }

    // CookieSale : function(custNum,avgSale) {
    //     console.log(Seattle.custNum)
    //     for (var i=0;i < workingHours.length;i++){
    //    finaleSale= sales(custNum,avgSale)
    //     this.coockieNum.push(finaleSale)
    //     console.log(workingHours[i]+":"+Seattle.coockieNum+"cookies")}
    //     },
    }



// this function generate a number randolmy between maxcust and mincust
function generateRandomNumbers(maxCust,minCust) {
    var randomValue = Math.random();
    return Math.floor(randomValue*(maxCust-minCust + 1)+minCust );
    
}
// function sales(custNum,avgSale){ 
//     for (var i=0;i < workingHours.length;i++)
//     {
//         finaleSale= sales(Seattle.custNum[i+1],avgSale)

//   var finaleSale = Math.floor(Seattle.custNum[i]* avgSale)
//   console.log(finaleSale)
//   return finaleSale}

// }


Seattle.getRandomCustomers(Seattle.maxCust,Seattle.minCust);
Seattle.custNum.shift()
console.log(Seattle.custNum); 

// Seattle.CookieSale(Seattle.custNum,Seattle.avgSale);


console.log(Seattle.custNum); 
var sum = 0

for (var i=0;i < workingHours.length;i++){
    finaleSale= Seattle.custNum[i]*Seattle.avgSale
    Math.floor(finaleSale)
    console.log(workingHours[i]+":" + Math.floor(finaleSale)+"cookies.")
    sum =Math.floor(finaleSale)+ sum
    console.log(sum)
}
Seattle.render();