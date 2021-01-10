//Create a table using the json file and slecting years and categories using dropdown list

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let winners 1 equal to laureates attribute of winners_Arr
var winners1 = winners_Arr.laureates


//Creating table+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//displayTableData with input object start year end year and category
function displayTableData(obj, start, end, cat) {

    //set prizes attribute of object prize_arr equal to prizes variable        
    var prizes = prizes_Arr.prizes;

    // let Mytable  equal to the table body of the class My-Table
    var MyTable = document.querySelector('#My-Table tbody')



    //create a dynamic html element out that will contain the data uses to populate My-Table
    var output = '<tr><th>Year</th> <th>Catgeory</th> <th>ID</th> <th>Name</th> <th>Motivation</th></tr>';

    //loop through prizes  to get data necesary for table rows
    for (var i = 0; i < prizes.length; i++) {
        var year = prizes[i].year;
        var category = prizes[i].category;
        var laureates = prizes[i].laureates;


        // only add laureates data that is between the declared years and call function popTable() and category is blank
        if ((year >= start) && (year <= end) && (end !== "Select End Year") && (cat == "Select category")) {
            popTable()
        }

        // only add laureates data that is between the declared years and call function popTable() and category is equal to category        
        else if ((year >= start) && (year <= end) && (end !== "Select End Year") && (cat == category)) {
            popTable()
        }

        //PopTable function fills Table with laureates information           
        function popTable() {

            //loop through laureates to get data necesary for table rows
            for (var j = 0; j < laureates.length; j++) {
                var name = laureates[j].firstname + " " + laureates[j].surname;
                var id = laureates[j].id;

                // select the ids from winners1 that match the ids in prizes in order to get dender of specific id's
                for (b of winners1) {
                    if (id == b.id)

                        // append the genders to the table row class
                        output += '<tr class="' + b.gender + '">'
                }

                // append the laureates data to the rows and columns of the table.
                output += '<td>' + year + '</td>' +
                    '<td>' + category + '</td>' +
                    '<td>' + id + '</td>' +
                    '<td><button onclick = "displayWinners(winners_Arr,' + id + ')">' + name + '</button></td>' +
                    '<td>' + laureates[j].motivation + '</td>' +
                    '</tr>';


            }
            // append the output toe the table with id "My-Table"
            document.getElementById("My-Table").innerHTML = output;
        }

    }


    document.getElementById('My-Table').style.display = "block";
    document.getElementById('myList').style.display = "none";


    // Error handling++++++++++++++++++++++++++++++++++++++++++++++++

    // alert user that the start year can not be greater than the end year


    if (start == "Select Start Year") {
        alert("Enter Start Year")
        document.getElementById('My-Table').style.visibility = "hidden";
        window.location.reload()

    } else if (start > end) {
        alert("Error: Start year must be less than end year!");
        document.getElementById('My-Table').style.visibility = "hidden";
        window.location.reload()
    }

    // only start year is selected hide table and reload page
    else if (end == "Select End Year") {
        alert("Enter End Year")
        document.getElementById('My-Table').style.visibility = "hidden";
        window.location.reload()
    }



}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Creating table


// function that displays the data from winners_Arr object
function displayWinners(obj, winnerid) {

    //create variable laureates
    var laureates = obj.laureates

    //create dynamic html unorderded list element
    var winnerList = '<ul>';


    //loop through laureates to get required data for list
    for (var i = 0; i < laureates.length; i++) {

        var fullName = laureates[i].firstname + " " + laureates[i].surname;
        var id = laureates[i].id;
        var born = laureates[i].born;
        var yod = laureates[i].died;
        var cityB = laureates[i].bornCity;
        var prizes = laureates[i].prizes;

        if (yod == "0000-00-00") {
            yod = ""
        }



        //loop through prizes to get required data for list
        for (var j = 0; j < prizes.length; j++) {
            var category = prizes[j].category;
            var motivation = prizes[j].motivation;
            var affiliations = prizes[j].affiliations;

            if (id == winnerid) {
                winnerList += '<h2>' + fullName + '</h2>' +
                    '<li>Year of birth: ' + born + '</li>' +
                    '<li>Year of death: ' + yod + '</li>' +
                    '<li>City of birth: ' + cityB + '</li>' +
                    '<li>Category of Prize: ' + category + '</li>' +
                    '<li>Motivation: ' + motivation + '</li>';

                //loop through affiliations to get required data
                for (var k = 0; k < affiliations.length; k++) {
                    var name = affiliations[k].name;
                    var city = affiliations[k].city;
                    var country = affiliations[k].country;


                    //add data from winners_Arr files to an winnerList 


                    winnerList +=
                        '<li>Affiliate name: ' + name + '</li>' +
                        '<li>Affiliate city: ' + city + '</li>' +
                        '<li>Affiliate country: ' + country + '</li>' +
                        '</ul>';


                }
            }

        }



        document.getElementById("myList").innerHTML = winnerList;
        document.getElementById('myList').style.display = "block";

    }
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// create winers variable that stores the winnersby id data
var winners = winners_Arr.laureates


//loop through winners data to get winners id
for (k = 0; k < winners.length; k++) {
    var winID = winners[k].id
}

// create prizesData variable that stores the prizes by year
var prizesData = prizes_Arr.prizes

//loop through winners data to get laureates

for (i = 0; i < prizesData.length; i++) {
    var laureates = prizesData[i].laureates

    //loop through laureates data to get prizes id  
    for (j = 0; j < laureates.length; j++) {
        var prizeID = laureates[j].id

    }
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// variables to populate table data collected from the dropdownlist

var sYear = document.getElementById("startYear");
var selectEnd = document.getElementById("endYear");
var Cat = document.getElementById("selectCat");


// function that calls displayTableData , called when submit button is pressed
function displayData(start, end, cat) {
    displayTableData(prizes_Arr, start, end, cat)
}

var arrayUnique = function (arr) {
    return arr.filter(function (item, index) {
        return arr.indexOf(item) >= index;
    });
};

