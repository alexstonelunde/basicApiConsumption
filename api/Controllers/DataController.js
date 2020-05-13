const apiFetchService = require('../Services/apiFetchService');
const apiProcessDataService = require('../Services/apiProcessDataService');
const apiOutputService = require('../Services/outputService');
const url = 'http://search-api.fie.future.net.uk/widget.php?id=review&site=TRD&model_name=iPad';

/**
 * Main controller function for performing API data request and processing operations.
 * @param {*} req 
 * @param {*} res returns HTTP response code and serverResponse object payload.
 */

async function processData (req, res) {

    let serverResponse = {
        status: 500,
        message: 'Operation failed, check console log'
    }

    try {
        let apiData = await apiFetchService.getApiData(`${url}`);
        let procApiData = apiProcessDataService.processApiData(apiData);
        apiOutputService.outputData(procApiData);

        serverResponse.status = 200;
        serverResponse.message = 'Operation successful, check console log'
               
        res
            .status(serverResponse.status)
            .json(serverResponse);
    }

    catch(error) {
        console.log(error);

        res
            .status(serverResponse.status)
            .json(serverResponse);
    }
}

module.exports.processData = processData;