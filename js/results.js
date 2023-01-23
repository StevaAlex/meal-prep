    //need to add links to meal images which leads to a separate page
   // maybe store the ID's in local storage and use a separate javascript page for that
   function mealIDsearch (ID1, ID2, ID3) { 
    var mealURL1 = 'https//:themealdb.com/api/json/v1/1/lookup.php?i=' + ID1;
    var mealURL2 = 'https//:themealdb.com/api/json/v1/1/lookup.php?i=' + ID2;
    var mealURL3 = 'https//:themealdb.com/api/json/v1/1/lookup.php?i=' + ID3;
}; 
$.ajax({
    url: mealURL1,
    method: "GET"
})
    .then(function (response) {
        var mealSelection = response.meals;
        console.log(mealSelection);
    })
