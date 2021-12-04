
/*jshint esversion: 6 */
/*jshint esversion: 8 */

document.addEventListener("DOMContentLoaded", function (event) {
    fetch('https://grace303.github.io/CS601_HW5_Zhu/degrees.json')
        .then(response => response.json())
        .then(data => {
            console.log('My data', data);
        });

});
