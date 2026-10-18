const ingredients = document.getElementById("ingredients");
const priceText = document.getElementById("price");
const signupBox = document.getElementById("signupBox");
const summaryBox = document.getElementById("summaryBox");
const ordersPage = document.getElementById("ordersPage");
const burgerPage = document.getElementById("burgerPage");
const checkoutPage = document.getElementById("checkoutPage");
const ordersLink = document.getElementById("ordersLink");
let lettuce = 0;
let bacon = 0;
let cheese = 0;
let meat = 0;
let price = 3;
function addLettuce() 
{
    lettuce++;
    price = price + 0.50;
    showBurgerIngredients();
}
function removeLettuce() 
{
    if (lettuce > 0) 
        {
        lettuce--;
        price = price - 0.50;
        showBurgerIngredients();
    }
}
function addBacon() 
{
    bacon++;
    price = price + 1;
    showBurgerIngredients();
}
function removeBacon() 
{
    if (bacon > 0) 
        {
        bacon--;
        price = price - 1;
        showBurgerIngredients();
    }
}
function addCheese() 
{
    cheese++;
    price = price + 0.70;
    showBurgerIngredients();
}
function removeCheese() 
{
    if (cheese > 0) 
        {
        cheese--;
        price = price - 0.70;
        showBurgerIngredients();
    }
}
function addMeat() 
{
    meat++;
    price = price + 1.50;
    showBurgerIngredients();
}
function removeMeat()
 {
    if (meat > 0) 
        {
        meat--;
        price = price - 1.50;
        showBurgerIngredients();
    }
}
function showBurgerIngredients() 
{
    ingredients.innerHTML = "";
    for (let i = 0; i < lettuce; i++) 
        {
        let div = document.createElement("div");
        div.className = "lettuce";
        ingredients.appendChild(div);
    }
    for (let i = 0; i < bacon; i++) 
        {
        let div = document.createElement("div");
        div.className = "bacon";
        ingredients.appendChild(div);
    }
    for (let i = 0; i < cheese; i++) 
        {
        let div = document.createElement("div");
        div.className = "cheese";
        ingredients.appendChild(div);
    }
    for (let i = 0; i < meat; i++) 
        {
        let div = document.createElement("div");
        div.className = "meat";
        ingredients.appendChild(div);
    }
    if (
        lettuce == 0 &&
        bacon == 0 &&
        cheese == 0 &&
        meat == 0
    ) {
        ingredients.innerHTML =
            "<p id='empty'>No Ingredients Added</p>";
    }
    priceText.innerText = price.toFixed(2);
}
function openSignup() 
{
    signupBox.style.display = "flex";
}
function closeSignup() 
{
    signupBox.style.display = "none";
}
function submitOrder() 
{
    let gmail =
        document.getElementById("gmail").value;
    let password =
        document.getElementById("password").value;
    if (gmail == "" || password == "") 
        {
        alert("Please enter Gmail and Password");
        return;
    }
    document.getElementById("summaryText").innerText =
        "\nLettuce: " + lettuce +
        "\nBacon: " + bacon +
        "\nCheese: " + cheese +
        "\nMeat: " + meat;
    document.getElementById("summaryPrice").innerText =
        price.toFixed(2);
    signupBox.style.display = "none";
    summaryBox.style.display = "flex";
    let oldOrders =
        localStorage.getItem("orders");
    if (oldOrders == null) 
        {
        oldOrders = "";
    }
    let newOrder =
        "Gmail: " + gmail +
        "Lettuce: " + lettuce +
        "Bacon: " + bacon +
        "Cheese: " + cheese +
        "Meat: " + meat +
        "Price: $" + price.toFixed(2) +
        "Time: " + new Date().toLocaleString();
    oldOrders =
        oldOrders + newOrder + "###";
    localStorage.setItem(
        "orders",
        oldOrders
    );
    ordersLink.style.display = "block";
}
function cancelOrder() 
{
    summaryBox.style.display = "none";
}
function continueOrder() 
{
    summaryBox.style.display = "none";
    burgerPage.style.display = "none";
    ordersPage.style.display = "none";
    checkoutPage.style.display = "block";
    showCheckoutBurger();
}
function showCheckoutBurger() 
{
    let area =
        document.getElementById("checkoutIngredients");
    area.innerHTML = "";
    for (let i = 0; i < lettuce; i++) 
        {
        let div = document.createElement("div");
        div.className = "lettuce";
        area.appendChild(div);
    }
    for (let i = 0; i < bacon; i++) 
        {
        let div = document.createElement("div");
        div.className = "bacon";
        area.appendChild(div);
    }
    for (let i = 0; i < cheese; i++) 
        {
        let div = document.createElement("div");
        div.className = "cheese";
        area.appendChild(div);
    }
    for (let i = 0; i < meat; i++) 
        {
        let div = document.createElement("div");
        div.className = "meat";
        area.appendChild(div);
    }
}
function showOrders() 
{
    burgerPage.style.display = "none";
    checkoutPage.style.display = "none";
    summaryBox.style.display = "none";
    signupBox.style.display = "none";
    ordersPage.style.display = "block";
    let orderList =
        document.getElementById("orderList");
    orderList.innerHTML = "";
    let orders =
        localStorage.getItem("orders");
    if (orders == null || orders == "") 
        {
        orderList.innerText = "No orders yet.";
        return;
    }
    let allOrders =
        orders.split("###");
    allOrders.forEach(function(order) 
    {
        if (order != "") {
            let div =
                document.createElement("div");
            div.className =
                "order-box";
            order =
                order.replaceAll(" | ", "\n");
            div.innerText =
                order;
            orderList.appendChild(div);
        }
    });
}
function showBurger() {
    burgerPage.style.display = "block";
    ordersPage.style.display = "none";
    checkoutPage.style.display = "none";
    signupBox.style.display = "none";
    summaryBox.style.display = "none";
}
let oldOrders =
    localStorage.getItem("orders");
if (oldOrders != null && oldOrders != "") {
    ordersLink.style.display = "block";
}