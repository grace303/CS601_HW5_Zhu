
/*jshint esversion: 6 */
/*jshint esversion: 8 */

document.addEventListener("DOMContentLoaded", function (event) {
    fetch('https://grace303.github.io/CS601_HW5_Zhu/degrees.json')
        .then(response => response.json())
        .then(data => {
            // console.log('My data', data);

            //1. Create a table
            const table = document.createElement('table');

            //2. Get table header information
            var cols = [];
            for (let i = 0; i < data.my_degrees.length; i++) {
                for (let item in data.my_degrees[i]) {
                    console.log(item["school"]);
                }
            }


            // document.body.appendChild(table);
        });










});
