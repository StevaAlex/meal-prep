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
                //select random meals from mealSelection array
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
                //find a way to prevent random number generator from selecting same value or same array item


             })
        //add code so if array= 2, one card has a standard recipe or is removed
    }
chooseProtein();
})