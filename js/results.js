//need to add links to meal images which leads to a separate page
// maybe store the ID's in local storage and use a separate javascript page for that
var mealID1 = localStorage.getItem("mealID1");
var mealID2 = localStorage.getItem("mealID2");
var mealID3 = localStorage.getItem("mealID3");
//select the card headers
var meal1 = $("#card1-head");
var meal2 = $("#card2-head");
var meal3 = $("#card3-head");
//set meal ID as an attribute, so it can then be used when clicked
meal1.attr("meal-id", mealID1);
meal2.attr("meal-id", mealID2);
meal3.attr("meal-id", mealID3);

var mealLink = $((".meal-link"));
mealLink.on("click", function (event) { 
    event.preventDefault();
    var selectedID = this.attr("meal-id");
    console.log("selected ID: " + selectedID);
    // var mealURL = 'https//:themealdb.com/api/json/v1/1/lookup.php?i=' + selectedID;

});
// $.ajax({
//     url: mealURL,
//     method: "GET"
// })
//     .then(function (response) {

//     })
