
/*jshint esversion: 6 */
/*jshint esversion: 8 */

//Do everything when the doc is ready
document.addEventListener("DOMContentLoaded", function (event) {

    let button = document.getElementById('btn');


    //Add event listener to the button when clicking
    button.addEventListener("click", function (event) {
        //Clear everything when clicking on the button
        let div = document.getElementById('container');
        div.innerHTML = "";

        fetch('https://grace303.github.io/CS601_HW5_Zhu/degrees.json')
            .then(response => response.json())
            .then(data => {
                //1. Create a table
                const table = document.createElement('table');

                //2. Get table header, like "school", "major" etc.
                let headers = [];
                for (let item in data.my_degrees[0]) {
                    headers.push(item);
                }

                //3. Create table header with "school", "major" etc.
                let tr = table.insertRow(-1);
                for (let i = 0; i < headers.length; i++) {
                    let th = document.createElement("th");
                    th.innerHTML = headers[i];
                    tr.appendChild(th);
                }

                //4. Create other table rows with detailed information
                for (let i = 0; i < data.my_degrees.length; i++) {
                    let tr = table.insertRow(-1);
                    let degree = data.my_degrees[i];
                    for (let header of headers) {
                        let td = document.createElement("td");
                        td.innerHTML = degree[header];
                        tr.appendChild(td);
                    }

                }

                //5. Add the whole table to the page
                div.appendChild(table);

            });


    });



});



