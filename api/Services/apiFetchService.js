const fetch = require('node-fetch');

/**
 * Function to make a GET request request to an API
 * @param {*} url string with API url to consume.
 * @returns an object with the API data.
 */

async function getApiData(url) {
    try {
        const response = await fetch(`${url}`);
        return response.json();
    }
    
    catch(error) {
        console.log(error);
    }
}

module.exports.getApiData = getApiData;