/**
 * Function to extract ID and Offer Price from API data
 * @param apiData object with returned API data
 * @returns array of objects, each a record populated with relevant data
 */

function processApiData(apiData) {

        let procApiData = apiData.widget.data.offers;
        var output = [];

        procApiData.forEach(data => {
            let record = {
                'ID' : data.id,
                'Offer Price' : data.offer.price
            }
            output.push(record);
        });
        
        return output;
}

module.exports.processApiData = processApiData;