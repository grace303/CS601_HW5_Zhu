
/*jshint esversion: 6 */
/*jshint esversion: 8 */
async function getDegrees(url) {
    // fetch the url
    await fetch('https://grace303.github.io/CS601_HW5_Zhu/degrees.json')
        //get your data here, and check for the response status. If it's not 200, throw an error
        .then((response) => response.json())
        .then((data) => console.log(data)
        );
}

getDegrees("./src/degrees.json");