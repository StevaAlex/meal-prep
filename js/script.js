$(document).ready(function () {
    function getRandom(arr) {
        let random = arr[Math.floor(Math.random() * arr.length)];
        return random;
    }
    function chooseProtein() {
        var proteins = ["Chicken", "Lamb", "Beef", "Eggs", "Tofu", "Pork", "Lentils", "Salmon", "Sardines"];
        var proteinChoice = getRandom(proteins);
        var proteinURL = "https://themealdb.com/api/json/v1/1/filter.php?i=" + proteinChoice; 
        // console.log(proteinURL);
        $.ajax({
            url: proteinURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
             })
        //add code so if array= 2, one card has a standard recipe or is removed
    }
chooseProtein();
})