// Function to import and parse the JSON FILE ""prizesByYear.json


//sourced from  practical readColorData.html

//create global varriable prizes_Arr to be accessible throughout nobels.html
var prizes_Arr;

var xmlhttp = new XMLHttpRequest();
var url = "prizesByYear.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        
        //Parse the JSON data to a JavaScript variable. 
         prizes_Arr = JSON.parse(xmlhttp.responseText);    
        // This function is defined below and deals with the JSON data parsed from the file. 
    }
};

xmlhttp.open("GET", url, false);
xmlhttp.send();



