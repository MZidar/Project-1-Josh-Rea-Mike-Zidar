





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


    const drinkInfo = [];
    drinkInfo.push(drink.drinks[0])    
    

    ingArray = [];
    meaArray = [];
    document.querySelector("#mea").innerHTML = ""
    document.querySelector("#ing").innerHTML = ""

    




    for (const [key, value] of Object.entries(drinkInfo[0])) {
        if (key.includes('strIng'))
        ingArray.push(value)
      }

      filterIng = ingArray.filter(function (el) {
        return el != null;
      });    



    for (const [key, value] of Object.entries(drinkInfo[0])) {
        if (key.includes('strMea'))
        meaArray.push(value)
      }

      filterMea = meaArray.filter(function (el) {
        return el != null;
      });   





    
    
   

    filterIng.forEach(el => 
        {
            let ingredient = document.createElement("li")

            ingredient.innerText = el

            document.querySelector("#ing").appendChild(ingredient)  
        })

    filterMea.forEach(el => 
        {
            let ingredient = document.createElement("li")

            ingredient.innerText = el

            document.querySelector("#mea").appendChild(ingredient)  
        })
       
    
    

    document.querySelector("#pick-drink").reset()
 


   
  })
})






document.querySelector("#drop").addEventListener("click", (e) => {
 

  e.preventDefault()


  
  let dropDrink = e.target.innerText 
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${dropDrink}`)
  .then(response => response.json())
  .then((drink) => {
    
    console.log(drink.drinks[0])

    let pic = document.querySelector("#drink-pic")
    pic.src = drink.drinks[0].strDrinkThumb
    
    document.querySelector("#instruction").innerText = drink.drinks[0].strInstructions 


    const drinkInfo = [];
    drinkInfo.push(drink.drinks[0])    
    

    ingArray = [];
    meaArray = [];
    document.querySelector("#mea").innerHTML = ""
    document.querySelector("#ing").innerHTML = ""

    




    for (const [key, value] of Object.entries(drinkInfo[0])) {
        if (key.includes('strIng'))
        ingArray.push(value)
      }

      filterIng = ingArray.filter(function (el) {
        return el != null;
      });    



    for (const [key, value] of Object.entries(drinkInfo[0])) {
        if (key.includes('strMea'))
        meaArray.push(value)
      }

      filterMea = meaArray.filter(function (el) {
        return el != null;
      });   





    
    
   

    filterIng.forEach(el => 
        {
            let ingredient = document.createElement("li")

            ingredient.innerText = el

            document.querySelector("#ing").appendChild(ingredient)  
        })

    filterMea.forEach(el => 
        {
            let ingredient = document.createElement("li")

            ingredient.innerText = el

            document.querySelector("#mea").appendChild(ingredient)  
        })
       
    
    

    document.querySelector("#pick-drink").reset()
 


   
  })
})
