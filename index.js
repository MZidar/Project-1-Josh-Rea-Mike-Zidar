let chooseDrink, drink;






document.querySelector("#pick-drink").addEventListener("submit", (e) => {
  
  e.preventDefault()
  
  chooseDrink = document.querySelector("#pick-drink-input")
  
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${chooseDrink.value}`)
  .then(response => response.json())
  .then((drink) => {
    
    console.log(drink.drinks[0])

    let pic = document.querySelector("#drink-pic")
    pic.src = drink.drinks[0].strDrinkThumb
    
    document.querySelector("#instruction").innerText = drink.drinks[0].strInstructions 
    
    document.querySelector("#pick-drink").reset()

  })
})



  