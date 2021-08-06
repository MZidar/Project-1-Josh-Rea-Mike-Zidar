



document.querySelector("#pick-drink").addEventListener("submit", (e) => {
 

  e.preventDefault()


 
  chooseDrink = document.querySelector("#pick-drink-input")
  
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${chooseDrink.value}`)
  .then(response => response.json())
  .then((drink) => {
    
    console.log(drink)
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
       
    
    document.querySelector("#your-drink").innerText = drink.drinks[0].strDrink

    document.querySelector("#pick-drink").reset()
 


   
  })
})






document.querySelector("#drop").addEventListener("click", (e) => {
 

  e.preventDefault()


  
  let dropDrink = e.target.innerText 

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${dropDrink}`)
  .then(response => response.json())
  .then((drink) => {
    

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
       
    
    document.querySelector("#your-drink").innerText = drink.drinks[0].strDrink


    document.querySelector("#pick-drink").reset()
 


   
  })
})



document.querySelector("#wheel").addEventListener("mouseenter", (e) => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
  .then(response => response.json())
  .then((drink) => {3

    e.preventDefault()
  
      let pic = document.querySelector("#drink-pic")
      pic.src = drink.drinks[0].strDrinkThumb
      document.querySelector("#found-drink").innerText = `You got ${drink.drinks[0].strDrink}`
      
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
         
      
          document.querySelector("#your-drink").innerText = drink.drinks[0].strDrink

  
      document.querySelector("#pick-drink").reset()
   
  


})})



    document.querySelector("#save-drink").addEventListener("click", (e) => {
      e.preventDefault()
      console.log((e))

      
      let x;
      x = document.createElement("li");
      x.innerText = document.querySelector("#text-input").value
      savedDrink = {
        name: x.innerText
      }

      fetch('http://localhost:3000/drinks', {
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(savedDrink),
      })
      .then(resp => resp.json())
      .then(document.querySelector("#saved-drinks").appendChild(x))})


function init(){

      fetch(`http://localhost:3000/drinks`)
      .then(response => response.json())
      .then((drink) => {
        drinkNamesFetched = drink.map(value => value.name);

     
       drinkNamesFetched.forEach(element => {
        let y = document.createElement("li") 
        y.innerText = element;
        document.querySelector("#old-drinks").appendChild(y)
        }
         ) 
      })}

init()

document.querySelector("#delete-drinks").addEventListener("click", (e) => {
  let id = 0
  while (id <= 40) {
  fetch(`http://localhost:3000/drinks/${id}`, {
  method: "DELETE"

}); id++; }

})



