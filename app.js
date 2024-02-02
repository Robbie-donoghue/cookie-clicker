// start cookies count at 0
let cookies = 0;
let purchasedItems = []
let shop = document.getElementById("shop")



document.body.onload = function startGame()
{
setInterval(function()
{
    cookies += 1
    console.log( "🍪" , cookies )
    // 1 second
   // update dom so cookie counter starts to increment on html page
    //get cookies element from html
    document.getElementById("numberOfCookies").innerHTML = cookies
    setCookies()
    getCookies()
}
, 1000)
}

//add cookies per click
//update numberOfCookies 
//save to local storage

let cartoonCookie = document.getElementById("cartoonCookie")
cartoonCookie.addEventListener('click', clickForCookies)
let resetButton = document.getElementById("resetButton")
resetButton.addEventListener("click" , resetCookies)

  function clickForCookies(event)
{
    cookies +=1
    document.getElementById("cartoonCookie")
    document.getElementById("numberOfCookies").innerHTML = cookies
}

//save to local storage

//stringify and set item
function setCookies(event)
{
    event.preventDefult()
    localStorage.setItem("localCookies" , cookies)
}
//get item and parse
function getCookies(event)
{
    const parsedCookies= JSON.parse("localCookies")
}

function resetCookies(event)
{
    cookies = 0
}

// do with javascript
//array of objects that represent each of upgrades, price, how much they increase cookies by 
//empty array called purchased items
//function called render shop, loops thrpugh each stpred item and creatse at p tag, item.name
function renderShop()
{
    shopItems.forEach(function ()
    {
         let pName =  document.createElement('p')
         let pPrice = doucment.createElement('p')
      
    })
}
// add a button in shop called buy
// when they click on button it runs a function which checks if you can buy 
//checks if you can buy item, if you can subtracts price from cookies
//then pushes item puchased to empty array earlier
//creates a div to store it in and classes to style it 
// set cookies equal to a function called getcookies per second
function getCookiesPerSecond()
{
   if purchasedItems.length
    for( let i = 0; i< purchasedItems.length i ++)
    {
        sum += purchasedItems[i] 
    }
}
//if they havent purchased anything we return it back as 1 
// if that isnt true you do rest of function, variable start at 0 and loop through purchased item array 