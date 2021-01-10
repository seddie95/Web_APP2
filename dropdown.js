//Select the data from prizes_Arr to poulate the dropdown lista

displayJSON(prizes_Arr)


function displayJSON(obj) {

    //https://codepen.io/cferdinandi/pen/MLWdBg
    //function to remove duplicates from arrays
    var arrayUnique = function (arr) {
        return arr.filter(function (item, index) {
            return arr.indexOf(item) >= index;
        });
    };
    //https://stackoverflow.com/questions/58477509/how-to-create-a-html-table-using-json-data-with-javascript
    // create variable to displaying json data as an array

    var categoryArray = []
    var yearArray1 = []
    var yearArray2 = []

    // create variable prizes
    prizes = obj.prizes;


    // loop through prizes to  select the year, category and laureates data
    for (var i = 0; i < prizes.length; i++) {
        year = prizes[i].year;
        var category = prizes[i].category;
        //var laureates = prizes[i].laureates;

        // create comma delimeted arrays

        // Appenddata to the arrays and add comma 
        yearArray1 += year + ","
        yearArray2 += year + ","
        categoryArray += category + ","

        //create new variable that house the data split using a comma

        var years1 = yearArray1.split(',');
        var years2 = yearArray2.split(',');
        var categories = categoryArray.split(',');

        //call the function arrayUnique on the arrays to remove duplicate data
        var y1Unique = arrayUnique(years1);
        var y2Unique = arrayUnique(years2);
        var catUnique = arrayUnique(categories)

    }


    // http://jsfiddle.net/yYW89/
    // Function to use array to fill dropdown menu
    function drop_down(id, unique) {
        var select = document.getElementById(id);
        var options = unique;
        for (var i = 0; i < options.length - 1; i++) {
            var opt = options[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el);

        }
    }


    // call the function drop_down to populate the dropdown menu with array data
    drop_down("startYear", y1Unique)
    drop_down("endYear", y2Unique)
    drop_down("selectCat", catUnique)

}
