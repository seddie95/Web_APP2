//https://stackoverflow.com/questions/58702186/show-hide-div-with-a-common-class-javascript-no-jquery/58702324#58702324



//create variables that hold all the rows where class is male and female
let maleRows = document.getElementsByClassName("male");
let femaleRows = document.getElementsByClassName("female");
let orgRows = document.getElementsByClassName("org");
let allRows = [...maleRows, ...femaleRows, ...orgRows];

//https://stackoverflow.com/questions/147208/how-to-hide-table-rows-without-resizing-overall-width
//function to the rows based on gender selcted using radio button 
function hide_row(gender) {
    document.getElementById('myList').style.display = "none";
    // reveal all the Rows, then hide those that need to be hidden

    //condition to check whether male or female or all radio checked

    if (gender == "male") {
        for (let el of femaleRows) {
            el.style.visibility = "collapse";


        }
        for (let el of maleRows) {
            el.style.visibility = "visible";

        }

        for (let el of orgRows) {
            el.style.visibility = "collapse";

        }



    } else if (gender == "female") {

        for (let el of maleRows) {
            el.style.visibility = "collapse";
        }

        for (let el of femaleRows) {

            el.style.visibility = "visible";

        }

        for (let el of orgRows) {
            el.style.visibility = "collapse";

        }

    } else if (gender == "org") {

        for (let el of maleRows) {
            el.style.visibility = "collapse";
        }

        for (let el of femaleRows) {

            el.style.visibility = "collapse";

        }

        for (let el of orgRows) {
            el.style.visibility = "visible";

        }

    } else {
        for (let el of maleRows) {

            el.style.visibility = "visible";

        }
        for (let el of femaleRows) {
            el.style.visibility = "visible";

        }
        for (let el of orgRows) {
            el.style.visibility = "visible";

        }

    }

}
