"use strict";

var workingHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]
var newNum = 0
var finaleSale = 0
// var branchName = [Seattle,Tokyo,Dubai,Paris,Lima]
function Branch(location, minmum, maximum, avagrgeSold) {
     this.location = location
    this.minCust = minmum;
    this.maxCust = maximum;
    this.avgSale = avagrgeSold;
    this.custNum = [];
    this.coockiesPerHour = [];
    this.totalCookies = 0;

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
        // Branch.prototype.render = function () {
        //     var parentElement = document.getElementById('sales');

        //     var article = document.createElement('article');
        //     parentElement.appendChild(article);

        //     var h2 = document.createElement('h2');
        //     h2.textContent = this.location;
        //     article.append(h2);

        //     var ul = document.createElement('ul');

        //     for (var i = 0; i < workingHours.length; i++) {
        //         var li = document.createElement('li');
        //         li.textContent = workingHours[i] + ":" + this.coockiesPerHour[i] + "cookies."
        //         ul.appendChild(li);
        //     }
        //     var li = document.createElement("li");
        //     li.textContent = "Total :" + this.totalCookies + "cookies.";
        //     ul.appendChild(li);
        //     article.appendChild(ul);


        // }
        // branch.prototype.render = function(){
        //     var parentElement = document.getElementById('sales');
        //     var article = document.createElement('article');
        //     parentElement.appendChild(article);
            
           



        // }
        function headerMaker() {
            var parentElement = document.getElementById('sales');
            var article = document.createElement('article');
            parentElement.appendChild(article);
            var table = document.createElement('table');
            var tr = document.createElement('tr');
            var th = document.createElement('th')
            th.textContent ="  "
            tr.appendChild(th);
            for(var i = 0 ;i < workingHours.length; i++){
            var th =document.createElement('th');
            th.textContent =workingHours[i]
            tr.appendChild(th);}
            table.appendChild(tr);
            article.appendChild(table);



        }

        var Seattle = new Branch("Seattle",23, 65, 6.3);
        Seattle.getRandomCustomers();
        Seattle.coockiesSoldByHour();
        // Seattle.render();
        headerMaker();
        var Tokyo = new Branch(Tokyo,3, 24, 1.2,);
        Tokyo.getRandomCustomers();
        Tokyo.coockiesSoldByHour();
        // Tokyo.render();
    
        console.log(Seattle);


        // var Seattle = {
        //     minCust:23,
        //     maxCust:65,
        //     avgSale:6.3,
        //     custNum: [],
        //     coockiesPerHour:[],
        //     totalCookies:0,
        //     getRandomCustomers: function() {

        //         for (var i=0;i < workingHours.length;i++){
        //         newNum = generateRandomNumbers(this.maxCust,this.minCust);
        //         this.custNum.push(newNum)


        //     }


        //     },
        //     coockiesSoldByHour: function() {
        // for(var i = 0;i< workingHours.length;i++){
        // var numberOfCookies =Math.floor( this.avgSale * this.custNum[i]);
        // this.coockiesPerHour.push(numberOfCookies);
        // this.totalCookies =this.totalCookies +numberOfCookies;
        //     }
        //     },
        //     render: function(){
        //     var parentElement = document.getElementById('sales');

        //     var article = document.createElement('article');
        //     parentElement.appendChild(article);

        //     var h2 = document.createElement('h2');
        //      h2.textContent ="Seattle";
        //      article.append(h2);

        //    var ul =document.createElement('ul');

        // for (var i=0;i < workingHours.length;i++){
        //      var li = document.createElement('li');
        //      li.textContent = workingHours[i] +":"+this.coockiesPerHour[i]+"cookies."
        //      ul.appendChild(li);
        // }
        // var li =document.createElement("li");
        // li.textContent = "Total :" +this.totalCookies+"cookies.";
        // ul.appendChild(li);
        // article.appendChild(ul);

        //     }

        //     }
        //     var Tokyo = {
        //         minCust:3,
        //         maxCust:24,
        //         avgSale:1.2,
        //         custNum: [],
        //         coockiesPerHour:[],
        //         totalCookies:0,
        //         getRandomCustomers: function() {

        //             for (var i=0;i < workingHours.length;i++){
        //             newNum = generateRandomNumbers(this.maxCust,this.minCust);
        //             this.custNum.push(newNum)


        //         }


        //         },
        //         coockiesSoldByHour: function() {
        //         for(var i = 0;i< workingHours.length;i++){
        //         var numberOfCookies =Math.floor( this.avgSale * this.custNum[i]);
        //         this.coockiesPerHour.push(numberOfCookies);
        //         this.totalCookies =this.totalCookies +numberOfCookies;
        //         }
        //         },
        //         render: function(){
        //             var parentElement = document.getElementById('sales');

        //             var article = document.createElement('article');
        //             parentElement.appendChild(article);

        //             var h2 = document.createElement('h2');
        //              h2.textContent = "Tokyo";
        //              article.append(h2);

        //            var ul =document.createElement('ul');

        //         for (var i=0;i < workingHours.length;i++){
        //              var li = document.createElement('li');
        //              li.textContent = workingHours[i] +":"+this.coockiesPerHour[i]+"cookies."
        //              ul.appendChild(li);
        //         }
        //         var li =document.createElement("li");
        //         li.textContent = "Total :" +this.totalCookies+"cookies.";
        //         ul.appendChild(li);
        //         article.appendChild(ul);

        //         }

        //         }

        //         var Dubai = {
        //             minCust:11,
        //             maxCust:38,
        //             avgSale:3.7,
        //             custNum: [],
        //             coockiesPerHour:[],
        //             totalCookies:0,
        //             getRandomCustomers: function() {

        //                 for (var i=0;i < workingHours.length;i++){
        //                 newNum = generateRandomNumbers(this.maxCust,this.minCust);
        //                 this.custNum.push(newNum)


        //             }


        //             },
        //             coockiesSoldByHour: function() {
        //             for(var i = 0;i< workingHours.length;i++){
        //             var numberOfCookies =Math.floor( this.avgSale * this.custNum[i]);
        //             this.coockiesPerHour.push(numberOfCookies);
        //             this.totalCookies =this.totalCookies +numberOfCookies;
        //             }
        //             },
        //             render: function(){
        //                 var parentElement = document.getElementById('sales');

        //                 var article = document.createElement('article');
        //                 parentElement.appendChild(article);

        //                 var h2 = document.createElement('h2');
        //                  h2.textContent = "Dubai";
        //                  article.append(h2);

        //                var ul =document.createElement('ul');

        //             for (var i=0;i < workingHours.length;i++){
        //                  var li = document.createElement('li');
        //                  li.textContent = workingHours[i] +":"+this.coockiesPerHour[i]+"cookies."
        //                  ul.appendChild(li);
        //             }
        //             var li =document.createElement("li");
        //             li.textContent = "Total :" +this.totalCookies+"cookies.";
        //             ul.appendChild(li);
        //             article.appendChild(ul);

        //             }

        //             }
        //             var Paris = {
        //                 minCust:20,
        //                 maxCust:38,
        //                 avgSale:2.3,
        //                 custNum: [],
        //                 coockiesPerHour:[],
        //                 totalCookies:0,
        //                 getRandomCustomers: function() {

        //                     for (var i=0;i < workingHours.length;i++){
        //                     newNum = generateRandomNumbers(this.maxCust,this.minCust);
        //                     this.custNum.push(newNum)


        //                 }


        //                 },
        //                 coockiesSoldByHour: function() {
        //                 for(var i = 0;i< workingHours.length;i++){
        //                 var numberOfCookies =Math.floor( this.avgSale * this.custNum[i]);
        //                 this.coockiesPerHour.push(numberOfCookies);
        //                 this.totalCookies =this.totalCookies +numberOfCookies;
        //                 }
        //                 },
        //                 render: function(){
        //                     var parentElement = document.getElementById('sales');

        //                     var article = document.createElement('article');
        //                     parentElement.appendChild(article);

        //                     var h2 = document.createElement('h2');
        //                      h2.textContent = "Paris";
        //                      article.append(h2);

        //                    var ul =document.createElement('ul');

        //                 for (var i=0;i < workingHours.length;i++){
        //                      var li = document.createElement('li');
        //                      li.textContent = workingHours[i] +":"+this.coockiesPerHour[i]+"cookies."
        //                      ul.appendChild(li);
        //                 }
        //                 var li =document.createElement("li");
        //                 li.textContent = "Total :" +this.totalCookies+"cookies.";
        //                 ul.appendChild(li);
        //                 article.appendChild(ul);

        //                 }

        //                 }
        //                 var Lima = {
        //                     minCust:2,
        //                     maxCust:16,
        //                     avgSale:4.6,
        //                     custNum: [],
        //                     coockiesPerHour:[],
        //                     totalCookies:0,
        //                     getRandomCustomers: function() {

        //                         for (var i=0;i < workingHours.length;i++){
        //                         newNum = generateRandomNumbers(this.maxCust,this.minCust);
        //                         this.custNum.push(newNum)


        //                     }


        //                     },
        //                     coockiesSoldByHour: function() {
        //                     for(var i = 0;i< workingHours.length;i++){
        //                     var numberOfCookies =Math.floor( this.avgSale * this.custNum[i]);
        //                     this.coockiesPerHour.push(numberOfCookies);
        //                     this.totalCookies =this.totalCookies +numberOfCookies;
        //                     }
        //                     },
        //                     render: function(){
        //                         var parentElement = document.getElementById('sales');

        //                         var article = document.createElement('article');
        //                         parentElement.appendChild(article);

        //                         var h2 = document.createElement('h2');
        //                          h2.textContent = "Lima";
        //                          article.append(h2);

        //                        var ul =document.createElement('ul');

        //                     for (var i=0;i < workingHours.length;i++){
        //                          var li = document.createElement('li');
        //                          li.textContent = workingHours[i] +":"+this.coockiesPerHour[i]+"cookies."
        //                          ul.appendChild(li);
        //                     }
        //                     var li =document.createElement("li");
        //                     li.textContent = "Total :" +this.totalCookies+"cookies.";
        //                     ul.appendChild(li);
        //                     article.appendChild(ul);

        //                     }

        //                     }





        // this function generate a number randolmy between maxcust and mincust
        function generateRandomNumbers(maxCust, minCust) {
            var randomValue = Math.random();
            return Math.floor(randomValue * (maxCust - minCust + 1) + minCust);

        };

// Seattle.getRandomCustomers();
// Seattle.coockiesSoldByHour();
// Tokyo.getRandomCustomers();
// Tokyo.coockiesSoldByHour();
// Dubai.getRandomCustomers();
// Dubai.coockiesSoldByHour();
// Paris.getRandomCustomers();
// Paris.coockiesSoldByHour();
// Lima.getRandomCustomers();
// Lima.coockiesSoldByHour();

// console.log(Seattle); 
// console.log(Tokyo);
// console.log(Dubai);
// console.log(Paris);
// console.log(Lima);



// Seattle.render();
// Tokyo.render();
// Dubai.render();
// Paris.render();
// Lima.render() ;
