//get or access the dom elements
let cart = document.querySelector(".menu"),
    items = document.querySelector(".items");
cart.addEventListener("click", (e) => {
    e.preventDefault();
    if (items.style.display === "grid") {
        items.style.display = "none";
    }
    else {
        items.style.display = "grid";
    }

});

//create an object list of product containing price/name.
var product = [
    { name: 'Event cake', Price: 5.90 },
    { name: "Desktop", Price: 50.00 },
    { name: "Magical Bird", Price: 100.50 },
    { name: "Bulb", Price: 10.30 },

];
//use js to change the innertext of price amounts.
var amnts = document.querySelectorAll("#amnt");
product.map(item => {
    var myitem = item.Price;
    myitem = item.Price;
    amnts.forEach(amnt => {
        myitem = amnt.innerHTML.match(item.Price);
    })
    //calculate total price and store it in total amount inner html.
    var totalAmnt = document.getElementById("priztot");
    let myPrice = product.reduce((prev, curr) => {

        return prev + curr.Price;
    }, 0);

    totalAmnt.innerHTML = myPrice.toFixed(2);

})


let lis = document.querySelectorAll("li");
let trashs = document.querySelectorAll(".fa-trash-can");
let hearts = document.querySelectorAll(".fa-heart");
hearts.forEach(heart => {
    heart.addEventListener("click", (e) => {
        if (e.currentTarget) {
            heart.classList.toggle('active');

        }
    })
})
//click on trash sign sign to delete li elements
var totalAmnt = document.getElementById("priztot");
trashs.forEach(trash => {
    trash.addEventListener("click", () => {
        trash.parentElement.remove();
        product.map(balItem => {
            balItem.Price;
            let listprice = [];
            listprice.push(balItem.Price);
            var listpriceTotal = listprice.reduce((prev, curr) => {
                return prev + curr;
            }, 0)
            totalAmnt.innerHTML = listpriceTotal.toFixed(2)

        })
    })
})
//click on plus sign to increase quantity
let plusBtn = document.querySelectorAll("#btn");
let minusBtn = document.querySelectorAll("#minus");
var quants = document.querySelectorAll("#num");
var num = 0;
plusBtn.forEach(plus => {
    plus.addEventListener("click", (event) => {
        event.currentTarget.id;
        if (num < 10) {
            num++;
            quants.forEach(quant => {
                event.currentTarget.id;
                quant.innerHTML = num;
            })

        }
    })
})
minusBtn.forEach(minus => {
    minus.addEventListener("click", (event) => {
        event.currentTarget;
        if (num > 0) {
            num--;
            quants.forEach(quant => {
                event.currentTarget.id;
                quant.innerHTML = num;
            })
        }

    })
})