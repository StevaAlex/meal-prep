$(document).ready(function () {
    function getRandom(arr) {
        let random = arr[Math.floor(Math.random() * arr.length)];
        return random;
    }
    function chooseProtein() {
        var proteins = ["Chicken", "Lamb", "Beef", "Tofu", "Pork", "Lentils", "Salmon", "Sardines"];
        var proteinChoice = getRandom(proteins);
        var proteinURL = "https://themealdb.com/api/json/v1/1/filter.php?i=" + proteinChoice;
        // console.log(proteinURL);
        $.ajax({
            url: proteinURL,
            method: "GET"
        })
            .then(function (response) {
                var mealSelection = response.meals;
                // //select random meals from mealSelection array
                // var meal1 = getRandom(mealSelection); 
                // var meal2 = getRandom(mealSelection); 
                // var meal3 = getRandom(mealSelection); 
                // console.log(mealSelection[0]); 
                // console.log(mealSelection[1]); 
                // console.log(mealSelection[3]);
                // //target headers in html for 3 cards
                // var card1Head = $("#card1-head"); 
                // var card2Head = $("#card2-head"); 
                // var card3Head = $("#card3-head"); 
                // //select names of 3 meals
                // var meal1Name = meal1.strMeal;
                // var meal2Name = meal2.strMeal;
                // var meal3Name = meal3.strMeal;
                // //asign each card a meal name
                // card1Head.text(meal1Name);
                // card2Head.text(meal2Name);
                // card3Head.text(meal3Name); 
                // //select image of 3 meals
                // var card1Img = meal1.strMealThumb; 
                // var card2Img = meal2.strMealThumb; 
                // var card3Img = meal3.strMealThumb;  
                // //target card img 
                // var meal1img = $("#meal1-img");
                // var meal2img = $("#meal2-img");
                // var meal3img = $("#meal3-img");
                // //assign each card an image
                // meal1img.attr("src", card1Img);
                // meal2img.attr("src", card2Img);
                // meal3img.attr("src", card3Img); 

                //find a way to prevent random number generator from selecting same value or same array item 
                //if meal respone array length >3, use random array for all 3 meals, 
                if (mealSelection.length > 4) {
                    var meal1 = getRandom(mealSelection);
                    var meal2 = getRandom(mealSelection);
                    var meal3 = getRandom(mealSelection);
                    console.log(meal1);
                    console.log(meal2);
                    console.log(meal3);
                    //target headers in html for 3 cards
                    var card1Head = $("#card1-head");
                    var card2Head = $("#card2-head");
                    var card3Head = $("#card3-head");
                    //select names of 3 meals
                    var meal1Name = meal1.strMeal;
                    var meal2Name = meal2.strMeal;
                    var meal3Name = meal3.strMeal;
                    //asign each card a meal name
                    card1Head.text(meal1Name);
                    card2Head.text(meal2Name);
                    card3Head.text(meal3Name);
                    //select image of 3 meals
                    var card1Img = meal1.strMealThumb;
                    var card2Img = meal2.strMealThumb;
                    var card3Img = meal3.strMealThumb;
                    //target card img 
                    var meal1img = $("#meal1-img");
                    var meal2img = $("#meal2-img");
                    var meal3img = $("#meal3-img");
                    //assign each card an image
                    meal1img.attr("src", card1Img);
                    meal2img.attr("src", card2Img);
                    meal3img.attr("src", card3Img);

                }
                 // if meal array length = 3, use meal[0], meal[1] and meal[2]
                else if (mealSelection.length = 3) {
                    var meal1 = mealSelection[0];
                    var meal2 = mealSelection[1];
                    var meal3 = mealSelection[2];
                    console.log(mealSelection)
                    console.log(meal1);
                    console.log(meal2);
                    console.log(meal3);
                    var card1Head = $("#card1-head");
                    var card2Head = $("#card2-head");
                    var card3Head = $("#card3-head");
                    //select names of 3 meals
                    var meal1Name = meal1.strMeal;
                    var meal2Name = meal2.strMeal;
                    var meal3Name = meal3.strMeal;
                    //asign each card a meal name
                    card1Head.text(meal1Name);
                    card2Head.text(meal2Name);
                    card3Head.text(meal3Name);
                    //select image of 3 meals
                    var card1Img = meal1.strMealThumb;
                    var card2Img = meal2.strMealThumb;
                    var card3Img = meal3.strMealThumb;
                    //target card img 
                    var meal1img = $("#meal1-img");
                    var meal2img = $("#meal2-img");
                    var meal3img = $("#meal3-img");
                    //assign each card an image
                    meal1img.attr("src", card1Img);
                    meal2img.attr("src", card2Img);
                    meal3img.attr("src", card3Img);

                }
                // if meal array length = 2, use meal[0], meal[1] 
                else if (mealSelection.length = 3) {
                    var meal1 = mealSelection[0];
                    var meal2 = mealSelection[1];
                    console.log(meal1);
                    console.log(meal2);
                    var card1Head = $("#card1-head");
                    var card3Head = $("#card3-head");
                    //select names of 2 meals
                    var meal1Name = meal1.strMeal;
                    var meal2Name = meal2.strMeal;
                    //asign each card a meal name
                    card1Head.text(meal1Name);
                    card3Head.text(meal2Name);
                    //select image of 2 meals
                    var card1Img = meal1.strMealThumb;
                    var card2Img = meal2.strMealThumb;
                    //target card img 
                    var meal1img = $("#meal1-img");
                    var meal3img = $("#meal3-img");
                    //assign each card an image
                    meal1img.attr("src", card1Img);
                    meal3img.attr("src", card2Img);
                }
                //if meal array length =1, asign it to the middle card, and cards on the other side have place holder
                else {
                    var meal1 = mealSelection[0];
                    console.log(meal1);
                    var card2Head = $("#card2-head");
                    //select names of 1 meals
                    var meal1Name = meal1.strMeal;
                    //asign each card a meal name
                    card2Head.text(meal1Name);
                    //select image of 1 meals
                    var card1Img = meal1.strMealThumb;
                    //target card img 
                    var meal2img = $("#meal2-img");
                    //assign each card an image
                    meal2img.attr("src", card1Img);
                }
//some of the array with meals are returning undefined or null results, consider using a nested if function 
//if array item = null or undefined, return only the defined items/items which are not null or ignore the undefined items
                
                

            })
        //add code so if array= 2, one card has a standard recipe or is removed
    }
    chooseProtein();
})