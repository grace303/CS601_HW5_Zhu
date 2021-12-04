
/*jshint esversion: 6 */
/*jshint esversion: 8 */

document.addEventListener("DOMContentLoaded", function (event) {
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
            let div = document.getElementById('container');
            div.appendChild(table);

        });










});
